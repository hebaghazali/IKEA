import React from 'react';

const InvoiceAccordion = ({
  invoiceAccordionBtn,
  invoiceAccordionCollapse,
  purchasedItems,
  totalOrderPrice,
  handleInvoiceBack,
  handleInvoiceNext,
}) => {
  return (
    <div className='accordion-item'>
      <h2 className='accordion-header' id='flush-headingTwo'>
        <button
          className='accordion-button collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#flush-collapseTwo'
          aria-expanded='false'
          aria-controls='flush-collapseTwo'
          disabled
          ref={invoiceAccordionBtn}
        >
          Delivery Invoice
        </button>
      </h2>
      <div
        id='flush-collapseTwo'
        className='accordion-collapse collapse invoice'
        ref={invoiceAccordionCollapse}
        aria-labelledby='flush-headingTwo'
        data-bs-parent='#accordionFlushExample'
      >
        <div className='accordion-body'>
          {purchasedItems.map(item => {
            return (
              <div
                key={purchasedItems.indexOf(item)}
                className='purchased-item-card'
              >
                <div className='left'>
                  <img src={item.productData.Images[0]} alt='product' />
                  <div className='product-details ms-3'>
                    <p>
                      <span>{item.PurchasedAmount} x </span>
                      <strong>{item.productData.ProductName}</strong>
                    </p>
                    <p>
                      {item.productData.ProductName} {item.productData.Name}
                    </p>
                    <p>
                      <strong>EGP {item.productData.Price}</strong>
                    </p>
                  </div>
                </div>
                <div className='right'>
                  <p>
                    <strong>
                      EGP {item.PurchasedAmount * item.productData.Price}
                    </strong>
                  </p>
                </div>
              </div>
            );
          })}
          <p className='total-price'>
            Order Total: <strong>EGP {totalOrderPrice}</strong>
          </p>
        </div>

        <div className='buttons-group'>
          <button className='btn back-button ms-4' onClick={handleInvoiceBack}>
            BACK
          </button>

          <button
            className='btn submit-button me-4'
            onClick={handleInvoiceNext}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceAccordion;
