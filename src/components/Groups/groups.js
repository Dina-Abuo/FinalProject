import './groups.css'
import Post2 from './post2/post2'
import Post from './post2/post2'
                                                           
                                      
export default function Groups() {
  return (
    <>
    <div className="d-flex col-12">
     <div className="side1 col-5">
     <div className = "sidebar">
                <div>
                <i className="fa-solid fa-users fa-2x p-3"></i> Mohamed Salah   
                </div> 
                  <div>
                <i className="fa-solid fa-users fa-2x p-3"></i> Freind
                </div>
                <div>
                <i className="fa-solid fa-tv fa-2x p-3"></i> Watch
                    
                </div> 
                <div>
                <i className="fa-solid fa-users fa-2x p-3"></i> Group
                </div>
                <div>
                <i className="fa-solid fa-shop fa-2x p-3"></i> Marketplace
                </div>    
            </div>  
     </div>
     <div className=" side2 col-7">
   
     <Post 
                profilePic =" http://sites.duke.edu/wcwp/files/2020/02/Picture1.png"
                message = "  انا الملك المصري"
                timestamp = "time..."
                username = "mo Salah"
                image = "http://sites.duke.edu/wcwp/files/2020/02/Picture1.png" 
            />
     </div>
   
     </div>
    </>
  )
}
