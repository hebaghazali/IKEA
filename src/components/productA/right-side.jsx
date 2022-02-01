import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './../../store/actions/cartProducts';

const RightSide = (props) => {
  const{Images,Price,Name,Color,Description,SubCategory}=props.prod.productData;
  const pId=props.prod.id;

  const { cartProducts } = useSelector((state) => state.cartProducts);

  let found = cartProducts?.find((i) => i.id === pId);
  const [added, setAdded] = useState(found ? true : false);
  const dispatch = useDispatch();
  const addToBag = () => {
    const{productData}=props.prod;
    dispatch( addToCart({ id: pId, productData }));
    setAdded(true);
  };

    return (
        <>
            <div className="col-12 col-md-4 right">
                <div className="head">
                 <b> {Name}</b>
                  <span className="span ms-5">
                    <sup>EGP</sup>
                    <b>{Price}</b>
                  </span>
                </div>
                <div>
                Bedroom furniture, set of 5, {Color}<pre>

                </pre>
                {SubCategory=='PH6KZW35bbvGRBdbQ8pe'&&
                   <span >Mattress and bedlinen are sold separately.</span>}
                </div>

                <div id="right-btn ">
                  <button className={`col-7 mb-3 btn btn-primary rounded-pill ${added&&'disabled'}`} onClick={addToBag}>
                  {!added ?"Add to bag" :"Added"}
                  </button>
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
