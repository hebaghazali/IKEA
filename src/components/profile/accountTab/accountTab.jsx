import { useState } from 'react';
import { useSelector } from 'react-redux';
import EditContactInfo from './editContactInfo';
import EditPassword from './editPassword';
import EditPersonalInfo from './editPersonalInfo';
const AccountTab = () => {
  const [editSection, setEditSection] = useState(0);
  const user= useSelector((state)=>state.user.user);
  return (
    <>
      <section className='py-5 border-bottom'>
        <div className='row fw-bold d-flex justify-content-between mb-2'>
          <div className='col-6'>personal information</div>
          {editSection !== 1 && (
            <button
              className='col-3 text-end text-decoration-underline'
              onClick={() => setEditSection(1)}
            >
              Edit
            </button>
          )}
          {editSection === 1 && (
            <button
              className='col-3 text-end text-decoration-underline'
              onClick={() => setEditSection(0)}
            >
              Close
            </button>
          )}
        </div>
        {editSection !== 1 && (
          <>
            <span className='d-block'>{user.FirstName + " " + user.LastName}</span>
            { user.BirthDate==="" &&<span className='small-text'>Add birth date</span>}
            { user.BirthDate!=="" &&<span className='small-text'>{user.BirthDate}</span>}
            { user.Gender===""&&<p className='small-text'>Add gender</p> }
            { user.Gender!==""&&<p className='small-text'>
              {
                user.Gender==="1" && "Male"
              }
              {
                user.Gender==="2" && "Female"
              }
            </p> }
          </>
        )}
        {editSection === 1 && (
          <EditPersonalInfo
            changeSelection={(selection) => setEditSection(selection)}
          />
        )}
      </section>

      <section className='py-5 border-bottom'>
        <div className='row fw-bold d-flex justify-content-between mb-2'>
          <div className='col-6'>contact</div>
          {editSection !== 2 && (
            <button
              className='col-3 text-end text-decoration-underline'
              onClick={() => setEditSection(2)}
            >
              Edit
            </button>
          )}
          {editSection === 2 && (
            <button
              className='col-3 text-end text-decoration-underline'
              onClick={() => setEditSection(0)}
            >
              Close
            </button>
          )}
        </div>
        {editSection !== 2 && (
          <>
            { user.PhoneNum==="" &&<span className='d-block'>Add mobile</span>}
            { user.PhoneNum!=="" &&<span className='d-block'>{user.PhoneNum}</span>}
            <span className='small-text'>{user.Email}</span>
          </>
        )}
        {editSection === 2 && (
          <EditContactInfo
            changeSelection={(selection) => setEditSection(selection)}
          />
        )}
      </section>

      <section className='py-5 border-bottom'>
        <div className='row fw-bold d-flex justify-content-between mb-2'>
          <div className='col-6'>password</div>
          {editSection !== 3 && (
            <button
              className='col-3 text-end text-decoration-underline'
              onClick={() => setEditSection(3)}
            >
              Edit
            </button>
          )}
          {editSection === 3 && (
            <button
              className='col-3 text-end text-decoration-underline'
              onClick={() => setEditSection(0)}
            >
              Close
            </button>
          )}
        </div>
        {editSection !== 3 && (
          <>
          <input className='d-block border-0' type="password" value="{user.Password}" disabled/>
          </>
        )}
        {editSection === 3 && (
          <EditPassword
            changeSelection={(selection) => setEditSection(selection)}
          />
        )}
      </section>
    </>
  );
};
export default AccountTab;
