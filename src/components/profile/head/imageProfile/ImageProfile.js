import React, { useEffect, useState } from 'react';
import './styleImage.css';
import '../styleHead.css'
import { storage } from "../../../../data/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
export default function ImageProfile() {


    const [defult, setdefult] = useState(false)
    const defaultImage = () => { setdefult(!defult) }
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
            <div >
                <div className='d-flex  modle-head  justify-content-between align-items-center  '><h4>Profile picture</h4> <button type='button' onClick={uploadImage} >Add</button>  </div>
                <div className='contentImageProfile d-flex justify-content-center align-items-center     '>
                    <label className='imageProfile   top-0 '  >
                        {/* <img
                            className='img-fluid rounded-circle  border position-absolute bottom-0'

                            src={ defaultImage() ? : "https://th.bing.com/th/id/R.3265bf2fc4eef657f7e07c6cc208f698?rik=xHYudfX59TQeBw&riu=http%3a%2f%2fucanr.edu%2fsb3%2fdisplay_2018%2fimages%2fdefault-user.png&ehk=lR79jc%2bgKqbB9NYy%2b6MMZFsY5PhVpMBFGqbtyZ1CZVg%3d&risl=&pid=ImgRaw&r=0"}
                        /> */}
                        <input type="file" className='input__image' onChange={(e) => setImageUpLoad(e.target.files[0])} />
                    </label>
                </div>
            </div >


            {/* <input type="file" onChange={(e) => setImageUpLoad(e.target.files[0])} /> */}
            {/* <button onClick={uploadImage} > Up Laod  </button> */}
            {
                imageList.map((dina) => {
                    return <>
                        <img src={dina} />
                    </>
                })
            }
        </>
    )
}


/* const [change, setchange] = useState({
        image: " "
    })
    const changeImgae = (e) => {
        setchange.image = e.target.value;
    } */


// /*

//             <label className='label__image' style={{ width: '90px' }}>

//             <img className='img-fluid rounded-circle '
//                 src="https://th.bing.com/th/id/R.3265bf2fc4eef657f7e07c6cc208f698?rik=xHYudfX59TQeBw&riu=http%3a%2f%2fucanr.edu%2fsb3%2fdisplay_2018%2fimages%2fdefault-user.png&ehk=lR79jc%2bgKqbB9NYy%2b6MMZFsY5PhVpMBFGqbtyZ1CZVg%3d&risl=&pid=ImgRaw&r=0" />
//             <input type='file' className='input__image' onChange={(e) => changeImgae(e)} />

//         </label>
//         * /

// import { storage } from "../../../../data/firebase";
// import { ref, uploadBytes } from '../../../../data/firebase/storage';