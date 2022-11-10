import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../data/firebase";
import "./login.css";
export default function SignUp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const nav=useNavigate();
    const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        console.log(user);
        nav("/home")
      } catch (error) {
        console.log(error.message);
      }
    };
    return (
      <>
      
        <Button  onClick={handleShow} id='creat'>
         Create New Account
        </Button>

  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
             <h1>Sign Up</h1>
             <p>It's quick and easy.</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
          <div>
          <input  type="text" placeholder="First name " className='user'/> 
            <input  type="text" placeholder="Surname" className='user' /> 
            <br/>
            <input  type="text" placeholder=" Email address " className='text'
             onChange={(event) => {
                   setRegisterEmail(event.target.value);
             }} 
             />
            <br/>
            <input  type=" password" placeholder=" New password" className='text'
            onChange={(event) => {
               setRegisterPassword(event.target.value);
            }}
           /> 
             
        </div>
        <p>Gender</p>
        <form>
         <input type="radio"  name="Gender" value="Female" />
         <label for="Female">Female</label>
         <input type="radio" name="Gender" value="Male"/>
         <label for="Male">Male</label>
         <input type="radio"  name="Gender" value="Custom"/>
         <label for="Custom">Custom</label>
  
        </form> 

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={register}>
              Sign Up
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
   
  }