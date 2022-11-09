import React from 'react'
import './Header.css'
// import { useStateValue } from './StateProvider'
import PhotoProfile from './photoProfile'
import { Link } from "react-router-dom";
function Header({ profilePic }) {
    // const [{ user }, dispatch] = useStateValue();
    return (
        <>
            <div className='row'>
                <div className='header col-12'>
                    <div className='row '>
                        <div className='header__left col-3 '>
                            <img
                                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"} alt="FB-Logo" />
                            <div className="header__input">
                                <i className="bi bi-search"></i>
                                <input type="text" placeholder="search facebook" className="header_input_text" />
                            </div>
                        </div>
                        <div className='header-center  col-6  d-flex justify-content-center   align-items-center   '>
                            <Link to="/" className='header__options '>

                                <i className="fa-solid fa-house fa-2x  fs-4 "></i>
                            </Link>
                            <Link to="/friend" className='header__options me-5 '>

                                <i className="fa-solid fa-users fa-2x  fs-4"></i>
                            </Link>
                            <Link to="/group" className='header__options'>

                                <i className="fa-solid fa-tv fa-2x fs-4"></i>
                            </Link>
                        </div>
                        <div className='col-3 d-flex '>
                            <i className="fa-solid fa-list fa-2x  fs-4 header__options"></i>
                            <i className="fa-solid fa-bell fa-2x fs-4  header__options"></i>
                            <Link to="/profile" className='mt-2'><PhotoProfile /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;





