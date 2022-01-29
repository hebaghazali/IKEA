import { useState } from 'react';
import EditContactInfo from './editContactInfo';
import EditPassword from './editPassword';
import EditPersonalInfo from './editPersonalInfo';

const AccountTab = () => {
  const [editSection, setEditSection] = useState(0);
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
            <span className='d-block'>Eman Salah</span>
            <span className='small-text'>Add birth date</span>
            <p className='small-text'>Add gender</p>
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
            <span className='d-block'>01127266845</span>
            <span className='small-text'>Eman@gmail.com</span>
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
            <span className='d-block'>••••••••</span>
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
