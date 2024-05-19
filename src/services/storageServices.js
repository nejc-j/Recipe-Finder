import { storage } from '../firebaseConfig';
import { ref, uploadBytes } from 'firebase/storage';

export const uploadFile = async (file, path) => {
  const storageRef = ref(storage, path);
  try {
    const snapshot = await uploadBytes(storageRef, file);
    return snapshot; // Returns snapshot of the uploaded file
  } catch (error) {
    throw error;
  }
};
