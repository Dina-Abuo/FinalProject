import React from 'react'
import Massanger from './post/Massanger'
import Post from './post/Post'
export default function BodyHome() {
    return (
        <div className = "">
            <Massanger />
            <Post 
                profilePic =" http://sites.duke.edu/wcwp/files/2020/02/Picture1.png"
                message = "  انا الملك المصري"
                timestamp = "time..."
                username = "mo Salah"
                image = "http://sites.duke.edu/wcwp/files/2020/02/Picture1.png" 
            />
        </div>
    )
};
