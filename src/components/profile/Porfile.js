import React from 'react'
import HeadProfile from './head/HeadProfile';
import Nav from './Nav/Nav';
import Posts from './posts/posts'
import Abouts from './About/Abouts';
import Friends from './friends/Friends';
import Photos from './Photos/Photos';
import Vidoes from './Vidoes/vidoes';
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
