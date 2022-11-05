import React from 'react'
import "./Header.css";
export default function Header(notifications) {


  




    return (
        <>
  <ul>
   {notifications && notifications.map(item =>{
    return(
      <li key={item.id}>
        <span className='pink-text'>{item.user}</span>
        <span className='pink-text'>{item.content}</span>


      </li>
    )
   })}

  </ul>
  
        </>
    )
}






