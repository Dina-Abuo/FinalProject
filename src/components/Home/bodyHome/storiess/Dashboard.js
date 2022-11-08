import { compose } from "@mui/system"
import notifications from "./notification"

 function Dashboard(notifications) {
  return (
    <>
   <div>
    <Notification notifications={notifications} />
   </div>
    </>
  )

}
const mapstate =(state) =>{
    return {
        auth: state.firebase.auth,
        notifications:state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapstate),
    firestoreConnect([
        {collectio:'notifications'}
    ])
) (Dashboard)