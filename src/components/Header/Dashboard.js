import { compose } from "redux"

 function Dashboard(notifications,auth) {

    if (!auth.uid) return <Redirect to='./home'/>





  return (
    <div>
    <Notification notifications={notifications}/>
    </div>



  )
}


const mapstate =(state)=>{
    return{
       auth: state.firebase.auth
       notifications: state.firestore.orderd.notifications
    }
   }
   export default compose(
    connect(mapstate),
    firestoreconnect(
        [{
            collection:"notifications"
        }]
    )
   )
