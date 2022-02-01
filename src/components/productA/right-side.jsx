import React from 'react';

const RightSide = () => {
    return (
        <>
            
            <div className="col-12 col-md-4 right">
                <div className="head">
                 <b> GURSKEN</b>
                  <span className="span ms-5">
                    <sup>EGP</sup>
                    <b>2,500</b>
                  </span>
                </div>
                <p>
                Bedroom furniture, set of 5, light beige<pre>

                </pre>
                <span >Mattress and bedlinen are sold separately.</span>
                </p>

                <div id="right-btn ">
                  <button className="col-7 mb-3 btn btn-primary rounded-pill">Add to bag </button>
                </div>

                <p>
                    <span className="me-1">
                      <i className="fas fa-truck right-icon"></i>
                   </span>
                  <span> See delivery options at checkout <br></br>
                  <span className="ms-4">See options at checkout</span> 
                  </span>
                </p>

                <hr />

                <p>
                  <i className="fas fa-border-all right-icon me-2"></i>Check in-store
                  stock
                </p>
              </div>

        </>
        
    );
}

export default RightSide;
