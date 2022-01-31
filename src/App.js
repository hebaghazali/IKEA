import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Home from './components/home.jsx';
import Footer from './components/footer/footer';
import ProductA from './components/productA/productA';

function App() {
  return (
    <>
      <div className='body-container'>
        <Navbar />

        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/proA' exact component={ProductA} />
          <Redirect from='/' exact to='/home' />

        </Switch>
      </div>

      <Footer />
    </>
  );
}

export default App;
