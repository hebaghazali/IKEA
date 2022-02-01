import React from "react";
import Carouselone from "./carouselOne";

const LeftSide = () => {
  return (
    <>
      <div className="col-12 col-md-8 left mt-5">
        <div className="top-imgs ">
          <img
            src="https://www.ikea.com/eg/en/images/products/gursken-bedroom-furniture-set-of-5-light-beige__0939777_pe794666_s5.jpg?f=m"
            width="48%"
            alt=""
          />
          <img
            src="https://www.ikea.com/eg/en/images/products/gursken-bedroom-furniture-set-of-5-light-beige__0970603_pe811129_s5.jpg?f=xs"
            width="48%"
            alt=""
          />
          <img
            src="https://www.ikea.com/eg/en/images/products/gursken-bedroom-furniture-set-of-5-light-beige__0939784_pe794701_s5.jpg?f=xs"
            width="48%"
            alt=""
          />
          <img
            src="https://www.ikea.com/eg/en/images/products/gursken-bedroom-furniture-set-of-5-light-beige__0946539_pe798134_s5.jpg?f=xs"
            width="48%"
            alt=""
          />
        </div>

        <Carouselone />

        
        <div  className="gursken">
          <b><span>GURSKEN</span></b>
          <p>
            Furnish an entire bedroom quickly and easily with GURSKEN.<br></br>
            Everything you need is here – a bedside table, chest of drawers,
            <br></br>
            wardrobe and of course a bed. Perfect for your first apartment or
            guest room.
          </p>
        </div>

        <span>
          Article number<pre></pre>
          <span>001.020.65</span>
        </span>
        <br></br>
        <hr />

        <div className="pro-detail">
          <span>Product details</span>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            {" "}
            <i className="fas fa-arrow-right"></i>{" "}
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Product details</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <p>
                A simple, firm foam mattress for use every night.
                <br></br>
                Fits LYCKSELE sofa-bed.<br></br>
                <p>Designer</p>
                <br></br>
                IKEA of Sweden
              </p>
              <span className="out-span">
                Article number<pre></pre>
                <span className="in-span">001.020.65</span>
              </span>
            </div>
          </div>
        </div>
        <hr />

        <div className="pro-detail">
          <span>Measurements</span>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            {" "}
            <i className="fas fa-arrow-right"></i>{" "}
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Measurements</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <p>
                Mattress length: 188 cm<br></br>
                Mattress width: 140 cm<br></br>
                Mattress thickness: 10 cm
              </p>
              <img src="./assets/images/nyhamn-foam-mattress-firm__0729225_pe736800_s5.webp" />
            </div>
          </div>
        </div>

        <pre></pre>
        <hr />
        <pre></pre>
      </div>
    </>
  );
};

export default LeftSide;
