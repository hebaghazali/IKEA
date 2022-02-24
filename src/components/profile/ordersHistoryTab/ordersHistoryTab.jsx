import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getDocumentByID } from '../../../services/firebase';
import OrderCard from './orderCard';

const OrdersTab = () => {
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
  };
  useEffect(() => {
    getUserOrders();
  }, [purchases]);
  return (
    <>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </>
  );
};
export default OrdersTab;
