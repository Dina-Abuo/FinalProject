import React, { useEffect, useState } from 'react'
import './view.css'
import Workplse from './Workplse';
import School from './School ';
import College from './College';
// import { addDoc, collection, getFirestore } from 'firebase/firestore';
// import firestore from '../../../../firestore';
export default function Overview() {


  // function saveWorkplse() {
  //   var company = document.getElementById("Company").value;
  //   var position = document.getElementById("Position").value;
  //   var city = document.getElementById("City").value;
  // }
  // var data = {
  //   Company: company,
  //   Position: position,
  //   City: city,
  // }
  // var addWorkplse = addDoc(collection(firestore, 'Workplse'), data);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [showWorkplse, setShowWorkplse] = useState(false);

  const handleShowWorkplse = () => setShowWorkplse(!showWorkplse);

  const [showschool, setShowschool] = useState(false);

  const handleShowschool = () => setShowschool(!showschool);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  useEffect(() => {
    console.log(" we are mounting  ");
    return () => console.log("numount");
  }, []);
  useEffect(() => { console.log(" we are updating  "); }, [show]);

  return (
    <>
      <div className=' d-flex p-3'>
        <div className='iconPlus d-flex me-2 '><i className="fa-solid fa-plus "></i></div>
        <button className=' btun-Show' onClick={() => handleShowWorkplse()}    >Add Workplse  </button>
      </div>

      {showWorkplse && <Workplse />}

      {/* ******************************** form 2*********************************** */}

      <div className=' d-flex p-3'>
        <div className='iconPlus d-flex me-2 '><i className="fa-solid fa-plus "></i></div>
        <button className='btun-Show' onClick={() => handleShowschool()} >Add high school </button>
      </div>
      {showschool && <School />}


      {/* ******************************** form 2*********************************** */}

      <div className=' d-flex p-3'>
        <div className='iconPlus d-flex me-2 '><i className="fa-solid fa-plus "></i></div>
        <button className=' btun-Show' onClick={() => handleShow()}  >Add college  </button>
      </div>
      {show && <College />}
    </>
  )
}
