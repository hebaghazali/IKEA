import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getDocumentByID } from '../../../services/firebase';
import Loader from '../../loader';
import OrderCard from './orderCard';

const OrdersTab = () => {
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
          setLoader(false);
        }
      });
    });
  };
  useEffect(() => {
    if (purchases) {
      getUserOrders();
    }
  }, [purchases]);
  return (
    <>
      {loader && <Loader />}
      {!purchases && (
        <div className='text-center my-5'>
          <p className='fst-italic' style={{ color: 'grey' }}>
            you have no orders
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
