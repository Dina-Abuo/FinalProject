import React, { useState } from 'react'
import '../add.css'
import { Link } from 'react-router-dom'
export default function FriendRequest() {
    const [image, setImage] = useState([
        {
            image: "https://scontent.fcai20-4.fna.fbcdn.net/v/t1.6435-1/137039101_2819414928327570_5822666885690898085_n.jpg?stp=c3.0.240.240a_dst-jpg_p240x240&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=R6VHDc9N_eoAX8kVrWS&_nc_oc=AQmjMHOibd2X_bF-ycCtVI68cQG4z4VDaf4S4zG03GCCNGwbOnHdG3cu-vlDUUX30jg&_nc_ht=scontent.fcai20-4.fna&oh=00_AfB7vew_SQtgtb0Vmz85PkGrIcsrWQ8OGUtEFhD_G6s4Yg&oe=6393D4F0",
            name: "Fatma Sayed",
        },
        {
            image: "https://scontent.fcai20-4.fna.fbcdn.net/v/t1.6435-1/121110542_659735514915470_7884014863812995776_n.jpg?stp=dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=f67be1&_nc_ohc=4auyUUFBFUsAX9C522O&_nc_ht=scontent.fcai20-4.fna&oh=00_AfBL7K_oTFfp0GYcWwQEDoz0iSFXw8rogQqF48IRkzv4Yg&oe=6393CA8D",
            name: "Hany Abdou Saad",
        },
        {
            image: "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-1/275923216_1346761509080885_2979268525838963389_n.jpg?stp=dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zTAZQhdFrtQAX8eQgpi&_nc_ht=scontent.fcai20-4.fna&oh=00_AfDP_P7QGE3RDQkpZijg_TUYTe9oMTInUOPZhkJ3kJ5WdA&oe=637128A4",
            name: " Esraa Shahat",
        },
        {

            image: "https://scontent.fcai20-4.fna.fbcdn.net/v/t1.6435-1/184334631_1915704105269664_1419445063367764863_n.jpg?stp=c0.0.240.240a_dst-jpg_p240x240&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=BHGgNtM5h_4AX-zsuvK&_nc_ht=scontent.fcai20-4.fna&oh=00_AfACCioVB0tbgFqfjnqje7C-bsmYUP2ch1ijLVfuRGlv_A&oe=6393B23B",
            name: " Aya Ashour",
        },

        {
            image: "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-1/275149835_460763442419260_99757146527519922_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=HLQC2wdB8vIAX8p8Pla&_nc_ht=scontent.fcai20-4.fna&oh=00_AfDFf3P7ETJ7CDB_cjpO4jMKoPYRQwxlEmpImaOL5PMIoA&oe=63709C5A",
            name: "Lujain Alkholy",
        },
    ])
    const [delet, setDelet] = useState(true)

    const handelDelet = () => {
        setDelet(!delet);
    }

    return (
        <>
            <div className='d-flex'>
                {
                    image.map((user) => {
                        return <>
                            <div className='part2 card me-2  ms-2 shadow'>
                                <img
                                    className='image   rounded-top'
                                    src={user.image} alt="BigCo Inc. logo" />
                                <Link to='/profile' className='mb-3 mt-2 ms-2'><h6> {user.name} </h6></Link>
                                <button className='btn-blue  rounded mb-2 me-auto ms-auto' > confirm </button>
                                <button className='btn-Dark  rounded me-auto ms-auto mb-2' onClick={handelDelet }  > Delete </button>
                            </div>
                        </>
                    })
                }
            </div>
        </>
    )
}
