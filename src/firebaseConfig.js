import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCEHwN1X4DZtFdH2FBrA3l0o5uDlK_gYTE',
  authDomain: 'recipe-finder-65cc8.firebaseapp.com',
  projectId: 'recipe-finder-65cc8',
  storageBucket: 'recipe-finder-65cc8.appspot.com',
  messagingSenderId: '621103056530',
  appId: '1:621103056530:web:25cbfb393db8f6f652c84b',
  measurementId: 'G-QJVWXEN2DB',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
