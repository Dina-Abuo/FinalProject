
import Story from './story'
import React from 'react'
import './stories.css'

export default function Stories() {
  return (
    <>

  <div className='contenStory rounded border mt-3 '>
<div className='row d-flex  justify-content-center '> 
  <div className=' ss col-2 story mt-3  me-3 '> 
   <Story 
    profile="https://images.unsplash.com/photo-1666904366306-c8aab5d1006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    title="Food"
    />
    </div> 


   <div className=' vv col-2 story2 mt-3  me-2'>
    <Story
    profile="https://images.unsplash.com/photo-1666586559108-b741e232ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    title="Fashion"
    />
    </div>

    <div className=' tt col-2 story3 mt-3  me-3'>
    <Story
    profile="https://plus.unsplash.com/premium_photo-1664442990583-43a42393fd87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    title="Animals"
    />
    </div>

    <div className=' tt col-2 story4 mt-3  me-2'>
    <Story
    profile="https://plus.unsplash.com/premium_photo-1661427118169-7c3301cd8749?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    title="Art"
    />
    </div>

    <div className=' tt col-2 story5  mt-3  me-2'>
    <Story
    profile="https://images.unsplash.com/photo-1666030931740-adfdd279c5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    title="Travel"
    />
    </div>


   </div>
 
  </div> 

  






     </>
  )
}
