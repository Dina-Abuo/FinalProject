import React from 'react'
import './freind.css'
export default function Friends() {
    return (
        <>

            <div className='container'>
                <div className='row'>
                    <div className='contentFriend  ms-auto me-auto  rounded  col-8 mt-2 p-2'>
                        <div className='headFriend rounded-top  Text-Start'>  <a href='# '> <h3>Friends</h3> </a> </div>
                        <div className='nevFriend'>
                            <button className='button1 me-3'>All Freinds </button>
                            <button className='button2'> Hight School  </button>
                            <button className='button3 ms-3'> Current City</button> </div>
                        <div className='freinds'>
                            <div className='d-flex p-3'>
                                <div className='singlFriends rounded  border  d-flex me-3 p-2 '> <img src=' https://www.asicentral.com/media/20479/scottcolumnfig4-800.jpg' className='rounded me-2 mt-1' />  <a href=' # 'className='mt-4'><h5>Kasy Tanious Lamye</h5></a> </div>
                                <div className='singlFriends rounded  border d-flex p-2'> <img src='https://www.asicentral.com/media/20479/scottcolumnfig4-800.jpg ' className='rounded  me-2 mt-1' />   <a href=' # ' className='mt-4'><h5>Kasy Tanious Lamye</h5></a> </div>
                            </div>

                            {/* AllFreinds */}



                            {/* HightSchool */}



                            {/* CurrentCity */}





                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
