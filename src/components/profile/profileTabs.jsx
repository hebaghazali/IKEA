import { useState } from 'react';
import AccountTab from './accountTab/accountTab';
import AddressTab from './addressTab/addressTab';
import OrdersTab from './ordersHistoryTab/ordersHistoryTab';
import SettingsTab from './settingsTab/settingsTab';

const ProfileTab = () => {
  const [selectedTab, setSelectedTab] = useState('Account');
  return (
    <>
      <div className='row col-12 gx-4 mt-3'>
        <div className='col-sm-12 col-md-3 row' onClick={() => setSelectedTab('Account')}>
          <p className={`tab ${selectedTab === 'Account' && 'selected'}`}>
            Account
          </p>
        </div>
        <div className='col-sm-12 col-md-3' onClick={() => setSelectedTab('Address')}>
          <p className={`tab ${selectedTab === 'Address' && 'selected'}`}>
            Address
          </p>
        </div>

        <div className='col-sm-12 col-md-3' onClick={() => setSelectedTab('Settings')}>
          <p className={`tab ${selectedTab === 'Settings' && 'selected'}`}>
            Settings
          </p>
        </div>

        <div className='col-sm-12 col-md-3' onClick={() => setSelectedTab('Orders History')}>
          <p className={`tab ${selectedTab === 'Orders History' && 'selected'}`}>
            Orders History
          </p>
        </div>
      </div>
      {selectedTab === 'Account' && <AccountTab />}
      {selectedTab === 'Address' && <AddressTab />}
      {selectedTab === 'Settings' && <SettingsTab />}
      {selectedTab === 'Orders History' && <OrdersTab/>}
    </>
  );
};
export default ProfileTab;
