import React from "react";
import Carouselone from "./carouselOne";

const LeftSide = (props) => {
  const{Images,Description,Name}=props.prod.productData;
  // console.log(":::",Images);
  return (
    <>
      <div className="col-12 col-md-8 left mt-5">
        <div className="top-imgs ">
          {Images?.map((image,index)=><img
            src={image}
            width="48%"
            alt="product image"
            key={index}
          />)}
         </div>

        <Carouselone />

        
        <div  className="gursken">
          <b><span>{Name}</span></b>
          <p>
            {Description}
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
            tabIndex="-1"
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
              <div>
                A simple, firm foam mattress for use every night.
                <br></br>
                Fits LYCKSELE sofa-bed.<br></br>
                <p>Designer</p>
                <br></br>
                IKEA of Sweden
              </div>
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
            tabIndex="-1"
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
