import { useSelector } from "react-redux";
import { updateData } from "../../../services/firebase";
import { updateUserStorageByID } from '../../../services/firebase';
import { useTranslation } from 'react-i18next';

const SettingsTab = () => {
  const { t } = useTranslation();
  const user=useSelector((state)=>state.user.user);
  const id=useSelector((state)=>state.user.id);

  var userInfo={
    PrefferedStore:user.PrefferedStore
  }
  
  const updateUser = ()=>{
    updateData('users',id,userInfo).then(()=>{
      updateUserStorageByID(id);
    })
  }
  return (
    <>
      <section className='py-5 border-bottom'>
        <div className='row fw-bold d-flex justify-content-between mb-2'>
          <div className='col-6'>{t('IkeaStore')}</div>
        </div>
        <section className='col-12 col-lg-6'>
        <div className='form-floating floating-input-holder col-9'>
        <select
          className='form-select edit-input'
          id='floatingSelect'
          aria-label='Floating label select example'
          defaultValue={user.PrefferedStore}
          onChange={
            (e)=>{
              userInfo.PrefferedStore=e.target.value
              updateUser();
            }
          }
        >
          <option></option>
          <option value='1'>IKEA Cairo Mall Of Arabia</option>
          <option value='2'>IKEA CFC</option>
        </select>
        <label htmlFor='floatingSelect'>{t('PrefferedStore')}</label>
        </div>
        </section>
      </section>

      <section className='py-5 border-bottom'>
        <div className='row fw-bold d-flex justify-content-between mb-2'>
          <div className='col-6'>{t('DeleteProfile')}</div>
        </div>
        <p className='small-text'>
          {t('DeleteInfo')}
        </p>
        <strong className='small-text'>{t('DeleteConfirmation')}</strong>
      </section>
    </>
  );
};
export default SettingsTab;
