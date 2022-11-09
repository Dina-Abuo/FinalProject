import React from 'react';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './styleHead.css';
import ImageProfile from './imageProfile/ImageProfile'
import Background from "./background/background"
export default function HeadProfile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="background-color-white ">
            <div className='container'>
                <div className='row  d '>
                    <div className='col-lg-9 me-auto ms-auto '>
                        <div className='row '>
                            <div className='col-lg-12 Background '></div>
                            <div className='col-lg-12 '>
                                <div className='row'>
                                    <div className='contentImageProfile col-12 col-lg-3  '>
                                        <div className='imageProfile ms-5 me-4'   >  <a href=' # ' >
                                            <img id='image-imageProfile' className='img-fluid rounded-circle position-absolute bottom-0'
                                                src="https://th.bing.com/th/id/R.3265bf2fc4eef657f7e07c6cc208f698?rik=xHYudfX59TQeBw&riu=http%3a%2f%2fucanr.edu%2fsb3%2fdisplay_2018%2fimages%2fdefault-user.png&ehk=lR79jc%2bgKqbB9NYy%2b6MMZFsY5PhVpMBFGqbtyZ1CZVg%3d&risl=&pid=ImgRaw&r=0" />
                                        </a></div>
                                    </div>
                                    <div className='name-profile-count-fiends col-12 col-lg-5 mt-lg-5 ' >
                                        <h4 id='name-profile'> Dina Abouelsoud  </h4>
                                        <a href=' # ' id="count-fiends">   <span> 1 </span>  friends </a>
                                    </div>

                                    <div className='edit-add  d-flex align-items-end   col-12 col-lg-4   mt-4  mt-lg- 0  '>

                                        <div className='perent-add-to-Story  d-flex align-items-center justify-content-around '>
                                            <div className='div-icon d-flex align-items-center justify-content-center'>
                                                <i class="fa-duotone fa-plus mb-1"></i>
                                            </div>
                                            <a className=' p-2' href=" # "> Add to Story</a>
                                        </div>

                                        <div className='perent-edit-Profil   ms-4'>
                                            <i class="fa-solid fa-pen"></i>
                                            <button type="button" className='btun p-2' onClick={handleShow}> Edit profile</button>

                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton >
                                                    <Modal.Title className='text'>Edit profile</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body className='border-bottom'>

                                                    <ImageProfile />

                                                </Modal.Body>
                                                <Modal.Body className='border-bottom'>
                                                    <Background/>
                                                </Modal.Body>
                                                <Modal.Body >
                                                    <div className='d-flex  modle-head  justify-content-between align-items-center  '><h4>Bio</h4> <button type='button'>Add</button>  </div>
                                                </Modal.Body>
                                                <div className='mt-3 mb-3 text-center'>Describe yourself...</div>
                                                <Modal.Body>
                                                    <div className='d-flex  modle-head  justify-content-between align-items-center  '><h4>Customize your intro</h4> <button type='button'>Edit</button>  </div>
                                                    <div>
                                                        <div className='mb-2'> <i class="fa-solid fa-house me-2  gree"></i> Lives in <a href=' # '> </a>  </div>
                                                        <div className='mb-2'> <i class="fa-solid fa-briefcase me-2 gree"></i>Workplace<a href=' # '> </a>  </div>
                                                        <div className='mb-2'> <i class="fa-sharp fa-solid fa-graduation-cap me-2 gree"></i>School <a href=' # '> </a>  </div>
                                                        <div className='mb-2'> <i class="fa-solid fa-location-dot me-2 gree"></i>Hometown<a href=' # '> </a>  </div>
                                                        <div className='mb-2'><i class="fa-solid fa-heart  me-2 gree"></i>Relationship Status<a href=' # '> </a>  </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Body >
                                                    <div className='d-flex  modle-head  justify-content-between align-items-center  '><h4>Hobbies</h4> <button type='button'>Add</button>  </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className='button-handle rounded ' onClick={handleClose}>
                                                        Edit your About info
                                                    </button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
