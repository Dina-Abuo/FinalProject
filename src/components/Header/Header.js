import React from 'react'
import './Header.css'
// import { useStateValue } from './StateProvider'


function Header({profilePic}) {
    // const [{ user }, dispatch] = useStateValue();
    return (
        <div className = "header">
            <div className = "header__left">
                <img 
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
                    alt = "FB-Logo"
                />
                <div className = "header__input">
                <i class="bi bi-search"></i>
                    <input type = "text" placeholder = "search facebook" className = "header__input__text" />
                </div>
            </div>
            <div className = "header__middle">
                <div className = "header__options header__options--active">
                <i className="fa-solid fa-house fa-2x"></i>
                </div>
                <div className = "header__options">
                <i className="fa-solid fa-users fa-2x"></i>
                </div>
                <div className = "header__options">
                <i className="fa-solid fa-tv fa-2x"></i>
                </div>
                {/* <div className = "header__options">
                    <StorefrontOutlinedIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <SupervisedUserCircleIcon fontSize = "large" />
                </div> */}
            </div>
            <div className = "header__info ">
            <i className="fa-solid fa-list fa-2x  header__options"></i>
            <i className="fa-solid fa-bell fa-2x  header__options"></i>
            <div className ="header__right" >
                <img src = "https://e7.pngegg.com/pngimages/58/564/png-clipart-user-profile-computer-icons-avatar-avatar-white-face-thumbnail.png" className = "header__info1"/>
            </div>
            </div>
        </div>
    )
}

export default Header;





