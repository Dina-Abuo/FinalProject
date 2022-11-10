import React, { useEffect, useState } from 'react';
import '../imageProfile/styleImage.css';
import '../styleHead.css'
import { storage } from "../../../../data/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
export default function Background() {

    const [imageUpLoad, setImageUpLoad] = useState(null)
    const [imageList, setImageList] = useState([])

    const imageListRef = ref(storage, "images/");

    const uploadImage = () => {
        if (imageUpLoad == null) return 1;
        const imageRef = ref(storage, `images/${imageUpLoad.name + v4()}`)
        uploadBytes(imageRef, imageUpLoad).then(() => {
            alert("amge");
        })
    }

    useEffect(() => {
        listAll(imageListRef).then((respons) => {
            respons.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    imageListRef((prev) => [...prev, url])
                })
            })
        })

    }, [])

    return (
        <>

            <div className='d-flex  modle-head  justify-content-between align-items-center  '>
                <h4>Cover Photo</h4>
                <button type='button' onClick={uploadImage} >Add</button>  </div>

            <label className='cover-phto rounded  mt-3 mb-2  '>
                {
                    imageList.map((dina) => {
                        return <>
                            <img src={dina}
                                alt="BigCo Inc. logo" />
                        </>
                    })
                }
                <input type="file" className='input__image ' onChange={(e) => setImageUpLoad(e.target.files[0])} />
            </label>



        </>
    )
}
