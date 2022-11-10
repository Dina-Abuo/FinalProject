import React, { useState } from 'react';
import HeadProfile from './head/HeadProfile'
// import Nav from './Nav/Nav'
import './profileStyle.css'
import Posts from './posts/posts'
import Abouts from './About/Abouts';
import Friends from './friends/Friends';
import Photos from './Photos/Photos';
import Vidoes from './Vidoes/vidoes';
export default function Porfile() {
    const [show, setshow] = useState(true)
    const handleClik = () => { setshow(!show) }

    const [showAoute, setshowAoute] = useState(false)
    const handleClikAoute = () => { setshowAoute(!showAoute) }

    const [showFriends, setshowFriends] = useState(false)
    const handleClikFriends = () => { setshowFriends(!showFriends) }

    const [showPhotos, setshowPhotos] = useState(false)
    const handleClikPhotosPhotos = () => { setshowPhotos(!showPhotos) }

    const [showVidoes, setshowVidoes] = useState(false)
    const handleClikVidoes = () => { setshowVidoes(!showVidoes) }

    return (
        <>
            <HeadProfile />

            <div className='perent-button '>
                <div className='col-8   perent-button  mb-3  border-top'>
                    <button className='class-Nav  me-4 ' onClick={handleClik} >Posts </button>
                    <button className='class-Nav   me-4 ' onClick={handleClikAoute} >Abouts </button>
                    <button className='class-Nav   me-4 ' onClick={handleClikFriends}>Friends </button>
                    <button className='class-Nav   me-4 ' onClick={handleClikPhotosPhotos}>Photos</button>
                    <button className='class-Nav   me-4 ' onClick={handleClikVidoes}>Vidoes </button>
                </div>
            </div>

            {/* <Nav /> */}
            {
                show && <Posts />
            }
            {
                showAoute && <Abouts />
            }
            {
                showFriends && <Friends />
            }

            {
                showPhotos && <Photos />
            }
            {
                showVidoes && <Vidoes />
            }


        </>
    )
}
