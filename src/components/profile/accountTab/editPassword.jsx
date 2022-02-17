import {
  EmailAuthProvider,
  getAuth,
  onAuthStateChanged,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const EditPassword = (props) => {
  const user = useSelector((state) => state.user.user);
  const id = useSelector((state) => state.user.id);
  const auth = getAuth();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    currentPassErr: null,
    newPassErr: null,
    confirmPassErr: null,
  });
  const [allValid, setAllValid] = useState(
    errors.currentPassErr === null &&
      errors.newPassErr === null &&
      errors.confirmPassErr === null
  );
  const updateUser = () => {
    if (allValid) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          var cred = EmailAuthProvider.credential(user.email, currentPassword);
          reauthenticateWithCredential(user, cred)
            .then(() => {
              updatePassword(user, newPassword)
                .then(() => {
                  setErrors({
                    ...errors,
                    currentPassErr: null,
                  });
                  props.changeSelection(0);
                })
                .catch(() => {
                  setErrors({
                    ...errors,
                    currentPassErr: 'current password is wrong',
                  });
                });
            })
            .catch(() => {
              setErrors({
                ...errors,
                currentPassErr: 'current password is wrong',
              });
            });
        }
      });
    }
  };

  useEffect(() => {
    setAllValid(errors.newPassErr === null && errors.confirmPassErr === null);
  }, [errors]);
  return (
    <section className='col-12 col-lg-6'>
      <div className='form-floating mb-3 p-0 floating-input-holder'>
        <input
          type='password'
          className='form-control edit-input'
          id='floatingInput'
          placeholder=''
          onChange={(e) => {
            setCurrentPassword(e.target.value);
          }}
        />
        <label htmlFor='floatingInput'>Current password</label>
        {errors.currentPassErr !== null && (
          <small className='text-danger'>{errors.currentPassErr}</small>
        )}
      </div>
      <div className='form-floating mb-3 p-0 floating-input-holder'>
        <input
          type='password'
          className='form-control edit-input'
          id='floatingInput'
          placeholder=''
          onChange={(e) => {
            if (
              e.target.value.match(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?_&])[A-Za-z\d@$!%*?_&]{8,}$/
              )
            ) {
              setErrors({
                ...errors,
                newPassErr: null,
              });
            } else {
              setErrors({
                ...errors,
                newPassErr:
                  'Password is not valid, should contain 1 lowercase - 1 uppercase - 1 digit number - special character(@$!%*?_&) and 8 length at least',
              });
            }
            if (e.target.value === confirmPassword) {
              setErrors({
                ...errors,
                confirmPassErr: null,
              });
            } else {
              setErrors({
                ...errors,
                confirmPassErr: 'Confirm password doesn not match new password',
              });
            }

            setNewPassword(e.target.value);
          }}
        />
        <label htmlFor='floatingInput'>New password</label>
        {errors.newPassErr !== null && (
          <small className='text-danger'>{errors.newPassErr}</small>
        )}
      </div>
      <div className='form-floating mb-3 p-0 floating-input-holder'>
        <input
          type='password'
          className='form-control edit-input'
          id='floatingInput'
          placeholder=''
          onChange={(e) => {
            if (e.target.value === newPassword) {
              setErrors({
                ...errors,
                confirmPassErr: null,
              });
            } else {
              setErrors({
                ...errors,
                confirmPassErr: 'Confirm password doesn not match new password',
              });
            }
            setConfirmPassword(e.target.value);
          }}
        />
        <label htmlFor='floatingInput'>Confirm new password</label>
        {errors.confirmPassErr !== null && (
          <small className='text-danger'>{errors.confirmPassErr}</small>
        )}
      </div>
      <button
        className='default-btn cancel-change-btn col-12 mt-5'
        onClick={() => props.changeSelection(0)}
      >
        Cancel
      </button>
      <button
        className='dark-btn save-change-btn col-12'
        onClick={() => updateUser()}
      >
        Save changes
      </button>
    </section>
  );
};
export default EditPassword;
