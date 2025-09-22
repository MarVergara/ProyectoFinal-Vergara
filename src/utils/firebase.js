// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOqMS14uJzVl6ZyqR9nrUdKU5QTyelEx8",
  authDomain: "flower-shop-project-bda54.firebaseapp.com",
  projectId: "flower-shop-project-bda54",
  storageBucket: "flower-shop-project-bda54.firebasestorage.app",
  messagingSenderId: "793918820267",
  appId: "1:793918820267:web:29a6e97cb369191f4accee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
