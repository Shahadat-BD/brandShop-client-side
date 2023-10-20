// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0FG15fWEP8CwFY_OJN0p6PmVA2-zb4II",
  authDomain: "e-commerce-brand-shop.firebaseapp.com",
  projectId: "e-commerce-brand-shop",
  storageBucket: "e-commerce-brand-shop.appspot.com",
  messagingSenderId: "564915984225",
  appId: "1:564915984225:web:8f74707ea0717d80255720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app