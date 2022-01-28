import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js';
import {
  getFirestore,
  collection,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyBvz1el-WaDgUU36xlWeIEj2G9iyI0ewW4',
  authDomain: 'ikea-8dc72.firebaseapp.com',
  projectId: 'ikea-8dc72',
  storageBucket: 'ikea-8dc72.appspot.com',
  messagingSenderId: '293717792182',
  appId: '1:293717792182:web:f170e2edfe2370c9769d17',
};

const app = initializeApp(firebaseConfig);

const fireStore = getFirestore(app);

const MenuProductList = (props) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getDocs(collection(fireStore, 'ProductCategories')).then(
      (allCategories) => {
        setCategories(allCategories.docs);
      }
    );
  }, []);
  return (
    <>
      <div className='offcanvas-body menu-body'>
        <div className='d-flex flex-row'>
          <button
            className='position-sticky menu-btn'
            onClick={() => {
              props.changeSelection('');
            }}
          >
            <i className='bi bi-arrow-left-short'></i>
          </button>
          <span className='head-title'>Products</span>
        </div>
        <ul className='small-text-list my-4' id='products-list'>
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <Link
                  to={`/category/product/${category.data().Name}/${
                    category.id
                  }`}
                >
                  {category.data().Name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MenuProductList;
