// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAsstTpdU2ZUhqFT9bR4EOlB_LpKNFoO_I",
  authDomain: "quizify-3335e.firebaseapp.com",
  projectId: "quizify-3335e",
  sstorageBucket: "quizify-3335e.firebasestorage.app",
  messagingSenderId: "227413709051",
  appId: "1:227413709051:web:0d1ccc01e47bb68554205e",
  measurementId: "G-EL7E129Z83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // 

export const analytics = getAnalytics(app);
export default app;
