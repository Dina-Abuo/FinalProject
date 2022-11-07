import React from 'react'
import Nav from './Nav/Nav';
import Posts from '../profile/posts/posts';
import Abouts from'../profile/About/Abouts'
import Friends from '../profile/friends/Friends'
import Photos from '../profile/Photos/Photos'
import Vidoes from'../profile/Vidoes/vidoes'
import HeadProfile from './head/HeadProfile';
export default function Porfile() {
    return (
        <>
    
                <HeadProfile />
                  <Nav />
                    <Posts /> 
                   <Abouts /> 
                  <Friends />
                   <Photos />
                  <Vidoes />
             


        </>
    )
}
