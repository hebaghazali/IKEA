import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Home from './components/home.jsx';
import Footer from './components/footer/footer';
import Products from './pages/products/products';

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path='/home' component={Home} />
        <Redirect from='/' exact to='/home' />
        <Route path='/products' component={Products} />

      </Switch>

      <Footer />
    </>
  );
}

export default App;
