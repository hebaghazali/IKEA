import { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { updateData } from '../../../services/firebase';
import { updateUserStorageByID } from '../../../services/firebase';

const EditContactInfo = (props) => {
  const user = useSelector((state) => state.user.user);
  const id = useSelector((state) => state.user.id);
  const [errors, setError] = useState({
    PhoneNumErr: null,
    EmailErr: null,
  });
  const [allValid, setAllValid] = useState(
    errors.PhoneNumErr === null && errors.EmailErr === null
  );
  const [userInfo, setUserInfo] = useState({
    PhoneNum: user.PhoneNum,
    Email: user.Email
  });
  useEffect(() => {
    setAllValid(errors.PhoneNumErr === null && errors.EmailErr === null);
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
    <form className='col-12 col-lg-6' onSubmit={(e)=>handleSubmit(e)}>
      <div className='form-floating mb-3 p-0 floating-input-holder'>
        <input
          type='text'
          className='form-control edit-input'
          id='floatingInput'
          placeholder=''
          defaultValue={userInfo.PhoneNum}
          onChange={(e) => {
            if (e.target.value.match(/01[0125][0-9]{8}$/)) {
              setError({
                ...errors,
                PhoneNumErr: null
              });
            } else {
              setError({
                ...errors,
                PhoneNumErr: 'your number is not valid'
              });
            }
            setUserInfo({
              ...userInfo,
              PhoneNum: e.target.value,
            });
          }}
        />
        <label htmlFor='floatingInput'>Mobile</label>
        {errors.PhoneNumErr !== null && (
          <small className='text-danger'>{errors.PhoneNumErr}</small>
        )}
      </div>
      <div className='form-floating mb-3 p-0 floating-input-holder'>
        <input
          type='text'
          className='form-control edit-input'
          id='floatingInput'
          placeholder=''
          defaultValue={userInfo.Email}
          onChange={(e) => {
            if (e.target.value.match(/^([a-zA-Z0-9_\-\.]+){3,}@([a-zA-Z0-9_\-\.]+){3,}(.com)$/)) {
              setError({
                ...errors,
                EmailErr: null,
              });
            } else {
              setError({
                ...errors,
                EmailErr: 'your email is not valid',
              });
            }
            setUserInfo({
              ...userInfo,
              Email: e.target.value,
            });
          }}
        />
        <label htmlFor='floatingInput'>Email</label>
        {errors.EmailErr !== null && (
          <small className='text-danger'>{errors.EmailErr}</small>
        )}
      </div>
      <button
        className='default-btn cancel-change-btn col-12 mt-5'
        onClick={() => props.changeSelection(0)}
      >
        Cancel
      </button>
      <button type='submit' className='dark-btn save-change-btn col-12'>
        Save changes
      </button>
    </form>
  );
};
export default EditContactInfo;
