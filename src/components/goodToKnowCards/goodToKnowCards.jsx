import React from 'react';

const GoodToKnowCards = () => {
  const images = [
    'https://www.ikea.com/images/94/81/94815dfb07c9d996f51d39745dbd301f.jpg?f=xxl',
    'https://www.ikea.com/images/shopping-at-ikea-1ed755468fb4ad3f3ec3e80fb0f0b21b.jpg?f=xxl',
    'https://www.ikea.com/images/click-and-collect-1dbf1423d471e925e3e7494d7b1ae578.jpg?f=xxl',
  ];

  return (
    <>
      <div class='mt-5'>
        <h2 class='h2-title mb-5'>Good to know!</h2>
        <div class='row g-4'>
          {images.map(imageURL => (
            <div class='col-12 col-md-6 col-lg-4'>
              <img class='w-100' src={imageURL} alt='' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GoodToKnowCards;
