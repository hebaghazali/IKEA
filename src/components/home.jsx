import React from 'react';
import Carousel from './carousel/carousel';
import ImageGallery from './imageGallery/imageGallery';
import SalesButtons from './salesButtons/salesButtons';

const Home = () => {
  return (
    <>
      <ImageGallery />

      <Carousel />

      <SalesButtons />
    </>
  );
};

export default Home;
