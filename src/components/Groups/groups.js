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
                <i className="fa-solid fa-user fa-2x p-3"></i> Dina Abouelsoud   
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
                profilePic ="https://th.bing.com/th/id/R.3265bf2fc4eef657f7e07c6cc208f698?rik=xHYudfX59TQeBw&riu=http%3a%2f%2fucanr.edu%2fsb3%2fdisplay_2018%2fimages%2fdefault-user.png&ehk=lR79jc%2bgKqbB9NYy%2b6MMZFsY5PhVpMBFGqbtyZ1CZVg%3d&risl=&pid=ImgRaw&r=0"
                message = "  انا الملك المصري"
                timestamp = "time..."
                username = "Dina Abouelsoud "
                image = "http://sites.duke.edu/wcwp/files/2020/02/Picture1.png" 
            />
     </div>
   
     </div>
    </>
  )
}
