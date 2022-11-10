import React, { useState } from 'react';
import { auth } from "../../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./login.css"
import SignUp from './SignUp'

 function Child2() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      } catch (error) {
      console.log(error.message);
  
  };}
  return (
    <>
    <div className="two  ">
            <form className='form'>
                <input  className='input-text' type="text" placeholder=" Email address"
                 onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
                />
                <br/>
                <input className='input-pass' type=" password" placeholder="password"
                 onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
                />
                <br/>
                <input className="input-button" type="button" value="Log In"
                 onClick={login}
                />
                <br/>
                <a href="#"> forgotten password? </a>
                
                <SignUp/>
            </form>
            <p className="creat-page" > <b>creat a page </b> for a celebirty, band or business</p>
    
    </div>
    </>
  )
   
 }
export default  Child2;