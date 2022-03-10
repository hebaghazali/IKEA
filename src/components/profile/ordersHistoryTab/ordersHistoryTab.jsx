import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getDocumentByID } from '../../../services/firebase';
import Loader from '../../loader';
import OrderCard from './orderCard';
import { useTranslation } from 'react-i18next';

const OrdersTab = () => {
  const { t } = useTranslation();
  const [loader, setLoader] = useState(true);
  const purchases = useSelector((state) => state.user.user.Purchased);
  const [orders, setOrders] = useState([]);
  const getUserOrders = () => {
    let orderList = [];
    purchases.forEach((element, index) => {
      getDocumentByID('Orders', element).then((order) => {
        order.id = element;
        orderList.push(order);
        if (index === purchases.length - 1) {
          setOrders(orderList);
        }
      });
    });
    console.log('here')
  };
  useEffect(() => {
    if (purchases) {
      getUserOrders();
    }
    setLoader(false);
  }, [purchases]);
  return (
    <>
      {loader && <Loader />}
      {!purchases && !loader &&(
        <div className='text-center my-5'>
          <p className='fst-italic' style={{ color: 'grey' }}>
            {t('NoOrders')}
          </p>
        </div>
      )}
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </>
  );
};
export default OrdersTab;
