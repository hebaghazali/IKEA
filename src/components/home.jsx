import React from 'react';
import Carousel from './carousel/carousel';
import ImageGallery from './imageGallery/imageGallery';
import SalesButtons from './salesButtons/salesButtons';
import Slider from './slider/slider';

const Home = () => {
  return (
    <>
      <ImageGallery />

      <Carousel />

      <SalesButtons />

      <Slider />
    </>
  );
};

export default Home;
