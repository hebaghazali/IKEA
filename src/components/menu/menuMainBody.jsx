import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuNewList from './menuNewList';
import MenuOfferList from './menuOfferList';
import MenuProductList from './menuProductList';
import MenuRoomList from './menuRoomList';

const MenuMainBody = () => {
  const [selectedSection, setSelectedSection] = useState('');

  return (
    <>
      {selectedSection === '' && (
        <div id='main-menu' className='offcanvas-body menu-body'>
          <ul>
            <li
              onClick={() => {
                setSelectedSection('p-content');
              }}
              style={{ cursor: 'pointer' }}
            >
              Products
            </li>
            <li
              onClick={() => {
                setSelectedSection('r-content');
              }}
              style={{ cursor: 'pointer' }}
            >
              Rooms
            </li>
            <li
              onClick={() => {
                setSelectedSection('o-content');
              }}
              style={{ cursor: 'pointer' }}
            >
              Offers
            </li>
            <li
              onClick={() => {
                setSelectedSection('w-content');
              }}
              style={{ cursor: 'pointer' }}
            >
              What's new
            </li>
          </ul>
          <ul className='small-text-list'>
            <li>
              <Link to='/stores'>Stores</Link>
            </li>
            <li>
              <Link to='/conactUs'>Contact us</Link>
            </li>
          </ul>
          <div className='d-flex flex-row justify-content-around'>
            <select type='button' className='selector-btn'>
              <option>English</option>
              <option>العربية</option>
            </select>
            <button className='selector-btn'>
              <i className='bi bi-globe'></i>
              Change country
            </button>
          </div>
        </div>
      )}
      {selectedSection === 'p-content' && (
        <MenuProductList
          changeSelection={(selection) => setSelectedSection(selection)}
        />
      )}
      {selectedSection === 'r-content' && (
        <MenuRoomList
          changeSelection={(selection) => setSelectedSection(selection)}
        />
      )}
      {selectedSection === 'o-content' && (
        <MenuOfferList
          changeSelection={(selection) => setSelectedSection(selection)}
        />
      )}
      {selectedSection === 'w-content' && (
        <MenuNewList
          changeSelection={(selection) => setSelectedSection(selection)}
        />
      )}
    </>
  );
};
export default MenuMainBody;
