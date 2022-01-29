import React from 'react';
import SliderCard from './sliderCard';

const Slider = () => {
  const cards = [
    {
      imgURL:
        'https://www.ikea.com/images/8b/c2/8bc2422a4ebdce5aff5c06a62378ddcf.jpg?f=xxl',
      description: {
        header: 'Free delivery to your doorstep across Egypt',
        paragraph:
          'On accessories purchases over 250 EGP and up to 20kgs per order',
      },
    },
    {
      imgURL:
        'https://www.ikea.com/images/ff/f1/fff1186879c1ada2baf314e9c3974ca9.png?f=xxl',
      description: {
        header: 'Shop now, pay later',
        paragraph: 'Installment plan applicable for in-store purchases only',
      },
    },
    {
      imgURL:
        'https://www.ikea.com/images/07/e0/07e00f22872a77d736c904c5caaea2b5.jpg?f=xxl',
      description: {
        bgColor: 'red-bg',
        header: 'New lower price',
        paragraph: 'Same great quality, with new lower prices',
      },
      arrowBtnColor: 'white',
    },
    {
      imgURL:
        'https://www.ikea.com/images/cc/3e/cc3ef4f1303f68e5f50b04b7bfd9a9a7.jpg?f=xxl',
      description: {
        bgColor: 'brown-bg',
        header: 'IKEA limited collections',
        paragraph: 'Discover the newest IKEA limited collections',
      },
    },
    {
      imgURL:
        'https://www.ikea.com/images/b2/c0/b2c0c304d16024f26b1c93c622127492.jpg?f=xxl',
      description: {
        bgColor: 'dark-orange-bg',
        header: 'Discover our new products',
        paragraph:
          'The new products are convenient and give your home a fresh new look.',
      },
      arrowBtnColor: 'white',
    },
    {
      imgURL:
        'https://www.ikea.com/images/f5/bb/f5bb28faebfd6f516e5147ad11d5c016.jpg?f=xxl',
      description: {
        bgColor: 'dark-green-bg',
        header: 'Play like nobody’s watching',
        paragraph:
          'Follow the kids’ lead, and don’t take yourself too seriously. When we asked people for their best tips on making play a bigger part of everyday life, that is what we learned.',
      },
      arrowBtnColor: 'white',
    },
    {
      imgURL:
        'https://www.ikea.com/images/f5/bb/f5bb28faebfd6f516e5147ad11d5c016.jpg?f=xxl',
      description: {
        bgColor: 'dark-blue-bg',
        header: 'Homes',
        paragraph:
          'Get inspired by these living spaces in different styles, sizes, and price ranges, and the stories of the people who call them home.',
      },
      arrowBtnColor: 'white',
    },
  ];

  return (
    <div className='teaser border-top pt-2'>
      <h2 className='h2-title'>Now in IKEA Egypt</h2>
      <div className='carousel-body'>
        <div className='row flex-nowrap'>
          {cards.map(card => (
            <SliderCard card={card} key={cards.indexOf(card)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
