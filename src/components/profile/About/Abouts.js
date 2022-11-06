import React from 'react';
import './about.css';
import SidbarAbout from './sideBar/SidbarAbout';
import Overview from './overview/Overview'
export default function Abouts() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='div-about me-auto ms-auto col-lg-8  col-12 rounded border mt-3  '>
                        <div className='row '>
                            <div className='back-white col-lg-4  col-12 border-end  rounded-start '>
                                <a className='linkAbout ' href=' # '> About </a>
                                <SidbarAbout /></div>
                            <div className='back-white col-lg-8  col-12  rounded-end'>
                                <Overview />
                            </div >
                        </div ></div >
                </div >
            </div >
        </>
    )
}
