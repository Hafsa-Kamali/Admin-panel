import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAeCx8b6u5xA-iXaW9rMLsOxY7LZGV1mhY",
  authDomain: "bandage-app-c31f7.firebaseapp.com",
  projectId: "bandage-app-c31f7",
  storageBucket: "bandage-app-c31f7.firebasestorage.app",
  messagingSenderId: "302810679057",
  appId: "1:302810679057:web:21fe43c92afdff8586eeb0",
  measurementId: "G-WS3T9J5WXH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
