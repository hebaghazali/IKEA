import React from 'react';
import './i18n/config';
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
import ProductA from './components/productA/productA';
import Testpage from './pages/TestPage';
import Rating from './components/Rating/rating'
import ShoppingCart from './pages/shoppingCart';
import { useTranslation } from 'react-i18next';

import GuardedRoute from 'react-guarded-route';
import FavouritePage from './pages/favouritePage';
import Checkout from './components/paypalCheckout/checkout';
import PayPal from './components/paypalCheckout/PayPal';
import ProductsSearch from './pages/productsSearch';

function App() {
  const loginValidator = () => {
    // If there is UID it will return false, otherwise it will return true
    return !localStorage.getItem('UID');
  };

  const profileValidator = () => {
    // If there is UID it will return true, otherwise it will return false
    return !!localStorage.getItem('UID');
  };

  const checkoutValidator = () => {
    // If there is UID it will return true, otherwise it will return false
    return !!localStorage.getItem('UID');
  };

  const { i18n } = useTranslation();

  return (
    <>
      <div dir={i18n.dir()}>
      <Menu />
      <div className={`${i18n.dir()==='ltr'?'body-container-ltr':'body-container-rtl'}`}>
        <Navbar />

        <div className='mt-nav-4 pt-nav border-top'>
          <Switch>
            <Redirect from='/' exact to='/home' />

            <Route path='/home' component={Home} />
            <Route path='/stores' component={StoresPage} />
            <Route path='/proA' component={ProductA} />
            <Route path='/category/:type/:name/:id' exact component={SubCategory} />
            <Route path='/stores' component={StoresPage}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/category/products' exact component={Products} />
            {/* <Route path='/category/:type/:name/:id/:subName/:subId' exact component={Products} /> */}
            <Route path="/products/:pId" exact component={ProductA} />
            <Route path='/rating' exact component={Rating} />
            <Redirect from='/' exact to='/home' />

            <Route
              path='/category/:type/:name/:id/:subName/:subId/:prodName/:prodId'
              component={ProductA}
            />
            <Route
              path='/category/:type/:name/:id'
              exact
              component={SubCategory}
            />
            <Route path='/stores' component={StoresPage} />
            <Route path='/shoppingcart' component={ShoppingCart} />
            <Route
              path='/category/:type/:name/:id/:subName/:subId'
              exact
              component={Products}
            />
            <Route path='/products/:pId' exact component={ProductA} />

            <Route
              path='/productsSearch/:query'
              exact
              component={ProductsSearch}
            />

            <Route path='/favorite' exact component={FavouritePage} />

            <GuardedRoute
              path='/login'
              component={LogIn}
              redirectTo='/profile'
              validatorFunction={loginValidator()}
            ></GuardedRoute>

            <GuardedRoute
              path='/sign'
              component={SignIn}
              redirectTo='/profile'
              validatorFunction={loginValidator()}
            ></GuardedRoute>

            <GuardedRoute
              path='/profile'
              component={Profile}
              redirectTo='/sign'
              validatorFunction={profileValidator()}
            ></GuardedRoute>

            <GuardedRoute
              path='/checkout'
              component={Checkout}
              redirectTo='/login'
              validatorFunction={checkoutValidator()}
            ></GuardedRoute>
          </Switch>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default App;
