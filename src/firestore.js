import { initializeApp } from "firebase/app";
import { GetAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCpT5JM_LqCLJDRS0yxAD8hSXq545FQLr0",
    authDomain: "facebook-final-project123456.firebaseapp.com",
    databaseURL: "https://facebook-final-project123456-default-rtdb.firebaseio.com",
    projectId: "facebook-final-project123456",
    storageBucket: "facebook-final-project123456.appspot.com",
    messagingSenderId: "695169185350",
    appId: "1:695169185350:web:badb876bc3965322e1fc47",
    measurementId: "G-VEJR8M9192"
};


export const app = initializeApp(firebaseConfig);
export const auth = GetAuth(app);
export const firestore = getFirestore(app);
