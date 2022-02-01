const EditPersonalInfo = (props) => {
  return (
    <section className='col-12 col-lg-6'>
      <div className='form-floating mb-3 p-0 floating-input-holder'>
        <input
          type='text'
          className='form-control edit-input'
          id='floatingInput'
          placeholder=''
        />
        <label htmlFor='floatingInput'>First name</label>
      </div>
      <div className='form-floating mb-3 p-0 floating-input-holder'>
        <input
          type='text'
          className='form-control edit-input'
          id='floatingInput'
          placeholder=''
        />
        <label htmlFor='floatingInput'>Last name</label>
      </div>
      <div className='form-floating mb-3 p-0 floating-input-holder'>
        <input
          type='text'
          className='form-control edit-input'
          id='floatingInput'
          placeholder='DD-MM_YYYY'
        />
        <label htmlFor='floatingInput'>Birthdate (Optional)</label>
      </div>
      <div class='form-floating floating-input-holder col-9'>
        <select
          class='form-select edit-input'
          id='floatingSelect'
          aria-label='Floating label select example'
        >
          <option></option>
          <option value='1'>Male</option>
          <option value='2'>Female</option>
        </select>
        <label htmlFor='floatingSelect'>Gender (Optional)</label>
        <p className='small-text mt-2 mb-5'>
          We require this field in order to best personalize communication &
          marketing material and understand our users better.
        </p>
      </div>
      <button
        className='default-btn cancel-change-btn col-12'
        onClick={() => props.changeSelection(0)}
      >
        Cancel
      </button>
      <button className='dark-btn save-change-btn col-12'>Save changes</button>
    </section>
  );
};
export default EditPersonalInfo;
