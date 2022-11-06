import React from 'react';
import Header from '../Header/Header';
import Sidebar from './siderbar/Sidebar';
import BodyHome from './bodyHome.js/BodyHome';
import SideBarRight from './sideBarRight/SideBarRight';
import './home.css'

export default function Home() {
    return (
        <>

            <div className="container">
                <Header />
                <div className="container grid">
                    <Sidebar/>
                    <BodyHome />
                    <SideBarRight />
                </div>
            </div>

        </>


    )
}
