import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home.jsx';
import Footer from './components/footer/footer';
import SignIn from './components/SignIn/SignInPage';
import LogIn from './components/LogIn/LogIn';
import Products from './pages/products/products';
import Menu from './components/menu/menu';
import SubCategory from './pages/subCategory';
import StoresPage from './pages/storeLocation';
import Profile from './pages/profile';
import { Provider } from 'react-redux';
import store from './store/store';
import ProductA from './components/productA/productA';
import ShoppingCart from './pages/shoppingCart';

function App() {
  return (
    <Provider store={store}>
      <Menu />
      <div className='body-container'>
        <Navbar />

        <div className='mt-nav-4 pt-nav border-top'>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/shoppingcart' component={ShoppingCart} />
            <Route path='/shoppingcart' component={ShoppingCart} />
            <Route path='/stores' component={StoresPage} />
            <Route path='/category/:type/:name/:id/:subName/:subId/:prodName/:prodId' component={ProductA} />
            <Route
              path='/category/:type/:name/:id'
              exact
              component={SubCategory}
            />
            <Route
              path='/category/:type/:name/:id/:subName/:subId'
              exact
              component={Products}
            />
            <Route path='/stores' component={StoresPage} />
            <Route path='/shoppingcart' component={ShoppingCart} />
            <Route path='/profile' component={Profile} />
            <Route path='/sign' exact component={SignIn} />
            <Route path='/login' exact component={LogIn} />
            <Route path='/products/:pId' exact component={ProductA} />
            <Redirect from='/' exact to='/home' />
          </Switch>
        </div>
      </div>

      <Footer />
    </Provider>
  );
}

export default App;
