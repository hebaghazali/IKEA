import ItemCard from './itemCard';

const OrderCard = ({ order }) => {
  return (
    <div className='col-12 order-card row'>
      <div className='col-5 border-end p-1'>
        <h5>ORDER #{order.id}</h5>
        <h5>
          Created At:{' '}
          <small className='small-text-size fst-italic fw-lighter'>
            {order.CreatedAt.toDate().toString()}
          </small>
        </h5>
        {order.Status && <h5 className='text-success'>Delivered</h5>}
        {!order.Status && <h5 className='text-danger'>Pending</h5>}
        <h4>Total Price: EGP {order.TotalPrice}</h4>
      </div>
      <div className='col-7'>
        {order.Items.map((item) => (
          <ItemCard item={item} key={item.ProductID} />
        ))}
      </div>
    </div>
  );
};
export default OrderCard;
