const SettingsTab = () => {
  return (
    <>
      <section className='py-5 border-bottom'>
        <div className='row fw-bold d-flex justify-content-between mb-2'>
          <div className='col-6'>Ikea Store</div>
        </div>
        <section className='col-12 col-lg-6'>
        <div class='form-floating floating-input-holder col-9'>
        <select
          class='form-select edit-input'
          id='floatingSelect'
          aria-label='Floating label select example'
        >
          <option></option>
          <option value='1'>IKEA Cairo Mall Of Arabia</option>
          <option value='2'>IKEA CFC</option>
        </select>
        <label htmlFor='floatingSelect'>Preffered store</label>
        </div>
        </section>
      </section>

      <section className='py-5 border-bottom'>
        <div className='row fw-bold d-flex justify-content-between mb-2'>
          <div className='col-6'>Delete profile</div>
        </div>
        <p className='small-text'>
          You can delete your IKEA acoount at any point. This deletes your
          profile and the info associated with it.
        </p>
        <strong className='small-text'>Want to remove account?</strong>
      </section>
    </>
  );
};
export default SettingsTab;
