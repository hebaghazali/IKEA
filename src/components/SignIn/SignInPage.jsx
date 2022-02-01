import React from 'react';
import { useState } from 'react';
import '../../assets/scss/pages/_login.scss';
import { Link } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
import SharedLogComp from '../SharedLogCom/ShahredLogCom';

function SignIn() {
  const [users, setUser] = useState({
    Name: '',
    Phone: ','
  });

  const [errors, setError] = useState({
    NameErr: null,
    PhoneErr: null,
  });

  // Function to hadndle change in any input and write into it
  const handleChangeInInput = (e) => {
    const regName = /^\w[a-zA-Z]{3,}/;
    const regPhoneNum = /^01[0125][0-9]{8}$/

    // Validate Name Input
    setUser({
      ...users,
      [e.target.name]: e.target.value,
    });

    // Validate Name Input
    if (e.target.name == 'Name') {
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
    }

    else if(e.target.name == 'Phone') {
      if (regPhoneNum.test(e.target.value)) {
        setError({
          ...errors,
          PhoneErr: '',
        });
      } else {
        setError({
          ...errors,
          PhoneErr: "Inavalid phone number",
        });
      }
    }
  };

  return (
    <>
      <div className='log-parent'>
        <div className='container'>
          {/* <!-- Left section --> */}
          <section className='row left-box-log'>
            <section className='col-md-5 col-12 login-heading'>
              <h3>Create an IKEA Profile</h3>
              <p>
                Already have an account? <Link to='./log'> Login</Link>{' '}
              </p>
            </section>

            {/* <!-- Center Section --> */}
            <section className='col-md-2 col-12 center-sec'></section>
            {/* <!-- Right Section --> */}
            <section className='col-md-5 col-12 login-form'>
              <div className='form-floating mb-3 input-log'>
                <form className='row g-3 needs-validation' noValidate>
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
                        placeholder='EG(+20)'
                        onChange={(e) => {
                        handleChangeInInput(e);
                      }}
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
                    >
                      <option  value=''>
                        IKEA Cairo Mall Of Arabia
                      </option>
                      <option>IKEA CFC</option>
                    </select>
                    <div className='invalid-feedback'>
                      Please select a valid Store.
                    </div>
                  </div>

                  {/* <SharedLogComp /> */}

                  <div>
                    <input type='checkbox' className='check-sign-form' /> I have
                    read and understood the <Link to=''>Privacy policy.</Link>
                  </div>

                  <div className='col-12'>
                    <button className='btn btn-primary' type='submit'>
                      Create Profile
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}

export default SignIn;
