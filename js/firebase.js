
// 🔥 Firebase Config (ضع بياناتك هنا)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAgOK41UZHiFOzSIxn6tSSSrg09_VRUHII",
  authDomain: "glory-admin.firebaseapp.com",
  projectId: "glory-admin",
  storageBucket: "glory-admin.appspot.com",
  messagingSenderId: "977036517931",
  appId: "1:977036517931:web:efd098c8442b7d8193006e"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
