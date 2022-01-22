import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Home from './components/home.jsx';
import Footer from './components/footer/footer';
import Menu from './components/menu/menu';

function App() {
  return (
    <>
    <Menu />
      <Navbar />
      
      <Switch>
        <Route path='/home' component={Home} />
        <Redirect from='/' exact to='/home' />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
