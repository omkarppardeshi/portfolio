// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnvob0YYlNkvfdMvDHFynrzV75Ivdo46s",
  authDomain: "portfolioblog-f6a2b.firebaseapp.com",
  projectId: "portfolioblog-f6a2b",
  storageBucket: "portfolioblog-f6a2b.appspot.com", // Ensure the storageBucket is configured
  messagingSenderId: "849356987145",
  appId: "1:849356987145:web:c2ae1fe13f9c36b0ca11d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore and Storage exports
export const db = getFirestore(app);
export const storage = getStorage(app); // Initialize Firebase Storage and export it
