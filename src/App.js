import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Home from './components/home.jsx';
import Footer from './components/footer/footer';
import Menu from './components/menu/menu';
import SubCategory from './pages/subCategory';
import StoresPage from './pages/storeLocation';
import Profile from './pages/profile';

function App() {
  return (
    <>
      <Menu />
      <div className='body-container'>
        <Navbar />
        <div className='mt-nav-2 pt-nav border-top'>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/category/:type/:name/:id' component={SubCategory} />
            <Route path='/stores' component={StoresPage}/>
            <Route path='/profile' component={Profile}/>
            <Redirect from='/' exact to='/home' />
          </Switch>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
