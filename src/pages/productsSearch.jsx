import React, { useEffect, useState } from 'react';
import { getProductsBySearchText } from '../services/firebase';
import { useParams } from 'react-router-dom';
import ProductsList from '../components/productsList';

const ProductsSearch = () => {
  const [searchResult, setSearchResult] = useState();
  const [loading, setLoading] = useState(true);

  const params = useParams();

  // useEffect(() => {
  //   console.log(params.query);
  //   console.log(searchResult);
  // }, [searchResult]);

  useEffect(() => {
    setLoading(true)
    getProductsBySearchText(RegExp(params.query, 'i')).then(res => {
      console.log("search",res);
      setLoading(false)
      setSearchResult(res);
    });
  }, [setSearchResult, params.query]);

  return (
    <>
      <h1>
        Showing results for "<strong>{params.query}</strong>"
      </h1>

     <ProductsList
        loading={loading}
        productsList={searchResult}
        search
      />  
    </>
  );
};

export default ProductsSearch;
