import React from 'react'
import './Sidebar.css'
function Sidebar() {
    return (
        <div className = "sidebar">
                <div>
                <i className="fa-solid fa-user fa-2x p-3"></i> Dina Abouelsoud
                </div> 
                <div>
                <i className="fa-solid fa-users fa-2x p-3"></i> Freint
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
    )
}

export default Sidebar;