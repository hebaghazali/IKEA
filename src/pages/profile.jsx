import ProfileTab from '../components/profile/profileTabs';
import { useSelector } from 'react-redux';
import { updateUserStorageByID } from '../services/firebase';
import { useEffect } from 'react';
import { auth } from '../firebaseConfig/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import store from '../store/store';
import { clearUser } from '../store/actions/auth';
import { changeLoader } from '../store/actions/loader';
import { useState } from 'react';
import Loader from '../components/loader';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  // const loader = useSelector((state) => state.loader);
  const [loader, setLoader] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    updateUserStorageByID(localStorage.getItem('UID')).then(() =>
      setLoader(false)
    );
  }, []);

  function handleLogout() {
    console.log('logoutFunction');
    signOut(auth);
    localStorage.removeItem('UID');
    window.location.href = '/';
    store.dispatch(clearUser());
  }

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = '/sign';
    }
  });

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <div className='col-12 col-md-11 col-lg-10 mx-auto'>
          <div className='row big-title col-12 col-md-7 pt-2' id='username'>
            {t('Hello')} {user.FirstName}!
          </div>
          <div className='d-flex pt-2'>
            {t('ChangeAccount')}
            <button className='logout' onClick={handleLogout}>
              {t('Logout')}
            </button>
          </div>
          <ProfileTab />
        </div>
      )}
    </>
  );
};
export default Profile;
