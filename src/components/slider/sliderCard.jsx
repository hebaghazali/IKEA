import React from 'react';

const SliderCard = props => {
  const { card } = props;

  return (
    <div className='col-12 col-lg-4 col-md-6'>
      <img src={card.imgURL} alt='' />
      <div
        className={`description-container ${
          card.description.bgColor ? card.description.bgColor : ''
        }`}
      >
        <div className='description-body'>
          <h3>{card.description.header}</h3>
          <p>{card.description.paragraph}</p>
        </div>
        <button className={card.arrowBtnColor ? card.arrowBtnColor : ''}>
          <i className='fas fa-arrow-right'></i>
        </button>
      </div>
    </div>
  );
};

export default SliderCard;
