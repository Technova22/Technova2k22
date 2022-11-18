// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, set , get ,child, update, remove, push, onValue} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUF2U2mTQQp0vrEbJPFzMqRaPmYynfceI",
  authDomain: "technova22-f21f2.firebaseapp.com",
  databaseURL: "https://technova22-f21f2-default-rtdb.firebaseio.com",
  projectId: "technova22-f21f2",
  storageBucket: "technova22-f21f2.appspot.com",
  messagingSenderId: "499347388002",
  appId: "1:499347388002:web:bf50994f21a1000585c33b",
  measurementId: "G-KV5PJT08MG"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
export const db = getDatabase();
