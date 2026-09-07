import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6Xqmz-CMzvL0TS0Bn1cmNqmd8QdJVAuA",
  authDomain: "dhiqar-store.firebaseapp.com",
  projectId: "dhiqar-store",
  storageBucket: "dhiqar-store.firebasestorage.app",
  messagingSenderId: "218844146604",
  appId: "1:218844146604:web:298a1a028d3c96c7e2a809"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
