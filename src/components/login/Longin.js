import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import "./login.css"
export default function Longin() {
  return (
    <>
      <div className="parent flex">
       <Child1/>
       <Child2/>
      </div> 
    </>
  )
}

