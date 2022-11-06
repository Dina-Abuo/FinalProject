import React from 'react';
import Header from '../Header/Header';
import Sidebar from './siderbar/Sidebar';
import BodyHome from './bodyHome.js/BodyHome';
import SideBarRight from './sideBarRight/SideBarRight';
import './home.css'
import { Routes, Route } from "react-router-dom";
import HeadProfile from '../profile/head/HeadProfile';
import Nav from '../profile/Nav/Nav';
import Posts from '../profile/posts/posts';
import Abouts from '../profile/About/Abouts';
import Friends from '../profile/friends/Friends';
import Photos from '../profile/Photos/Photos';
import Vidoes from '../profile/Vidoes/vidoes';

export default function Home() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={
                    <div className="container grid">
                        <Sidebar />
                        <BodyHome />
                        <SideBarRight />
                    </div>
                } />
                <Route path="photoPorfile" element={
                    <>
                        <HeadProfile />
                        <Nav />
                        <Routes>
                            <Route exact path='/' element={<Posts />} />
                            <Route path='/about' element={<Abouts />} />
                            <Route path='/friends' element={<Friends />} />
                            <Route path='/photos' element={<Photos />} />
                            <Route path='/vidoes' element={<Vidoes />} />
                        </Routes>
                    </>
                } />
            </Routes>
        </div>
    )
}
