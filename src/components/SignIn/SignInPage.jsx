import React from "react";
import '../../assets/scss/pages/_login.scss'
import { Link } from "react-router-dom";
import LogIn from "../LogIn/LogIn";

function SignIn() {
    return (
      <>
       <div class="log-parent">
      <div class="container">
        {/* <!-- Left section --> */}
        <section class="row left-box-log">
          <section class="col-md-5 col-12 login-heading">
            <h3>Create an IKEA Profile</h3>
            <p>Already have an account? <Link to="./log"> Login</Link> </p>
          </section>

          {/* <!-- Center Section --> */}
          <section class="col-md-2 col-12 center-sec"></section>
          {/* <!-- Right Section --> */}
          <section class="col-md-5 col-12 login-form">
            <div class="form-floating mb-3 input-log">
              <form class="row g-3 needs-validation" novalidate>
                <div class="input-box">
                  <input type="text" class="form-control input-sign-form" id="validationCustom01" placeholder="First Name" required />
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="input-box">
                  <input type="text" class="form-control input-sign-form" id="validationCustom02" placeholder="Last name" required />
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="input-box">
                  <div class="input-group has-validation">
                    <input type="text" class="form-control input-sign-form" id="validationCustom01" placeholder="EG(+20)" />
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                  </div>
                </div>
            
                <div>
                  <label for="validationCustom04" class="form-label selct-label-form-sign">Prefered Store</label>
                  <select class="form-select selct-form-sign" id="validationCustom04" required>
                    <option selected disabled value="">IKEA Cairo Mall Of Arabia</option>
                    <option>IKEA CFC</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid Store.
                  </div>
                </div>
                <div>
                  <input type="text" class="form-control input-sign-form" id="validationCustom05" placeholder="Email(UserName)" required />
                  <div class="invalid-feedback">
                    Your email(Username) is required
                  </div>
                </div>
                <div>
                  <input type="text" class="form-control input-sign-form" id="validationCustom05" required placeholder="Password" />
                  <div class="invalid-feedback">
                    Your Password is required
                  </div>
                </div>

                <div>
                  <input type="checkbox" class="check-sign-form" /> I would like to receive news, tips and marketing offers from IKEA. 
                  <input type="checkbox" class="check-sign-form" /> Via email.
                  <input type="checkbox" class="check-sign-form" /> Via SMS.
                  
                </div>

                <div>
                  <input type="checkbox" class="check-sign-form" /> I have read and understood the <a href="">Privacy policy.</a> 
                </div> 
                
                <div class="col-12">
                  <button class="btn btn-primary" type="submit">Create Profile</button>
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