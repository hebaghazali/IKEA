const EditContactInfo = (props) => {
    return (
      <section className='col-12 col-lg-6'>
        <div className='form-floating mb-3 p-0 floating-input-holder'>
          <input
            type='text'
            className='form-control edit-input'
            id='floatingInput'
            placeholder=''
          />
          <label htmlFor='floatingInput'>Mobile (Optional)</label>
        </div>
        <div className='form-floating mb-3 p-0 floating-input-holder'>
          <input
            type='text'
            className='form-control edit-input'
            id='floatingInput'
            placeholder=''
          />
          <label htmlFor='floatingInput'>Email</label>
        </div>
        <button
          className='default-btn cancel-change-btn col-12 mt-5'
          onClick={() => props.changeSelection(0)}
        >
          Cancel
        </button>
        <button className='dark-btn save-change-btn col-12'>Save changes</button>
      </section>
    );
  };
  export default EditContactInfo;
  