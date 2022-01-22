import React from 'react';
import { useState } from 'react';
import '../../assets/scss/pages/_login.scss';
import { Link } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
import SharedLogComp from '../SharedLogCom/ShahredLogCom';

function SignIn() {
  const [users, setUser] = useState({
    Name: '',
  });

  const [errors, setError] = useState({
    NameErr: null,
  });

  // Function to hadndle change in any input and write into it
  const handleChangeInInput = (e) => {
    const regName = /^\w[a-zA-Z]{3,}/;

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
  };

  return (
    <>
      <div class='log-parent'>
        <div class='container'>
          {/* <!-- Left section --> */}
          <section class='row left-box-log'>
            <section class='col-md-5 col-12 login-heading'>
              <h3>Create an IKEA Profile</h3>
              <p>
                Already have an account? <Link to='./log'> Login</Link>{' '}
              </p>
            </section>

            {/* <!-- Center Section --> */}
            <section class='col-md-2 col-12 center-sec'></section>
            {/* <!-- Right Section --> */}
            <section class='col-md-5 col-12 login-form'>
              <div class='form-floating mb-3 input-log'>
                <form class='row g-3 needs-validation' novalidate>
                  <div class='input-box'>
                    <input
                      type='text'
                      class='form-control input-sign-form'
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
                  <div class='input-box'>
                    <input
                      type='text'
                      class='form-control input-sign-form'
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
                  <div class='input-box'>
                    <div class='input-group has-validation'>
                      <input
                        type='text'
                        class='form-control input-sign-form'
                        id='validationCustom01'
                        name='Phone'
                        placeholder='EG(+20)'
                      />
                      <div class='valid-feedback'>Looks good!</div>
                    </div>
                  </div>

                  <div>
                    <label
                      for='validationCustom04'
                      class='form-label selct-label-form-sign'
                    >
                      Prefered Store
                    </label>
                    <select
                      class='form-select selct-form-sign'
                      id='validationCustom04'
                      required
                    >
                      <option selected disabled value=''>
                        IKEA Cairo Mall Of Arabia
                      </option>
                      <option>IKEA CFC</option>
                    </select>
                    <div class='invalid-feedback'>
                      Please select a valid Store.
                    </div>
                  </div>

                  <SharedLogComp />

                  <div>
                    <input type='checkbox' class='check-sign-form' /> I have
                    read and understood the <Link to=''>Privacy policy.</Link>
                  </div>

                  <div class='col-12'>
                    <button class='btn btn-primary' type='submit'>
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
