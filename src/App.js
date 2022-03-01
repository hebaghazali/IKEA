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
import { Provider } from 'react-redux';
import store from './store/store';
import ProductA from './components/productA/productA';
import ShoppingCart from './pages/shoppingCart';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  return (
    <Provider store={store} >
      <div dir={i18n.dir()}>
      <Menu />
      <div className={`${i18n.dir()==='ltr'?'body-container-ltr':'body-container-rtl'}`}>
        <Navbar />

        <div className='mt-nav-4 pt-nav border-top'>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/shoppingcart' component={ShoppingCart} />
            <Route path='/category/:type/:name/:id' component={SubCategory} />
            <Route path='/shoppingcart' component={ShoppingCart} />
            <Route path='/stores' component={StoresPage} />
            <Route path='/proA' component={ProductA} />
            <Route
              path='/category/:type/:name/:id'
              exact
              component={SubCategory}
            />
            <Route path='/stores' component={StoresPage} />
            <Route path='/shoppingcart' component={ShoppingCart} />
            <Route path='/profile' component={Profile} />
            <Route
              path='/category/products/:subId'
              exact
              component={Products}
            />
            <Route path='/sign' exact component={SignIn} />
            <Route path='/login' exact component={LogIn} />
            <Route path='/products/:pId' exact component={ProductA} />
            <Redirect from='/' exact to='/home' />
          </Switch>
        </div>
      </div>

      <Footer />
      </div>
    </Provider>
  );
}

export default App;
