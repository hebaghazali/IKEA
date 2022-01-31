import { useState } from 'react';
import AccountTab from './accountTab/accountTab';
import AddressTab from './addressTab/addressTab';
import SettingsTab from './settingsTab/settingsTab';

const ProfileTab = () => {
  const [selectedTab, setSelectedTab] = useState('Account');
  return (
    <>
      <div className='row col-12 gx-4 mt-3'>
        <div className='col-4 row' onClick={() => setSelectedTab('Account')}>
          <p className={`tab ${selectedTab === 'Account' && 'selected'}`}>
            Account
          </p>
        </div>
        <div className='col-4' onClick={() => setSelectedTab('Address')}>
          <p className={`tab ${selectedTab === 'Address' && 'selected'}`}>
            Address
          </p>
        </div>

        <div className='col-4' onClick={() => setSelectedTab('Settings')}>
          <p className={`tab ${selectedTab === 'Settings' && 'selected'}`}>
            Settings
          </p>
        </div>
      </div>
      {selectedTab === 'Account' && <AccountTab />}
      {selectedTab === 'Address' && <AddressTab />}
      {selectedTab === 'Settings' && <SettingsTab />}
    </>
  );
};
export default ProfileTab;
