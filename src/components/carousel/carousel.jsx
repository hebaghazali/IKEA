import React, { useEffect, useRef, useState } from 'react';
import CarouselCard from './carouselCard';
import { getCollection } from './../../services/firebase';

const Carousel = () => {
  const products = [
    {
      imageURL:
        'https://www.ikea.com/eg/en/images/products/idanaes-open-wardrobe-white__0898869_pe782672_s5.jpg?f=xl',
      highlight: 'Limited time offer',
      header: 'IDANÄS',
      description: 'Open wardrobe',
      lineThroughPrice: 'EGP 4,495',
      originalPrice: {
        currency: 'EGP',
        price: '2,995',
      },
    },
    {
      imageURL:
        'https://www.ikea.com/eg/en/images/products/finbraeken-duvet-cover-and-pillowcase-floral-patterned__0932932_pe791687_s5.jpg?f=xl',
      highlight: 'Limited time offer',
      header: 'FINBRÄKEN',
      description: 'Duvet cover and pillowcase',
      lineThroughPrice: 'EGP 999',
      originalPrice: {
        currency: 'EGP',
        price: '299',
      },
    },
    {
      imageURL:
        'https://www.ikea.com/eg/en/images/products/milsbo-glass-door-cabinet-white__0914355_pe783961_s5.jpg?f=xl',
      highlight: 'Limited time offer',
      header: 'MILSBO',
      description: 'Glass-door cabinet',
      lineThroughPrice: 'EGP 4,995',
      originalPrice: {
        currency: 'EGP',
        price: '3,495',
      },
    },
    {
      imageURL:
        'https://www.ikea.com/eg/en/images/products/pruta-food-container-transparent-blue__0916190_pe785021_s5.jpg?f=xl',
      highlight: 'Limited time offer',
      header: 'PRUTA',
      description: 'Food container',
      lineThroughPrice: 'EGP 19/3 pack',
      originalPrice: {
        currency: 'EGP',
        packs: '12',
        perPack: '3',
      },
    },
    {
      imageURL:
        'https://www.ikea.com/eg/en/images/products/risatorp-trolley-white__0736868_pe740789_s5.jpg?f=xl',
      highlight: 'Limited time offer',
      header: 'RISATORP',
      description: 'Trolley',
      lineThroughPrice: 'EGP 1,995',
      originalPrice: {
        currency: 'EGP',
        price: '1,495',
      },
    },
    {
      imageURL:
        'https://www.ikea.com/eg/en/images/products/fatalig-vase-cat-off-white__0990315_pe818847_s5.jpg?f=xl',
      highlight: 'Limited time offer',
      header: 'FÅTALIG',
      description: 'Vase',
      lineThroughPrice: 'EGP 149',
      originalPrice: {
        currency: 'EGP',
        price: '99',
      },
    },
    {
      imageURL:
        'https://www.ikea.com/eg/en/images/products/vedbo-armchair-gunnared-dark-grey__0512767_pe638683_s5.jpg?f=xl',
      highlight: 'Limited time offer',
      header: 'VEDBO',
      description: 'Armchair',
      lineThroughPrice: 'EGP 4,995',
      originalPrice: {
        currency: 'EGP',
        price: '3,495',
      },
    },
    {
      imageURL:
        'https://www.ikea.com/eg/en/images/products/levla-wall-organiser-dark-brown__1012716_pe828987_s5.jpg?f=xl',
      highlight: 'Limited time offer',
      header: 'LEVLA',
      description: 'Wall organiser',
      lineThroughPrice: 'EGP 229',
      originalPrice: {
        currency: 'EGP',
        price: '129',
      },
    },
    {
      imageURL:
        'https://www.ikea.com/eg/en/images/products/tustna-mattress-pad-white__0636884_pe698073_s5.jpg?f=xl',
      highlight: 'Limited time offer',
      header: 'TUSTNA',
      description: 'Mattress pad',
      lineThroughPrice: 'EGP 4,495',
      originalPrice: {
        currency: 'EGP',
        price: '1,995',
      },
    },
    {
      imageURL:
        'https://www.ikea.com/eg/en/images/products/ebbemala-table-lamp-brass-colour__0718163_pe731455_s5.jpg?f=xl',
      highlight: 'Limited time offer',
      header: 'EBBEMÅLA',
      description: 'Table lamp',
      lineThroughPrice: 'EGP 1,199',
      originalPrice: {
        currency: 'EGP',
        price: '899',
      },
    },
    {
      imageURL:
        'https://www.ikea.com/eg/en/images/products/smastad-pull-out-storage-unit-white__0913321_pe783458_s5.jpg?f=xl',
      highlight: 'Limited time offer',
      header: 'SMÅSTAD',
      description: 'Pull-out storage unit',
      lineThroughPrice: 'EGP 4,000',
      originalPrice: {
        currency: 'EGP',
        price: '2,500',
      },
    },
    {
      imageURL:
        'https://www.ikea.com/eg/en/images/products/voerda-filleting-knife-black__0710390_pe727518_s5.jpg?f=xl',
      highlight: 'Limited time offer',
      header: 'VÖRDA',
      description: 'Filleting knife',
      lineThroughPrice: 'EGP 229',
      originalPrice: {
        currency: 'EGP',
        price: '129',
      },
    },
  ];

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // getCollection('Products', ['SubCategory', '==', `PH6KZW35bbvGRBdbQ8pe`]);
  //   getCollection('Products')
  //     .then(res => {
  //       console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>:', res);
  //       setProducts(res);
  //     })
  //     .catch(err => console.log('error :', err));
  // }, []);

  const carouselBody = useRef(null);

  const scrollCarousel = sign => {
    carouselBody.current.scrollBy({
      left: sign === 'positive' ? 1000 : -1000,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className='carousel'>
        <button
          className={`dark-btn left-chevron`}
          onClick={() => {
            scrollCarousel('negative');
          }}
        >
          <i className={`fas fa-chevron-left`}></i>
        </button>

        <div className='carousel-body p-0 pb-2 mb-5' ref={carouselBody}>
          <div className='row flex-nowrap'>
            <CarouselCard products={products} />
          </div>
        </div>

        <button
          className={`dark-btn right-chevron`}
          onClick={() => {
            scrollCarousel('positive');
          }}
        >
          <i className={`fas fa-chevron-right`}></i>
        </button>
      </div>
    </>
  );
};

export default Carousel;
