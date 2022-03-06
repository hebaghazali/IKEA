import React from 'react';
import Carousel from '../carousel/carousel';
import Carouselone from './carouselOne';
import { useTranslation } from 'react-i18next';
const LeftSide = (props) => {
  const { t } = useTranslation();
  const {
    Images,
    Description,
    Name,
    SubCategory,
    Width,
    Height,
    Thickness,
    Material,
    Color,
  } = props.prod.productData;
  // console.log(":::",Images);
  return (
    <>
      <div className='col-12 col-md-8 left mt-5'>
        <div className='top-imgs '>
          {Images?.map((image, index) => (
            <img src={image} width='48%' alt='product image' key={index} />
          ))}
        </div>

        <div className='gursken'>
          <b>
            <span>{Name}</span>
          </b>
          <p>
            {Description}
            {/* <br></br>
            wardrobe and of course a bed. Perfect for your first apartment or
            guest room. */}
          </p>
        </div>

        {/* <span>
          Article number<pre></pre>
          <span>001.020.65</span>
        </span> */}
        {/* <br></br> */}
        <hr />

        {/* details offcanva */}

        <div className='pro-detail'>
          <span>{t('ProductDetails')}</span>
          <button
            className='btn btn-primary'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasRight'
            aria-controls='offcanvasRight'
          >
            {' '}
            <i className='fas fa-arrow-right'></i>{' '}
          </button>

          <div
            className='offcanvas offcanvas-end'
            tabIndex='-1'
            id='offcanvasRight'
            aria-labelledby='offcanvasRightLabel'
          >
            <div className='offcanvas-header'>
              <h3 id='offcanvasRightLabel'>{t('ProductDetails')}</h3>
              <button
                type='button'
                className='btn-close text-reset'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>

            <div className='offcanvas-body'>
              <div>
                <h3>{Name}</h3>
              </div>
              {/* <img src={Images[0]} className='col-12' /> */}
              {Description && (
                <div>
                  <p>{Description}</p>
                </div>
              )}
              {Material && (
                <div>
                  <h4>
                    {t('Material')}: {Material}
                  </h4>
                </div>
              )}
              {Color && (
                <div>
                  <h4>
                    {t('Color')}:{Color}
                    {/* <input
                      className='input-field'
                      type='color'
                      disabled
                      value={Color}
                    /> */}
                  </h4>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* measurement offcanva */}

        {(Thickness || Width || Height) && (
          <>
            <hr />
            <div className='pro-detail'>
              <span>{t('Measurements')}</span>
              <button
                className='btn btn-primary'
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasRight2'
                aria-controls='offcanvasRight2'
              >
                {' '}
                <i className='fas fa-arrow-right'></i>{' '}
              </button>

              <div
                className='offcanvas offcanvas-end'
                tabIndex='-1'
                id='offcanvasRight2'
                aria-labelledby='offcanvasRight2Label'
              >
                <div className='offcanvas-header'>
                  <h3 id='offcanvasRight2Label'>{t('Measurements')}</h3>
                  <button
                    type='button'
                    className='btn-close text-reset'
                    data-bs-dismiss='offcanvas'
                    aria-label='Close'
                  ></button>
                </div>
                <div className='offcanvas-body'>
                  {Height && (
                    <div>
                      <h3>
                        {t('Height')}: {Height} {t('cm')}
                      </h3>
                    </div>
                  )}
                  {Width && (
                    <div>
                      <h3>
                        {t('Width')}: {Width} {t('cm')}
                      </h3>
                    </div>
                  )}
                  {Thickness && (
                    <div>
                      <h3>
                        {t('Thickness')}: {Thickness} {t('cm')}
                      </h3>
                    </div>
                  )}
                  <img src={Images[0]} className='col-12' />
                </div>
              </div>
            </div>
          </>
        )}

        <pre></pre>
        <hr />
        <pre></pre>
      </div>
      {/* <Carouselone /> */}
    </>
  );
};

export default LeftSide;
