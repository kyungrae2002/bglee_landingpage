// Database Service - Handles all Firestore operations
import {
  db,
} from './firebase';
import {
  collection,
  addDoc,
  query,
  getDocs,
  where,
  orderBy,
  limit,
  getCountFromServer,
} from 'firebase/firestore';

/**
 * Save email to beta signup list in Firestore
 * @param {string} email - Email address to save
 * @param {string} name - Optional name field
 * @returns {Promise<boolean>} - Success status
 */
export async function saveBetaSignup(email, name = '') {
  try {
    if (!db) {
      console.error('Firestore not initialized. Check Firebase configuration.');
      return false;
    }

    // Reference to beta_signups collection
    const signupsCollection = collection(db, 'beta_signups');

    // Data to save
    const signupData = {
      email: email.toLowerCase().trim(),
      name: name.trim(),
      timestamp: new Date().toISOString(),
      createdAt: new Date(),
    };

    // Add document to Firestore
    const docRef = await addDoc(signupsCollection, signupData);
    console.log('Beta signup saved successfully:', email, 'DocID:', docRef.id);
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
    if (!db) {
      console.warn('Firestore not initialized. Returning 0.');
      return 0;
    }

    const signupsCollection = collection(db, 'beta_signups');
    const snapshot = await getCountFromServer(signupsCollection);

    return snapshot.data().count;
  } catch (error) {
    console.error('Error fetching beta signup count:', error);
    return 0;
  }
}

/**
 * Get recent beta signups (for admin dashboard)
 * @param {number} limitCount - Number of signups to retrieve
 * @returns {Promise<Array>} - Array of signup objects
 */
export async function getRecentSignups(limitCount = 10) {
  try {
    if (!db) {
      console.warn('Firestore not initialized.');
      return [];
    }

    const signupsCollection = collection(db, 'beta_signups');
    const q = query(
      signupsCollection,
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );

    const snapshot = await getDocs(q);
    const signups = [];

    snapshot.forEach((doc) => {
      signups.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return signups;
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
    if (!db) {
      console.warn('Firestore not initialized.');
      return false;
    }

    const signupsCollection = collection(db, 'beta_signups');
    const emailLower = email.toLowerCase().trim();

    const q = query(signupsCollection, where('email', '==', emailLower));
    const snapshot = await getDocs(q);

    return !snapshot.empty;
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
      totalSignups: 50,
      recentSignups: [],
      lastUpdated: null,
    };
  }
}
