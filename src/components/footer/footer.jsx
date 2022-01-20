import React from 'react';
import FooterInfo from './footerInfo';
import FooterSocialLanguages from './footerSocialLanguages';

const Footer = () => {
  return (
    <>
      <footer class='footer'>
        <div class='row pb-5 mb-2'>
          <div class='col-3'>
            <ul>
              <li>
                <p>Useful links</p>
              </li>
              <li>
                <a href='#'>Catalogue and brochures</a>
              </li>
              <li>
                <a href='#'>IKEA shopping app</a>
              </li>
              <li>
                <a href='#'>Planning tools</a>
              </li>
              <li>
                <a href='#'>Stores</a>
              </li>
              <li>
                <a href='#'>IKEA food</a>
              </li>
              <li>
                <a href='#'>IKEA FAMILY</a>
              </li>
            </ul>
          </div>
          <div class='col-3'>
            <ul>
              <li>
                <p>Customer service</p>
              </li>
              <li>
                <a href='#'>About services</a>
              </li>
              <li>
                <a href='#'>About shopping</a>
              </li>
              <li>
                <a href='#'>Return policy</a>
              </li>
              <li>
                <a href='#'>Contact us</a>
              </li>
              <li>
                <a href='#'>FAQ</a>
              </li>
              <li>
                <a href='#'>Give us your feedback</a>
              </li>
            </ul>
          </div>
          <div class='col-3'>
            <ul>
              <li>
                <p>This is IKEA</p>
              </li>
              <li>
                <a href='#'>About IKEA</a>
              </li>
              <li>
                <a href='#'>Democratic design</a>
              </li>
              <li>
                <a href='#'>Sustainable everyday</a>
              </li>
              <li>
                <a href='#'>Community engagement</a>
              </li>
              <li>
                <a href='#'>Working at IKEA</a>
              </li>
            </ul>
          </div>
          <div class='col-3'>
            <ul>
              <li>
                <p>General information</p>
              </li>
              <li>
                <a href='#'>Newsroom</a>
              </li>
              <li>
                <a href='#'>Product recalls</a>
              </li>
              <li>
                <a href='#'>Product guides</a>
              </li>
            </ul>
          </div>
        </div>

        <FooterSocialLanguages />

        <FooterInfo />
      </footer>
    </>
  );
};

export default Footer;
