import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home.jsx';
import Footer from './components/footer/footer';
import SignIn from './components/SignIn/SignInPage'
import LogIn from './components/LogIn/LogIn';

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        {/* <Route path='/home' component={Home} />
        <Redirect from='/' exact to='/home' /> */}
        <Route path='/sign' exact component={SignIn} />
        <Route path='/log' exact component={LogIn} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
