import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductPrice = ({ Price, SalePrice }) => {
  const { t } = useTranslation();
  return (
    <div className='price'>
      {SalePrice && (
        <div className='line-through text-decoration-line-through'>
          <sup>{t('EGP')} {Price}</sup>
        </div>
      )}
      <div className='original-price'>
        <sup>{t('EGP')}</sup>
        <span>
          <strong> {SalePrice ? SalePrice : Price} </strong>
        </span>
      </div>
    </div>
  );
};

export default ProductPrice;
