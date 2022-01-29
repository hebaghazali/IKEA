import React from 'react';

const ImageGallery = () => {
  const images = [
    'https://www.ikea.com/images/49/b4/49b4ae9edac2dacb67929ff5ececd994.jpg?f=xl',
    [
      {
        imageURL:
          'https://www.ikea.com/ext/ingkadam/m/6fe00db2519c240f/original/PH180057.jpg?f=xs',
        size: 'short',
      },

      {
        imageURL:
          'https://www.ikea.com/ext/ingkadam/m/1a58fe57019783c0/original/PH171011.jpg?f=xs',
        size: 'long',
      },
    ],
    [
      {
        imageURL:
          'https://www.ikea.com/images/65/38/65383e77617de45341e1e27b2c38ad67.jpg?f=xs',
        size: 'long',
      },

      {
        imageURL:
          'https://www.ikea.com/images/45/d9/45d9cfbab2bad50883e69eaf6e9e7bfa.jpg?f=xs',
        size: 'short',
      },
    ],
  ];

  return (
    <div class='border-top mt-nav pt-nav pb-5'>
      <div class='image-gallery row g-4'>
        {images.map(imageCol => {
          return (
            <>
              {images.indexOf(imageCol) === 0 ? (
                <div class='col-12 col-lg-6'>
                  <img src={imageCol} alt='sale' />
                </div>
              ) : (
                <div class='image-column col-6 col-lg-3'>
                  {imageCol.map(image => {
                    return (
                      <img
                        class={`${image.size}-img`}
                        src={image.imageURL}
                        alt=''
                      />
                    );
                  })}
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
