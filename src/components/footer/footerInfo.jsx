import React from 'react';

const FooterInfo = () => {
  return (
    <>
      <div class='footer-info d-flex justify-content-between pb-3 pt-3 mt-4'>
        <div class='copyright mb-2'>
          <p>&copy; Inter IKEA Systems B.V 1999-2021</p>
        </div>
        <div class='legal-links'>
          <ul class='d-flex'>
            <li>
              <a href='#'>Privacy policy</a>
            </li>
            <li>
              <a href='#'>Cookie policy</a>
            </li>
            <li>
              <a href='#'>Terms and conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterInfo;
