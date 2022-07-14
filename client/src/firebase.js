import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdBxr_-3uGkfYcmI3OA3kKOVHKhV3FRzs",
  authDomain: "videotube-6e449.firebaseapp.com",
  projectId: "videotube-6e449",
  storageBucket: "videotube-6e449.appspot.com",
  messagingSenderId: "695595275513",
  appId: "1:695595275513:web:79e71ea734f6b0aef47e28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;

