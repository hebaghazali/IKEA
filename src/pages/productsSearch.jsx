import React, { useEffect, useState } from 'react';
import { getProductsBySearchText } from '../services/firebase';
import { useParams } from 'react-router-dom';

const ProductsSearch = () => {
  const [searchResult, setSearchResult] = useState();

  const params = useParams();

  // useEffect(() => {
  //   console.log(params.query);
  //   console.log(searchResult);
  // }, [searchResult]);

  useEffect(() => {
    getProductsBySearchText(RegExp(params.query, 'i')).then(res => {
      setSearchResult(res);
    });
  }, [setSearchResult, params.query]);

  return (
    <>
      <h1>
        Showing results for "<strong>{params.query}</strong>"
      </h1>
      <ul>
        {searchResult?.map(res => (
          <li key={searchResult.indexOf(res)}>
            <h4>{res.data.Name}</h4>
            <p>{res.data.Description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsSearch;
