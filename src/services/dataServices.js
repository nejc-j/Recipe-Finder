import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export const addUser = async (userData) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), userData);
    return docRef.id; // Return document ID
  } catch (error) {
    throw error;
  }
};

// Example to get user by email
export const getUserByEmail = async (email) => {
  try {
    const q = query(collection(db, 'users'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    // Assuming email is unique and only fetching one result
    return querySnapshot.docs[0].data();
  } catch (error) {
    throw error;
  }
};
