import React, { useState, useRef } from 'react';
import '../../assets/scss/pages/_login.scss';
import { Link } from 'react-router-dom';
import { signup, useAuth } from '../../firebaseConfig/firebase';
import { addDocByID } from '../../services/firebase';


function SignIn() {
  const [users, setUser] = useState({
    Name: '',
    Phone: ',',
    Email: '',
    Password: '',
  });

  const [errors, setError] = useState({
    NameErr: null,
    PhoneErr: null,
    EmailErr: null,
    PasswordErr: null,
  });

  // Function to hadndle change in any input and write into it
  const handleChangeInInput = (e) => {
    const regName = /^\w[a-zA-Z]{3,}/;
    const regPhoneNum = /^01[0125][0-9]{8}$/;
    const regEmail = /^([a-zA-Z0-9_\-\.]+){3,}@([a-zA-Z0-9_\-\.]+){3,}(.com)$/;
    // const regName = /^\w[a-zA-Z]{3,}[^-\s][a-zA-Z]{3,}/;
    const regPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate Name Input
    setUser({
      ...users,
      [e.target.name]: e.target.value,
    });

    // Validate Name Input
    if (e.target.name === 'Name') {
      if (regName.test(e.target.value)) {
        setError({
          ...errors,
          NameErr: '',
        });
      } else {
        setError({
          ...errors,
          NameErr: "Name is not Allowed don't make space at start",
        });
      }
    } else if (e.target.name === 'Phone') {
      if (regPhoneNum.test(e.target.value)) {
        setError({
          ...errors,
          PhoneErr: '',
        });
      } else {
        setError({
          ...errors,
          PhoneErr: 'Inavalid phone number',
        });
      }
    }

    // Validate Email Input
    else if (e.target.name == 'Email') {
      if (regEmail.test(e.target.value)) {
        setError({
          ...errors,
          EmailErr: '',
        });
      } else {
        setError({
          ...errors,
          EmailErr: 'Email is not valid',
        });
      }
    }

    // Validate Password Input
    else if (e.target.name == 'Password') {
      if (regPassword.test(e.target.value)) {
        setError({
          ...errors,
          PasswordErr: '',
        });
      } else {
        setError({
          ...errors,
          PasswordErr: 'Password is not valid',
        });
      }
    }
  };

  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const storeRef = useRef();

  async function handleSignup() {
    console.log('function signIn');
    var userObj={
      FirstName: firstNameRef.current.value,
      LastName: lastNameRef.current.value,
      Email: emailRef.current.value,
      PhoneNum: phoneRef.current.value,
      PrefferedStore: storeRef.current.value
    }
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value).then(
        (userCredentials) => {
          addDocByID('users', userCredentials.user.uid,userObj).then(() => {
            localStorage.setItem('UID', userCredentials.user.uid);
            // changeUser(userObj);
            window.location.href = '/profile';
          });
        }
      );
    } catch {
      alert('User is alredy exist!');
    }
    setLoading(false);
  }

  return (
    <>
      <div className='log-parent'>
        <div className='container'>
          {/* <!-- Left section --> */}
          <section className='row left-box-log'>
            <section className='col-md-5 col-12 login-heading'>
              <h3>Create an IKEA Profile</h3>
              <p>
                Already have an account? <Link to='./login'> Login</Link>{' '}
              </p>
            </section>

            {/* <!-- Center Section --> */}
            <section className='col-md-2 col-12 center-sec'></section>
            {/* <!-- Right Section --> */}
            <section className='col-md-5 col-12 login-form'>
              <div className='form-floating mb-3 input-log'>
                <div className='row g-3 needs-validation' noValidate>
                  <div className='input-box'>
                    <input
                      type='text'
                      className='form-control input-sign-form'
                      id='validationCustom01'
                      name='Name'
                      placeholder='First Name'
                      required
                      onChange={(e) => {
                        handleChangeInInput(e);
                      }}
                      ref={firstNameRef}
                    />
                    <small className='text-danger'>{errors.NameErr}</small>
                  </div>
                  <div className='input-box'>
                    <input
                      type='text'
                      className='form-control input-sign-form'
                      id='validationCustom02'
                      name='Name'
                      placeholder='Last name'
                      required
                      onChange={(e) => {
                        handleChangeInInput(e);
                      }}
                      ref={lastNameRef}
                    />
                    <small className='text-danger'>{errors.NameErr}</small>
                  </div>
                  <div className='input-box'>
                    <div className='input-group has-validation'>
                      <input
                        type='text'
                        className='form-control input-sign-form'
                        id='validationCustom01'
                        name='Phone'
                        placeholder='EG(011, 012, 015, 010)'
                        onChange={(e) => {
                          handleChangeInInput(e);
                        }}
                        ref={phoneRef}
                      />
                      <small className='text-danger'>{errors.PhoneErr}</small>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='validationCustom04'
                      className='form-label selct-label-form-sign'
                    >
                      Prefered Store
                    </label>
                    <select
                      className='form-select selct-form-sign'
                      id='validationCustom04'
                      required
                      ref={storeRef}
                    >
                      <option value='1'>IKEA Cairo Mall Of Arabia</option>
                      <option value='2'>IKEA CFC</option>
                    </select>
                    <div className='invalid-feedback'>
                      Please select a valid Store.
                    </div>
                  </div>

                  <div className='form-floating mb-3 input-log'>
                    <div className='row g-3 needs-validation' noValidate>
                      <div>
                        <input
                          type='text'
                          className='form-control input-sign-form'
                          id='validationCustom05'
                          placeholder='Email(UserName)'
                          name='Email'
                          required
                          onChange={(e) => {
                            handleChangeInInput(e);
                          }}
                          ref={emailRef}
                        />
                        <p></p>
                        <p className='text-secondary'>
                          {' '}
                          Example of valid mail: examle@ec123.com
                        </p>
                        <small className='text-danger'>{errors.EmailErr}</small>
                      </div>
                      <div>
                        <input
                          type='password'
                          className='form-control input-sign-form'
                          id='validationCustom05'
                          required
                          name='Password'
                          placeholder='Password'
                          onChange={(e) => {
                            handleChangeInInput(e);
                          }}
                          ref={passwordRef}
                        />
                        <p></p>
                        <p className='text-secondary'>
                          Password must have charters
                        </p>
                        <p className='text-secondary'>
                          Password must have SmallCase and UpperCase
                        </p>
                        <p className='text-secondary'>
                          Password must have Special Char as $*#
                        </p>
                        <p className='text-danger'>{errors.PasswordErr}</p>
                      </div>
                      <a href='#'>Forget your Password?</a>
                    </div>
                  </div>

                  <div>
                    <input type='checkbox' className='check-sign-form' /> I have
                    read and understood the <Link to=''>Privacy policy.</Link>
                  </div>

                  <div className='col-12'>
                    <button
                      className='btn btn-primary'
                      type='submit'
                      onClick={handleSignup}
                    >
                      Create Profile
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}

export default SignIn;
