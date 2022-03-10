import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './rating.css';

const Rating = () => {
  const [rating, setRating] = useState(null);

  return (
    <div>
      <Link
        // class="btn btn-danger"
        // type="button"
        className='rate'
        data-bs-toggle='offcanvas'
        data-bs-target='#offcanvasRight'
        aria-controls='offcanvasRight'
      >
        add Rating
      </Link>

      <div
        class='offcanvas offcanvas-end'
        tabindex='-1'
        id='offcanvasRight'
        aria-labelledby='offcanvasRightLabel'
      >
        <div class='offcanvas-header'>
          <h5 id='offcanvasRightLabel ' className='header'>
            Star Rating
          </h5>
          <button
            type='button'
            class='btn-close text-reset'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>

        <div className='ratingVal'>
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;

            return (
              <label>
                <input
                  type='radio'
                  name='rating'
                  value={ratingValue}
                  onClick={() => {
                    setRating(ratingValue);
                  }}
                />
                <FaStar
                  className='star'
                  size={22}
                  color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rating;
