import React from 'react';
import Header from '../Header/Header';
import Sidebar from './siderbar/Sidebar';
import BodyHome from './bodyHome.js/BodyHome';
import SideBarRight from './sideBarRight/SideBarRight';
import './home.css'
import  Group  from '../Groups/groups';
import { Routes, Route} from "react-router-dom";
import Profile from '../profile/Porfile'
export default function Home() {
    return (
            <div className="container">
                <Header />
                <Routes>
                 <Route path="/" element={
                 <div className="container grid">
                    <Sidebar/>
                    <BodyHome />
                    <SideBarRight />
                </div>
                }/>            
                <Route path='/group' element={<Group/>  }/>
                 <Route path="photoPorfile" element={<Profile />}/>
                </Routes>
            </div>
    )
}
