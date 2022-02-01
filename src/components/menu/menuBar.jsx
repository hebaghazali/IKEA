import MenuHeader from './menuHeader';
import MenuMainBody from './menuMainBody';

const MenuBar = () => {
  return (
    <>
      <div
        className='offcanvas offcanvas-start menu-bar'
        tabIndex='-1'
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'
      >
        <MenuHeader/>
        <MenuMainBody/>
      </div>
    </>
  );
};
export default MenuBar;
