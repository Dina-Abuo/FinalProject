import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpT5JM_LqCLJDRS0yxAD8hSXq545FQLr0",
    authDomain: "facebook-final-project123456.firebaseapp.com",
    databaseURL: "https://facebook-final-project123456-default-rtdb.firebaseio.com",
    projectId: "facebook-final-project123456",
    storageBucket: "facebook-final-project123456.appspot.com",
    messagingSenderId: "695169185350",
    appId: "1:695169185350:web:018f22ffda136e04e1fc47",
    measurementId: "G-YRVGD4SND6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize storage
export const storage = getStorage(app);
// Initialize Firestor
export const firestore = getFirestore(app);
// Initialize authontiction 
export const auth = getAuth(app);


