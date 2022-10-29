import React from 'react';
import { Link } from 'react-router-dom';
import './styleHead.css';
export default function HeadProfile() {
    return (
        <>
            <div className='content'>
                <div className='classprofile'>
                    <div className='Background' >  < a href=' # ' className='link-Background ' > </a> </div>
                    <div className='ChildBackground  d-flex justify-content-between'>
                        <div className='d-flex penert-image-name '>
                            <div className='imageProfile  ml-5'>  < a href=' # ' id='link-imageProfile'> <img id='image-imageProfile' src="https://th.bing.com/th/id/R.3265bf2fc4eef657f7e07c6cc208f698?rik=xHYudfX59TQeBw&riu=http%3a%2f%2fucanr.edu%2fsb3%2fdisplay_2018%2fimages%2fdefault-user.png&ehk=lR79jc%2bgKqbB9NYy%2b6MMZFsY5PhVpMBFGqbtyZ1CZVg%3d&risl=&pid=ImgRaw&r=0" />   </a></div>
                            <div className='Pener-name mt-5 '>
                                <h4 id='name-profile'> Dina Abouelsoud  </h4>
                                <Link to=" friends " id="count-fiends">   <span> 1 </span>  friends </Link>
                            </div>
                        </div>
                        <div className='edit-add d-flex align-items-end  justify-content-around '>
                            <div className='perent-add-to-Story d-flex align-items-center justify-content-around  ' >
                                <div className='div-icon d-flex align-items-center justify-content-center '><i class="fa-duotone fa-plus mb-1"></i></div>
                                <a className=' p-2' href=" # "> Add to Story</a>
                            </div>
                            <div className='perent-edit-Profil   '>
                                <i class="fa-solid fa-pen"></i>
                                <a className='p-3' href=" # "> Edit Profil </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
