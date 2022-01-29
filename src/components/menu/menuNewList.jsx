import { Link } from 'react-router-dom';

const MenuNewList = (props) => {
  return (
    <div class='offcanvas-body menu-body'>
      <div class='d-flex flex-row'>
        <button
          class='position-sticky menu-btn'
          onClick={() => {
            props.changeSelection('');
          }}
        >
          <i class='bi bi-arrow-left-short'></i>
        </button>
        <span class='head-title'>What's new</span>
      </div>
      <ul class='small-text-list my-4'>
        <li>
          <Link to='/'>New Products</Link>
        </li>
        <li>
          <Link to='/'>Stories</Link>
        </li>
      </ul>
    </div>
  );
};
export default MenuNewList;
