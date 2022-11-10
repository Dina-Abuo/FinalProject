import React from 'react';
import './home.css';
import Siderbar from './siderbar/Sidebar'
import SideBarRight from './sideBarRight/SideBarRight'
import Header from "../Header/Header"
import BodyHome from './bodyHome/BodyHome'
export default function Home() {
    return (
        <>
            <Header/>
            <div className='row '>
                <div className="col-lg-3 non" >
                    <Siderbar />
                </div>
                <div className="col-11  col-lg-5  ms-5" >
                    <BodyHome />
                </div>
                <div className='col-lg-3 non'> <SideBarRight /> </div>
            </div>


        </>
    )
}
