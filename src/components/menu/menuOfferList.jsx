import { Link } from 'react-router-dom';

const MenuOfferList = props => {
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
        <span className='head-title'>Offers</span>
      </div>
      <ul className='small-text-list my-4'>
        <li>
          <Link to='/'>New Lower Price</Link>
        </li>
        <li>
          <Link to='/'>Sale</Link>
        </li>
      </ul>
    </div>
  );
};
export default MenuOfferList;
