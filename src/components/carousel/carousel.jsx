import React, { useEffect, useRef, useState } from 'react';
import { getCollection } from './../../services/firebase';
import ProductCard from '../cards/productCard/productCard';

const Carousel = ({ condition }) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    condition &&
      getCollection('Products', [
        condition.property,
        condition.operator,
        condition.value,
      ])
        .then(res => {
          setProducts(res);
        })
        .catch(err => console.log('error :', err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const carouselBody = useRef(null);

  const scrollCarousel = sign => {
    carouselBody.current.scrollBy({
      left: sign === 'positive' ? 1000 : -1000,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className='carousel'>
        <button
          className={`dark-btn left-chevron`}
          onClick={() => {
            scrollCarousel('negative');
          }}
        >
          <i className={`fas fa-chevron-left`}></i>
        </button>

        <div className='carousel-body p-0 pb-2 mb-5' ref={carouselBody}>
          <div className='row flex-nowrap'>
            {products?.map(product => (
              <ProductCard
                key={product.id}
                productData={product.data()}
                pId={product.id}
                showOptions
                carousel={true}
              />
            ))}
          </div>
        </div>

        <button
          className={`dark-btn right-chevron`}
          onClick={() => {
            scrollCarousel('positive');
          }}
        >
          <i className={`fas fa-chevron-right`}></i>
        </button>
      </div>
    </>
  );
};

export default Carousel;
