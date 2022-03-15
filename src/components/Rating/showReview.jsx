import React, { useState, useEffect, useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { getProductReviewFromUser } from '../../services/firebase';

import './rating.css';

const ShowReview = ({ productID }) => {
  const [review, setReview] = useState();

  useEffect(() => {
    getProductReviewFromUser(localStorage.getItem('UID'), productID).then(
      rev => {
        setReview(rev);
      }
    );
  }, []);

  return (
    <div>
      <h3 className='show-review'>Your review: </h3>

      {[...Array(5)].map((_, idx) => {
        return (
          <FaStar
            className='star'
            size={15}
            color={idx + 1 <= review?.rating ? '#ffc107' : '#e4e5e9'}
            style={{ margin: 0 }}
          />
        );
      })}

      <p className='show-comment'>{review?.comment}</p>
    </div>
  );
};

export default ShowReview;
