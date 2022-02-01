import { useSelector } from "react-redux";
import { updateData } from "../../../services/firebase";
import { updateUserStorageByID } from '../../../services/firebase';

const EditPassword = (props) => {
  const user=useSelector((state)=>state.user.user);
  const id=useSelector((state)=>state.user.id);

  var userInfo={
    Password:user.Password,
    Email:user.Email
  }
  
  const updateUser = ()=>{
    updateData('users',id,userInfo).then(()=>{
      updateUserStorageByID(id);
    })
    props.changeSelection(0)
  }
    return (
      <section className='col-12 col-lg-6'>
        <div className='form-floating mb-3 p-0 floating-input-holder'>
          <input
            type='password'
            className='form-control edit-input'
            id='floatingInput'
            placeholder=''
          />
          <label htmlFor='floatingInput'>Current password</label>
        </div>
        <div className='form-floating mb-3 p-0 floating-input-holder'>
          <input
            type='password'
            className='form-control edit-input'
            id='floatingInput'
            placeholder=''
          />
          <label htmlFor='floatingInput'>New password</label>
        </div>
        <div className='form-floating mb-3 p-0 floating-input-holder'>
          <input
            type='password'
            className='form-control edit-input'
            id='floatingInput'
            placeholder=''
          />
          <label htmlFor='floatingInput'>Current new password</label>
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
  export default EditPassword;