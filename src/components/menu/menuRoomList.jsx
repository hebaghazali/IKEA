// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js';
// import {
//   getFirestore,
//   collection,
//   getDocs,
// } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCollection } from '../../services/firebase';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBvz1el-WaDgUU36xlWeIEj2G9iyI0ewW4',
//   authDomain: 'ikea-8dc72.firebaseapp.com',
//   projectId: 'ikea-8dc72',
//   storageBucket: 'ikea-8dc72.appspot.com',
//   messagingSenderId: '293717792182',
//   appId: '1:293717792182:web:f170e2edfe2370c9769d17',
// };

// const app = initializeApp(firebaseConfig);

// const fireStore = getFirestore(app);

const MenuRoomList = props => {
  const [rooms, setRooms] = useState([]);
  useEffect(()=>{
    getCollection('RoomCategories').then((allCategories) => {
        setRooms(allCategories);
    });
  }, []);
  return (
    <div className='offcanvas-body menu-body'>
      <div className='d-flex flex-row'>
        <button
          className='position-sticky menu-btn left-arrow'
          onClick={() => {
            props.changeSelection('');
          }}
        >
          <i className='bi bi-arrow-left-short'></i>
        </button>
        <span className='head-title'>Rooms</span>
      </div>
      <div className='row mx-auto g-4 my-4' id='rooms-list'>
        {rooms.map(room => {
          return (
            <Link
              key={room.id}
              className='card category-card col-3 col-md-5'
              to={`/category/room/${room.data().Name}/${room.id}`}
            >
              <img src={room.data().Image} className='card-img-top' alt='...' />
              <div className='card-body category-body'>
                <p className='card-text'>{room.data().Name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default MenuRoomList;
