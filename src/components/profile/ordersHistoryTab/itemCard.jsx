import { useEffect } from 'react';
import { useState } from 'react';
import { getDocumentByID } from '../../../services/firebase';

const ItemCard = ({ item }) => {
  const [product, setProduct] = useState({
    Images: [],
    Name: '',
    Price: 0,
  });
  const getProductData = async () => {
    return getDocumentByID('Products', item.ProductID).then((product) => {
      setProduct(product);
      console.log(product);
    });
  };
  useEffect(() => {
    getProductData();
  }, [item]);
  return (
    <div className='border col-12 row m-2'>
      <img src={product.Images[0]} alt={product.Name} className='col-3' />
      <div className='col-7 p-2'>
        <h5>{product.Name}</h5>
        <small className='small-text-size fw-lighter'>
          Product Price: EGP {product.Price}
        </small>
        <br></br>
        <small className='small-text-size fw-lighter'>
          Purchased Amount: {item.Amount}
        </small>
      </div>
    </div>
  );
};
export default ItemCard;