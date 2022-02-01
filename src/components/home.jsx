import React from 'react';
import Carousel from './carousel/carousel';
import ImageGallery from './imageGallery/imageGallery';
import SalesButtons from './salesButtons/salesButtons';
import Slider from './slider/slider';
import GoodToKnowCards from './goodToKnowCards/goodToKnowCards';

const Home = () => {
  return (
    <>
      <ImageGallery />

      <Carousel
        condition={{ property: 'SalePrice', operator: '>', value: 0 }}
      />

      <SalesButtons />

      <Slider />

      <Carousel
        condition={{ property: 'LowerPrice', operator: '>', value: 0 }}
      />

      <GoodToKnowCards />

      <Slider />
    </>
  );
};

export default Home;
