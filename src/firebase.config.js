// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg_M2xxbSERbdQgfncyT7aHLukTDnG4G0",
  authDomain: "f11-react.firebaseapp.com",
  projectId: "f11-react",
  storageBucket: "f11-react.appspot.com",
  messagingSenderId: "530994738671",
  appId: "1:530994738671:web:dddfb606cef09a8309721a",
  measurementId: "G-GS6XQYWSHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export { auth };
