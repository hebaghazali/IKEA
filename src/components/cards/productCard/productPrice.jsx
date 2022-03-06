import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductPrice = ({ Price, SalePrice }) => {
  const { t } = useTranslation();
  return (
    <div className='original-price'>
      <div className={`${SalePrice && 'line-through text-decoration-line-through' }`}>
        <sup>
          {t('EGP')} {Price}
        </sup>
      </div>

      {SalePrice && (
        <div className='price'>
          <sup>{t('EGP')}</sup>
          <span>
            <strong> {SalePrice} </strong>
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductPrice;
