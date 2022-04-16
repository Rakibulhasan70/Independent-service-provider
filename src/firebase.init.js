// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmHpbvusrREgGVSg2vk-Kdphh1VTT9yAQ",
    authDomain: "assignment-10-eecce.firebaseapp.com",
    projectId: "assignment-10-eecce",
    storageBucket: "assignment-10-eecce.appspot.com",
    messagingSenderId: "272290738531",
    appId: "1:272290738531:web:54aea13aa91e9add966356"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)
export default auth;