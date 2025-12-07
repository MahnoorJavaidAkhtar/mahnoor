// src/firebaseConfig.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDmCkyhFxs2MeDv0inkCLFDqOjUnfpi-dY",
  authDomain: "mahnoor-df039.firebaseapp.com",
  projectId: "mahnoor-df039",
  storageBucket: "mahnoor-df039.firebasestorage.app",
  messagingSenderId: "506450330892",
  appId: "1:506450330892:web:4149f1317320464460f529",
  measurementId: "G-2TXJMJ5Q59"
};

// Prevent double initialization (important for Docusaurus SSR)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Firebase Auth instance
export const auth = getAuth(app);

// ⭐ ADD GOOGLE PROVIDER HERE ⭐
export const googleProvider = new GoogleAuthProvider();

export default app;

