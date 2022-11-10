import React, { useState } from 'react'
import '../add.css'
import { Link } from 'react-router-dom'

export default function PeopleYouMayKnow() {
    const [image, setImage] = useState([
        {
            image: "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-1/311162085_1901589793524952_7076838028616385793_n.jpg?stp=dst-jpg_p240x240&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=4-lSwNCqLmMAX8Twb4l&_nc_ht=scontent.fcai20-4.fna&oh=00_AfAk9BqEzbAONC8aiyKKqCZTYQkbJE3cx6oCaTUnKZApsw&oe=6370992A",
            name: "Śő Mä Ýâ ",
            index: 1,
        },
        {
            image: "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-1/245271415_106718558460526_1960855654224992363_n.jpg?stp=dst-jpg_p240x240&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=yJRTn4-Ozb0AX-9ULWp&tn=1OM2JMsWeHNTvJHV&_nc_ht=scontent.fcai20-4.fna&oh=00_AfCMAsUsTBeyUUFUdZdRAfgBHL6P6lb67Vmzv3Ttc3ufrw&oe=6371F71B ",
            name: "Saraa Atito",
            index: 2,
        },
        {
            image: "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-1/275923216_1346761509080885_2979268525838963389_n.jpg?stp=dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zTAZQhdFrtQAX8eQgpi&_nc_ht=scontent.fcai20-4.fna&oh=00_AfDP_P7QGE3RDQkpZijg_TUYTe9oMTInUOPZhkJ3kJ5WdA&oe=637128A4",
            name: " Esraa Shahat",
            index: 3,
        },

        {
            image: "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-1/285835479_3203509816562731_2455678032966874180_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sym-siAVBm8AX_1yiGH&tn=1OM2JMsWeHNTvJHV&_nc_ht=scontent.fcai20-4.fna&oh=00_AfBmCvaSh91GorgTalp6CTj8OlqvFTicmXwr5i7DuoV7pQ&oe=637183AA ",
            name: " Marwa Ali",
            index: 4,
        },

        {
            image: "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-1/312299928_3319595008326499_1239964450855285017_n.jpg?stp=c0.31.240.240a_dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=u-52Ey18hO4AX8JYJL8&_nc_ht=scontent.fcai20-4.fna&oh=00_AfCP7_SYcQ2wh4RcHd45kUbIGwWVXzynh_Fl-Gkzre4x8A&oe=6370C0E9",
            name: " Islam Fekry",
            index: 5,
        },
        {
            image: "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-1/289698222_395505472638575_8588957643522444328_n.jpg?stp=dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=joAuga_mHz0AX-Zttj4&_nc_ht=scontent.fcai20-4.fna&oh=00_AfAZXqVfl19TJKvGPYqZyKQ_xPSa8s3VUPAEq_db3RWC9Q&oe=637142D1",
            name: "Ahmed Sabry ",
            index: 6,
        },
        {

            image: "https://scontent.fcai20-4.fna.fbcdn.net/v/t1.6435-1/184334631_1915704105269664_1419445063367764863_n.jpg?stp=c0.0.240.240a_dst-jpg_p240x240&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=BHGgNtM5h_4AX-zsuvK&_nc_ht=scontent.fcai20-4.fna&oh=00_AfACCioVB0tbgFqfjnqje7C-bsmYUP2ch1ijLVfuRGlv_A&oe=6393B23B",
            name: " Aya Ashour",
            index: 7,
        },
        {
            image: "https://scontent.fcai20-4.fna.fbcdn.net/v/t1.18169-1/10306563_103186780024128_2873516056729739072_n.jpg?stp=c22.0.87.87a_cp0_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=OMYFzUPwnPUAX-ADhLy&tn=1OM2JMsWeHNTvJHV&_nc_ht=scontent.fcai20-4.fna&oh=00_AfD7O2yP7rf1zQYGBaqRqvUJCgBtmw4s1rV8OUFQ-zNsXg&oe=6393ED71",
            name: "مصطفي إبراهيم ",
            index: 8,
        },

        {
            image: "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-1/275149835_460763442419260_99757146527519922_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=HLQC2wdB8vIAX8p8Pla&_nc_ht=scontent.fcai20-4.fna&oh=00_AfDFf3P7ETJ7CDB_cjpO4jMKoPYRQwxlEmpImaOL5PMIoA&oe=63709C5A",
            name: "Lujain Alkholy",
            index: 9,
        },
        {
            image: "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-1/302195132_784769059500700_4288460188185326626_n.jpg?stp=dst-jpg_p240x240&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=t3wjjj9b7k8AX8_6fgV&_nc_ht=scontent.fcai20-4.fna&oh=00_AfBmuJCmJ0gCKCSOnIK0nM3vP0DRBQCWOYkDU5lpii8MRQ&oe=6371E6A7 ",
            name: "Fatma El-zahraa Nagy ",
            index: 10,
        },



    ])
    return (
        <>
            <div className='d-flex'>
                {
                    image.map((user, index) => {
                        if (user.index < 6) {
                            return (<>
                                <div className='part2 card me-2  ms-2 shadow'>
                                    <img
                                        className='image   rounded-top'
                                        src={user.image} alt="BigCo Inc. logo" />
                                    <Link to='/profile' className='mb-3 mt-2 ms-2'><h6> {user.name} </h6></Link>
                                    <button className='btn-light  rounded mb-2 me-auto ms-auto' > Add Friend </button>
                                    <button className='btn-gree rounded me-auto ms-auto mb-2'> Remove </button>
                                </div>
                            </>)
                        }
                    })
                }
            </div>
            <div className='d-flex mt-5 mb-5'>
                {
                    image.map((user, index) => {
                        if (user.index < 11 && user.index > 5) {
                            return (<>
                                <div className='part2 card me-2  ms-2 shadow'>
                                    <img
                                        className='image   rounded-top'
                                        src={user.image} alt="BigCo Inc. logo" />
                                    <Link to='/profile' className='mb-3 mt-2 ms-2'><h6> {user.name} </h6></Link>
                                    <button className='btn-light  rounded mb-2 me-auto ms-auto' >Add Friend </button>
                                    <button className='btn-gree  rounded me-auto ms-auto mb-2'>Remove</button>
                                </div>
                            </>)
                        }
                    })
                }
            </div>

        </>
    )
}
