import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Home from './components/home.jsx';
import Footer from './components/footer/footer';
import Products from './pages/products/products';
import Menu from './components/menu/menu';
import SubCategory from './pages/subCategory';
import StoresPage from './pages/storeLocation';
import Profile from './pages/profile';
import { Provider } from 'react-redux';
import store from './store/store';
import ShoppingCart from './pages/shoppingCart';

function App() {
  return (
   
    <Provider store={store}>
      <div className='body-container'>
      <Menu />

        <Navbar />
        <div className='mt-nav-2 pt-nav border-top'>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/category/:type/:name/:id' component={SubCategory} />
            <Route path='/stores' component={StoresPage}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/products' component={Products} />
            <Route path='/shoppingcart' component={ShoppingCart}/>
            <Redirect from='/' exact to='/home' />
          </Switch>
        </div>
      </div>
      <Footer />
    </Provider>
  )}
      


export default App;
