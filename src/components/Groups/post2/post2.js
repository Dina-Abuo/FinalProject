// import './post2.css'





// export default function Post2(profilePic2, image2, username2, timestamp2, message2) {
//   return (
//     <>
//     <div className = "post">
//             <div className = "post__top">
//             <img src={profilePic2} 
//             class="post__avatar"
//              alt="Avatar" 
//              />
//                 {/* <Avatar
//                     src = {profilePic}
//                     className = ""
//                 /> */}
//                 <div className = "post__topInfo">
//                     <h3>{username2}</h3>
//                     <p>9.45</p>
//                 </div>
//             </div>
//                 <div className = "post__bottom">
//                     <p>{message2}</p>
//                 </div>
//                     <div className = "post__image">
//                         <img src = {image2} 
//                             alt = ""
//                         />
//                     </div>
//                     <div className = "post__options">
//                         {/* <FBReactions /> */}
//                         <div className = "post__option">
//                             <i class="far fa-comment i"></i>
//                             <p>Comment</p>
//                         </div>
//                         <div className = "post__option">
//                             <i class="fas fa-share-square i"></i>
//                             <p>Share</p>
//                         </div>
//                     </div>

//         </div>
//     </>
//   )
// }


import './post2.css'
import React,{useEffect,useState} from 'react'

function Post({ profilePic, image, username, timestamp, message}) {
    const [proudct,setProudct]=useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res=>res.json())
            .then(json=>setProudct(json))
    },[])
    const postApil= proudct.map((event)=>{
        return(
            <div className = "" key={event.id}>
        <div className = "post__top">
            <img src={profilePic} 
            class="post__avatar"
             alt="Avatar" 
             />
                <div className = "post__topInfo">
                    <h3>{username}</h3>
                    <p>9.45</p>
                </div>
            </div>
                <div className = "post__bottom">
                    <p>{event.title}</p>
                </div>
                    <div className = "post__image">
                        <img src = {event.url} 
                            alt = ""
                        />
                    </div>
                    <div className = "post__options">
                        <div className = "post__option"> 
                        <i class="fa fa-thumbs-up i" ></i>
                        <p>Like</p>
                        </div>
                        <div className = "post__option">
                            <i class="far fa-comment i"></i>
                            <p>Comment</p>
                        </div>
                        <div className = "post__option">
                            <i class="fas fa-share-square i"></i>
                            <p>Share</p>
                        </div>
                    </div>
            </div>
              
        )
    })
    return (
        <div className = "">
        {postApil}
            </div>
              
    )
}
export default Post;
