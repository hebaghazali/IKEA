import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Home from './components/home.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/home' component={Home} />
        <Redirect from='/' exact to='/home' />
      </Switch>
    </>
  );
}

export default App;
