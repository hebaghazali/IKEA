import ProfileTab from "../components/profile/profileTabs";
import { logout, auth } from "../firebaseConfig/firebase";
import {signOut, onAuthStateChanged } from "firebase/auth";


const Profile = () => {

 function handleLogout(){
   console.log('logoutFunction');
     signOut(auth);
     window.location.href= '/'
  }

  // onAuthStateChanged(auth,(user)=>{
  //     user?
  //     console.log(user.email)
  //      :
  //     window.location.href= '/sign'   
  // })

//   onAuthStateChanged(auth,(user)=>{
//     user?
//      `<h1 className='userName'>Hello Dear {user.email}</h1>`
//      :
//     window.location.href= '/sign'   
// })

  return (
    <>
      <div className='mt-nav-2 pt-nav border-top'>
        <div className='col-12 col-md-11 col-lg-10 mx-auto'>
          <div className='row big-title col-12 col-md-7 pt-2' id='username'>
            Hello
          </div>
          <div className='d-flex pt-2'>
            Need to change account?
            <button className='logout' onClick={handleLogout}>
              Log out
            </button>
          </div>
          <ProfileTab/>
        </div>
      </div>
    </>
  );
};
export default Profile;
