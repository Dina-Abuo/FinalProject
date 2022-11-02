
// import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
// import ThumbUpIcon from '@material-ui/icons/ThumbUp'
// import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
// import NearMeIcon from '@material-ui/icons/NearMe'
// import { ExpandMoreOutlined } from '@material-ui/icons'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle'


function Post({ profilePic, image, username, timestamp, message}) {
    return (
        <div className = "post">
            <div className = "post__top">
            <img src={profilePic} 
            class="post__avatar"
             alt="Avatar" 
             />
                {/* <Avatar
                    src = {profilePic}
                    className = ""
                /> */}
                <div className = "post__topInfo">
                    <h3>{username}</h3>
                    <p>9.45</p>
                </div>
            </div>
                <div className = "post__bottom">
                    <p>{message}</p>
                </div>
                    <div className = "post__image">
                        <img src = {image} 
                            alt = ""
                        />
                    </div>
                    <div className = "post__options">
                        <div className = "post__option">
                            {/* <ThumbUpIcon /> */}
                            <i class="far fa-thumbs-up i"></i>
                            <p>Like</p>
                        </div>
                        <div className = "post__option">
                            <i class="far fa-comment i"></i>
                            {/* <ChatBubbleOutlineIcon /> */}
                            <p>Comment</p>
                        </div>
                        <div className = "post__option">
                            {/* <NearMeIcon /> */}
                            <i class="fas fa-share-square i"></i>
                            <p>Share</p>
                        </div>
                        <div className = "post__option">
                            {/* <AccountCircleIcon />
                            <ExpandMoreOutlined /> */}
                        </div>
                        </div>

        </div>
                
    )
}

export default Post