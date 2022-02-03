import React from 'react';
import '../../assets/scss/pages/_login.scss';
import { Link } from 'react-router-dom';
import SharedLogComp from '../SharedLogCom/ShahredLogCom';

function LogIn() {
  return (
    <>
      <div className='log-parent'>
        <div className='container'>
          {/* <!-- Left section --> */}
          <section className='row left-box-log'>
            <section className='col-md-5 col-12 login-heading'>
              <h3>Login to your IKEA account</h3>
              <p>
                Login or create an account to access your latest shopping lists
                within our website and IKEA Shopping app.
              </p>
              <button className='login-creation'>
                {' '}
                <Link to='/sign'>Create account</Link>{' '}
              </button>
            </section>

            {/* <!-- Center Section --> */}
            <section className='col-md-2 col-12 center-sec'></section>
            {/* <!-- Right Section --> */}
            <section className='col-md-5 col-12 login-form'>
              <SharedLogComp />
            </section>
          </section>
        </div>

        

      </div>
    </>
  );
}

export default LogIn;