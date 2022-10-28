import React from 'react'
import HeadProfile from './head/HeadProfile';
import Nav from './Nav/Nav';
import Posts from './posts/posts'
import Abouts from './About/Abouts';
import Friends from './friends/Friends';
import Photos from './Photos/Photos';
import Vidoes from './Vidoes/vidoes';
import CheckIn from './CheckIn/CheckIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Porfile() {
    return (
        <>
            <Router>
                <HeadProfile />
                <Nav />
                <Routes>
                    <Route exact path='/' element={<Posts />} />
                    <Route path='/about' element={<Abouts />} />
                    <Route path='/friends' element={<Friends />} />
                    <Route path='/photos' element={<Photos />} />
                    <Route path='/vidoes' element={<Vidoes />} />
                    <Route path='/check' element={<CheckIn />} />
                </Routes>
            </Router>
        </>
    )
}
