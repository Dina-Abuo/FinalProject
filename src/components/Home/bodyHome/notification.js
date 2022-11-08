import Dashboard from "./Dashboard"
import './noty.css'

export default function notifications(notifications) {
  return (
    <>
     <div >
        <span>Notify</span>
        
        <ul>
            {notifications&&notifications.map(item=>{
                 return(
                    <li key={item.id}>
                        <span className="pink-text">{item.user}</span>
                        <span className="pink-text">{item.content}</span>
                    </li>
                 )
            })}
        </ul>
     </div>
    </>
  )
}
