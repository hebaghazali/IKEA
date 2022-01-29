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

      <Carousel />

      <SalesButtons />

      <Slider />

      <Carousel />

      <GoodToKnowCards />

      <Slider />
    </>
  );
};

export default Home;
