import { useSelector } from "react-redux";
import { updateData } from "../../../services/firebase";
import { updateUserStorageByID } from '../../../services/firebase';

const EditPersonalInfo = (props) => {
  const user=useSelector((state)=>state.user.user);
  const id=useSelector((state)=>state.user.id);

  var userInfo={
    FirstName:user.FirstName,
    LastName:user.LastName,
    BirthDate:user.BirthDate,
    Gender:user.Gender
  }

  const updateUser = ()=>{
    updateData('users',id,userInfo).then(()=>{
      updateUserStorageByID(id);
    })
    props.changeSelection(0);
  }
  return (
    <section className='col-12 col-lg-6'>
      <div className='form-floating mb-3 p-0 floating-input-holder'>
        <input
          type='text'
          className='form-control edit-input'
          id='floatingInput'
          placeholder=''
          defaultValue={user.FirstName}
          onChange={
            (e)=>{userInfo.FirstName=e.target.value}
          }
        />
        <label htmlFor='floatingInput'>First name</label>
      </div>
      <div className='form-floating mb-3 p-0 floating-input-holder'>
        <input
          type='text'
          className='form-control edit-input'
          id='floatingInput'
          placeholder=''
          defaultValue={user.LastName}
          onChange={
            (e)=>{userInfo.LastName=e.target.value}
          }
        />
        <label htmlFor='floatingInput'>Last name</label>
      </div>
      <div className='form-floating mb-3 p-0 floating-input-holder'>
        <input
          type='text'
          className='form-control edit-input'
          id='floatingInput'
          placeholder='DD-MM_YYYY'
          defaultValue={user.BirthDate}
          onChange={
            (e)=>{userInfo.BirthDate=e.target.value}
          }
        />
        <label htmlFor='floatingInput'>Birthdate (Optional)</label>
      </div>
      <div className='form-floating floating-input-holder col-9'>
        <select
          className='form-select edit-input'
          id='floatingSelect'
          aria-label='Floating label select example'
          defaultValue={user.Gender}
          onChange={
            (e)=>{userInfo.Gender=e.target.value}
          }
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
      <button className='dark-btn save-change-btn col-12' onClick={()=>updateUser()}>Save changes</button>
    </section>
  );
};
export default EditPersonalInfo;
