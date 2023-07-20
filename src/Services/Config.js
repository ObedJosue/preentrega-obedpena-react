import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "proyectoreactop.firebaseapp.com",
  projectId: "proyectoreactop",
  storageBucket: "proyectoreactop.appspot.com",
  messagingSenderId: "195548355503",
  appId: "1:195548355503:web:4338835e0c387e15066d5a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
