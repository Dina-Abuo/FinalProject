import React from 'react'
import Massanger from '../../Home/bodyHome/post/Massanger'
export default function Posts() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='ms-auto me-auto  col-lg-8 m-3  col-8'>
                        <div className='row '>
                            <div className='col-lg-4 col-12'>
                                <h2>Intro</h2>
                                <button type="button" class="btn btn-light w-100 p-2 m-1">Add bio</button><br></br>
                                <button type="button" class="btn btn-light w-100 p-2 m-1">Edit details</button><br></br>
                                <button type="button" class="btn btn-light w-100 p-2 m-1">Add hobbies</button><br></br>
                                <button type="button" class="btn btn-light w-100 p-2 m-1">Add featured</button><br></br>
                            </div>
                            <div className='col-lg-8 col-12 ' >
                                <Massanger />
                            </div>
                        </div></div>
                </div>
            </div>
        </>
    )
}
