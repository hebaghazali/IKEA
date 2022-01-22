import React from 'react'
import '../../assets/scss/pages/_login.scss'
import { Link } from 'react-router-dom'

function LogIn () {
  return (
    <>
        <div class="log-parent">
      <div class="container">
        {/* <!-- Left section --> */}
        <section class="row left-box-log">
          <section class="col-md-5 col-12 login-heading">
            <h3>Login to your IKEA account</h3>
            <p>Login or create an account to access your latest shopping lists within our website and IKEA Shopping app.</p>
            <button class="login-creation" > <Link to='/sign'>Create account</Link> </button>
          </section>

          {/* <!-- Center Section --> */}
          <section class="col-md-2 col-12 center-sec"></section>
          {/* <!-- Right Section --> */}
          <section class="col-md-5 col-12 login-form">
            <div class="form-floating mb-3 input-log">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Email (UserName)</label>
            </div>
            <div class="form-floating input-log">
              <input type="password" class="form-control sec-inp" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Password</label>
              <a href="#">Forget your Password?</a>
            </div>
            <button class="login-creation">Login</button>
          </section>
        </section>
      </div>
    </div>
    </>
  )
}

export default LogIn