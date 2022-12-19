import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC39lAKDF83FQhUDblzp7rmFPcUou3FgEE",
  authDomain: "dashboard-e9751.firebaseapp.com",
  projectId: "dashboard-e9751",
  storageBucket: "dashboard-e9751.appspot.com",
  messagingSenderId: "980002872704",
  appId: "1:980002872704:web:d18c85e854ccf8f8e7f565",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);
export const storage = getStorage(app);
