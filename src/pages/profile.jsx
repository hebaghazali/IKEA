import ProfileTab from "../components/profile/profileTabs";

const Profile = () => {
  return (
    <>
      <div className='mt-nav-2 pt-nav border-top'>
        <div className='col-12 col-md-11 col-lg-10 mx-auto'>
          <div className='row big-title col-12 col-md-7 pt-2' id='username'>
            Hello{' '}
          </div>
          <div className='d-flex pt-2'>
            Need to change account?
            <button className='logout'>
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
