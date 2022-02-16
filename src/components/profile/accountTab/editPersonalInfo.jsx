import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { updateData } from '../../../services/firebase';
import { updateUserStorageByID } from '../../../services/firebase';

const EditPersonalInfo = (props) => {
  const user = useSelector((state) => state.user.user);
  const id = useSelector((state) => state.user.id);
  const [errors, setError] = useState({
    FirstNameErr: null,
    LastNameErr: null,
  });
  const [allValid, setAllValid] = useState(
    errors.FirstNameErr === null && errors.LastNameErr === null
  );

  const [userInfo, setUserInfo] = useState({
    FirstName: user.FirstName,
    LastName: user.LastName,
    BirthDate: user.BirthDate ? user.BirthDate : '',
    Gender: user.Gender ? user.Gender : '',
  });
  useEffect(() => {
    setAllValid(errors.FirstNameErr === null && errors.LastNameErr === null);
  }, [errors]);
  const handleSubmit = (e) => {
    if (!allValid) {
      e.preventDefault();
    } else {
      updateData('users', id, userInfo).then(() => {
        updateUserStorageByID(id);
      });
      props.changeSelection(0);
    }
  };
  return (
    <form className='col-12 col-lg-6' onSubmit={(e) => handleSubmit(e)}>
      <div className='form-floating mb-3 p-0 floating-input-holder'>
        <input
          type='text'
          className='form-control edit-input'
          id='floatingInput'
          placeholder=''
          defaultValue={userInfo.FirstName}
          onChange={(e) => {
            if (e.target.value.match(/^[A-Za-z]{3,}$/)) {
              setError({
                ...errors,
                FirstNameErr: null,
              });
            } else {
              setError({
                ...errors,
                FirstNameErr: 'First Name should be 3 letters at least',
              });
            }
            setUserInfo({
              ...userInfo,
              FirstName: e.target.value,
            });
          }}
        />
        <label htmlFor='floatingInput'>First name</label>
        {errors.FirstNameErr !== null && (
          <small className='text-danger'>{errors.FirstNameErr}</small>
        )}
      </div>
      <div className='form-floating mb-3 p-0 floating-input-holder'>
        <input
          type='text'
          className='form-control edit-input'
          id='floatingInput'
          placeholder=''
          defaultValue={userInfo.LastName}
          onChange={(e) => {
            if (e.target.value.match(/^[A-Za-z]{3,}$/)) {
              setError({
                ...errors,
                LastNameErr: null,
              });
            } else {
              setError({
                ...errors,
                LastNameErr: 'Last Name should be 3 letters at least',
              });
            }
            setUserInfo({
              ...userInfo,
              LastName: e.target.value,
            });
          }}
        />
        <label htmlFor='floatingInput'>Last name</label>
        {errors.LastNameErr !== null && (
          <small className='text-danger'>{errors.LastNameErr}</small>
        )}
      </div>
      <div className='form-floating mb-3 p-0 floating-input-holder'>
        <input
          type='text'
          className='form-control edit-input'
          id='floatingInput'
          placeholder='DD-MM_YYYY'
          defaultValue={userInfo.BirthDate}
          onChange={(e) => {
            setUserInfo({
              ...userInfo,
              BirthDate: e.target.value,
            });
          }}
        />
        <label htmlFor='floatingInput'>Birthdate (Optional)</label>
      </div>
      <div className='form-floating floating-input-holder col-9'>
        <select
          className='form-select edit-input'
          id='floatingSelect'
          aria-label='Floating label select example'
          defaultValue={userInfo.Gender}
          onChange={(e) => {
            setUserInfo({
              ...userInfo,
              Gender: e.target.value,
            });
          }}
        >
          <option></option>
          <option value='1'>Male</option>
          <option value='2'>Female</option>
        </select>
        <label htmlFor='floatingSelect'>Gender (Optional)</label>
        <p className='small-text mt-2 mb-5'>
          We require this field in order to best personalize communication &
          marketing material and understand our users better.
        </p>
      </div>
      <button
        className='default-btn cancel-change-btn col-12'
        onClick={() => props.changeSelection(0)}
      >
        Cancel
      </button>
      <button className='dark-btn save-change-btn col-12' type='submit'>
        Save changes
      </button>
    </form>
  );
};
export default EditPersonalInfo;
