import React from 'react'
import "./login.css"
export default function Child2() {
  return (
    <>
    <div className="two  ">
            <form>
                <input  className='input-text' type="text" placeholder=" Email address or phone number"/>
                <br/>
                <input className='input-pass' type=" password" placeholder="password"/>
                <br/>
                <input className="input-button" type="button" value="Log In"/>
                <br/>
                <a href="#"> forgotten password? </a>
                
                <button className='creat'>Create New Account</button>
            </form>
            <p className="creat-page" > <b>creat a page </b> for a celebirty, band or business</p>
    
    </div>
    </>
  )
}

