import React, { useState, useEffect } from 'react';
import '../../assets/scss/pages/_login.scss';
import {auth} from '../../config/firebaseConfig'
import Hello from '../Hello';

function SharedLogComp() {
  const [users, setUser] = useState({
    Email: '',
    Password: '',
  });

  const [errors, setError] = useState({
    EmailErr: null,
    PasswordErr: null,
  });

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  // Function to hadndle change in any input and write into it
  const handleChangeInInput = (e) => {
    const regEmail = /^([a-zA-Z0-9_\-\.]+){3,}@([a-zA-Z0-9_\-\.]+){3,}(.com)$/;
    const regName = /^\w[a-zA-Z]{3,}[^-\s][a-zA-Z]{3,}/;
    const regPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // console.log(e.target.value , e.target.name);

    setUser({
      ...users,
      [e.target.name]: e.target.value,
    });

    // Validate Email Input
    if (e.target.name == 'Email') {
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

<<<<<<< HEAD
  const handleLogIn =() => {
    clearError()
    auth
    .logInWithEmailAndPassword(Email, Password)
    // .catch((err) => {
    //   switch(err.code)
    //   {
    //     case "auth/invalid-email":
    //     case "auth/user-disabled":
    //     case "auth/user-not-found":
    //       setError({EmailErr: err.message})
    //       break
=======
  // const handleLogIn =() => {
  //   clearError()
  //   auth
  //   .logInWithEmailAndPassword(Email, Password)
  //   // .catch((err) => {
  //   //   switch(err.code)
  //   //   {
  //   //     case "auth/invalid-email":
  //   //     case "auth/user-disabled":
  //   //     case "auth/user-not-found":
  //   //       setError({EmailErr: err.message})
  //   //       break
>>>>>>> EsraaBranch

  //   //     case "auth/wrong-password":
  //   //       setError({PasswordErr: err.message})
  //   //       break
  //   //   }
  //   // })
  // }

<<<<<<< HEAD
  const authListner = () => {
    auth
    .onAuthStateChanged((users) => {
      if(users)
      {
        clearInputs()
        setUser(users)
      }
      else
      {
        setUser("")
      }
    })
  }
=======
  // const authListner = () => {
  //   auth
  //   .onAuthStateChanged((users) => {
  //     if(users)
  //     {
  //       clearInputs()
  //       setUser(users)
  //     }
  //     else
  //     {
  //       setUser("")
  //     }
  //   })
  // }
>>>>>>> EsraaBranch

  // const clearError = () => {
  //   setEmail('')
  //   setPassword('')
  // }

  // const clearInputs = () => {
  //   setUser({Email:'', Password:''})
  // }

  // useEffect(() => {
  //   authListner()
  // }, [])

  return (
    <>
<<<<<<< HEAD
      {users? (
        <Hello />
      ) : (
=======
>>>>>>> EsraaBranch
        <div className='form-floating mb-3 input-log'>
        <form className='row g-3 needs-validation' noValidate>
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
              type='text'
              className='form-control input-sign-form'
              id='validationCustom05'
              required
              name='Password'
              placeholder='Password'
              onChange={(e) => {
                handleChangeInInput(e);
              }}
            />
            <p></p>
            <p className='text-secondary'>Password must have charters</p>
            <p className='text-secondary'>
              Password must have SmallCase and UpperCase
            </p>
            <p className='text-secondary'>
              Password must have Special Char as $*#
            </p>
            <p className='text-danger'>{errors.PasswordErr}</p>
          </div>
          <a href='#'>Forget your Password?</a>
<<<<<<< HEAD
          <button className='login-creation' onClick={() => {handleLogIn()}}>Login</button>
=======
          <button className='login-creation' >Login</button>
>>>>>>> EsraaBranch
        </form>
      </div>
    </>
  );
}

export default SharedLogComp;
