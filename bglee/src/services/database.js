// Database Service - Handles all Firebase Realtime Database operations
import { database } from './firebase';
import { ref, push, query, orderByChild, limitToLast, get, child } from 'firebase/database';

/**
 * Save email to beta signup list
 * @param {string} email - Email address to save
 * @param {string} name - Optional name field
 * @returns {Promise<boolean>} - Success status
 */
export async function saveBetaSignup(email, name = '') {
  try {
    if (!database) {
      console.error('Database not initialized. Check Firebase configuration.');
      return false;
    }

    // Reference to beta signups in database
    const signupsRef = ref(database, 'beta_signups');

    // Data to save
    const signupData = {
      email: email.toLowerCase().trim(),
      name: name.trim(),
      timestamp: new Date().toISOString(),
      createdAt: Date.now(),
    };

    // Push to Firebase (will generate unique ID)
    await push(signupsRef, signupData);
    console.log('Beta signup saved successfully:', email);
    return true;
  } catch (error) {
    console.error('Error saving beta signup:', error);
    return false;
  }
}

/**
 * Get total count of beta signups
 * @returns {Promise<number>} - Total number of signups
 */
export async function getBetaSignupCount() {
  try {
    if (!database) {
      console.warn('Database not initialized. Returning 0.');
      return 0;
    }

    const signupsRef = ref(database, 'beta_signups');
    const snapshot = await get(signupsRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.keys(data).length;
    }

    return 0;
  } catch (error) {
    console.error('Error fetching beta signup count:', error);
    return 0;
  }
}

/**
 * Get recent beta signups (for admin dashboard)
 * @param {number} limit - Number of signups to retrieve
 * @returns {Promise<Array>} - Array of signup objects
 */
export async function getRecentSignups(limit = 10) {
  try {
    if (!database) {
      console.warn('Database not initialized.');
      return [];
    }

    const signupsRef = ref(database, 'beta_signups');
    const recentQuery = query(signupsRef, orderByChild('createdAt'), limitToLast(limit));

    const snapshot = await get(recentQuery);

    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.entries(data).reverse().map(([id, value]) => ({
        id,
        ...value,
      }));
    }

    return [];
  } catch (error) {
    console.error('Error fetching recent signups:', error);
    return [];
  }
}

/**
 * Check if email is already signed up
 * @param {string} email - Email to check
 * @returns {Promise<boolean>} - True if email exists
 */
export async function isEmailExists(email) {
  try {
    if (!database) {
      console.warn('Database not initialized.');
      return false;
    }

    const signupsRef = ref(database, 'beta_signups');
    const snapshot = await get(signupsRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const emailLower = email.toLowerCase().trim();

      return Object.values(data).some((signup) => signup.email === emailLower);
    }

    return false;
  } catch (error) {
    console.error('Error checking email existence:', error);
    return false;
  }
}

/**
 * Get analytics summary (for admin dashboard)
 * @returns {Promise<Object>} - Analytics data
 */
export async function getAnalyticsSummary() {
  try {
    const count = await getBetaSignupCount();
    const recentSignups = await getRecentSignups(5);

    return {
      totalSignups: count,
      recentSignups: recentSignups,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error fetching analytics summary:', error);
    return {
      totalSignups: 0,
      recentSignups: [],
      lastUpdated: null,
    };
  }
}
