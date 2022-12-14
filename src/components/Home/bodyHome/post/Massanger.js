import React from 'react'
import './Massanger.css'
// import { useStateValue } from './StateProvider'
// import {firstore} from '../../../../data/firebase'
// import {FieldValue,collection} from 'firebase/firestore'

function Massanger() {
  // const [{ user }, dispatch] = useStateValue();
  // const [input, setInput] = useState('');
  // const [imageUrl, setImageUrl] = useState('');
  // const handleSubmit = (e) => {
  //     e.preventDefault();

  //     collection('posts').add({
  //         message: input,
  //         timestamp: FieldValue.serverTimestamp(),
  //         profilePic: user.photoURL,
  //         username: user.displayName,
  //         image: imageUrl
  //     })

  //     setInput('')
  //     setImageUrl('')
  // } 

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <img src="https://th.bing.com/th/id/R.3265bf2fc4eef657f7e07c6cc208f698?rik=xHYudfX59TQeBw&riu=http%3a%2f%2fucanr.edu%2fsb3%2fdisplay_2018%2fimages%2fdefault-user.png&ehk=lR79jc%2bgKqbB9NYy%2b6MMZFsY5PhVpMBFGqbtyZ1CZVg%3d&risl=&pid=ImgRaw&r=0"
          class="post__avatar"
          alt="Avatar"
        />
        <form>
          <input
            className="messageSender__input"
            placeholder={`What's on your mind,  ?`}
          />
          <button type="submit">Hidden Submit</button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__options">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
          </svg>
          <h3>Live video</h3>
        </div>
        <div className="messageSender__options">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
          </svg>
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__options">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
          </svg>
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default Massanger;
