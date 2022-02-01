const MenuHeader = () => {
  return (
    <>
      <div className='offcanvas-header menu-header'>
        <button type='button' className='menu-btn' data-bs-dismiss='offcanvas'>
          <i className='bi bi-x'></i>
        </button>
        <img
          src='https://www.ikea.com/eg/en/static/ikea-logo.f7d9229f806b59ec64cb.svg'
          alt='...'
        />
      </div>
    </>
  );
};
export default MenuHeader;
