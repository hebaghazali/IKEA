import ProfileTab from '../components/profile/profileTabs';
import { useSelector } from 'react-redux';
import { updateUserStorageByID } from '../services/firebase';
import { useEffect } from 'react';
import { logout, auth } from '../firebaseConfig/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Profile = () => {
  const user = useSelector(state => state.user.user);
  useEffect(() => {
    updateUserStorageByID(localStorage.getItem('UID'));
  }, []);

  function handleLogout() {
    console.log('logoutFunction');
    signOut(auth);
    return <Link to='/'/>
  }

  onAuthStateChanged(auth, user => {
    if (!user) {
      window.location.href = '/sign';
    }
  });

  return (
    <>
      <div className='mt-nav-2 pt-nav border-top'>
        <div className='col-12 col-md-11 col-lg-10 mx-auto'>
          <div className='row big-title col-12 col-md-7 pt-2' id='username'>
            Hello, {user.FirstName}
          </div>
          <div className='d-flex pt-2'>
            Need to change account?
            <button className='logout' onClick={handleLogout}>
              Log out
            </button>
          </div>
          <ProfileTab />
        </div>
      </div>
    </>
  );
};
export default Profile;
