import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Home from './components/home.jsx';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <div className='body-container'>
        <Navbar />

        <Switch>
          <Route path='/home' component={Home} />
          <Redirect from='/' exact to='/home' />
        </Switch>
      </div>

      <Footer />
    </>
  );
}

export default App;
