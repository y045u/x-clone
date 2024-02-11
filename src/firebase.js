// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcrKbvaJRWJkTyMRjZiDf0UqkLMknxLh0",
  authDomain: "x-clone-504d1.firebaseapp.com",
  projectId: "x-clone-504d1",
  storageBucket: "x-clone-504d1.appspot.com",
  messagingSenderId: "283452186629",
  appId: "1:283452186629:web:b583526903dac15d20fc6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
