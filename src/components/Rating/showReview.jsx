import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar } from 'react-icons/fa';
import { getProductReviewFromUser } from '../../services/firebase';

import './rating.css';

const ShowReview = ({ review }) => {
  const {t,i18n}= useTranslation();
  return (
    <div>
      <h3 className='show-review'>{t('YourReview')} : </h3>

      {[...Array(5)].map((_, idx) => {
        return (
          <FaStar
            key={idx}
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
