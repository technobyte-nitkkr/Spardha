import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const apikey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const databaseURL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: apikey?.trim(),
  authDomain: authDomain?.trim(),
  databaseURL: databaseURL?.trim(),
  projectId: projectId?.trim(),
  storageBucket: storageBucket?.trim(),
  messagingSenderId: messagingSenderId?.trim(),
  appId: appId?.trim(),
  measurementId: measurementId?.trim(),
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
