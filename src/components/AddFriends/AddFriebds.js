import React from 'react'
import './add.css'
import Header from '../Header/Header'
import PeopleYouMayKnow from './PeopleYouMayKnow/PeopleYouMayKnow'
import FriendReques from './FriendRequest/FriendRequest'
export default function AddFriebds() {
    return (
        <>
            <Header />
            <div className='row'>
                <div className='col-lg-3 sid  col-12 ' >
                    <div className='d-flex p-3 align-items-center justify-content-between '> <h3> Friends</h3>
                        <div className='iDiv'>
                            <i className="fa-sharp fa-solid fa-gear"></i>
                        </div></div>

                    <ul className='ulSid'>
                        <li><i class="fa-solid fa-user fs-5 me-2"></i> <a href=' # '>Home </a></li>
                        <li><i class="fa-solid fa-user-plus fs-5 me-2"></i>  <a href=' # '>Friend Requests</a></li>
                        <li><i class="fa-solid fa-user-plus fs-5 me-2"></i> <a href=' # '>Suggestions </a></li>
                        <li><i class="fa-solid fa-user-plus fs-5 me-2"></i>  <a href=' # '>All frinds </a></li>
                        <li><i class="fa-solid fa-gift fs-5 me-2"></i>   <a href=' # '>Birthdays </a></li>
                        <li><i class="fa-solid fa-user-plus fs-5 me-2"></i>  <a href=' # '>Custom Lists </a></li>
                    </ul>
                </div>

                <div className='part2 col-lg-9 border-box '>
                    <div className='part2 row '>
                        <div className='part2 col-12 mt-5   pt-2     ' >
                            <div className='head mb-3 ' ><a href=' # '>  <h3>Friend Requests</h3> </a>   </div>
                            <FriendReques />
                        </div>

                        <div className='part2 col-12 mt-5   pt-2   border-top '>
                            <div className='head mb-3 ' ><a href=' # '>  <h3>People You May Know</h3> </a>   </div>
                            <PeopleYouMayKnow />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
