// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC97h73ZFXRFUfUY_rkLtFe69pNv3GVJy4",
  authDomain: "clone-h.firebaseapp.com",
  projectId: "clone-h",
  storageBucket: "clone-h.appspot.com",
  messagingSenderId: "818952265198",
  appId: "1:818952265198:web:dadbcb3aa85efedaa202ff",
  measurementId: "G-X194V1TL58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
