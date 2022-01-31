import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import CartCard from "../components/cards/cartCard";

const ShoppingCart = () => {
    const itemsCount=useSelector((state)=>state.cartProducts.totalAmountOfCartItems);
    const cartItems=useSelector((state)=>state.cartProducts.cartProducts);
    const totalOrderPrice=useSelector((state)=>state.cartProducts.totalPrice);
    
    // useEffecs
  return (
    <>
      <div className='fav-parent border-top pt-nav'>
        <div className='container'>
          <div className='shopping-header'>
            <h3>Shopping cart</h3>
            <h6>{itemsCount} items in shopping bag</h6>
            <div className='shopping-total-price'>
              <h6>Total For This Order incl. VAT</h6>
              <h4>EGP {totalOrderPrice}</h4>
            </div>
            <div className='shopping-total-price d-flex flex-row-reverse'>
              <button>Begin Checkout</button>
            </div>
          </div>
          <section className='row shopping-page'>
            <section className='col-12 left-shopping-page'>
                {
                    cartItems.map((item)=>{
                      // totalPriceHandler+=(item.productData.Price*item.PurchasedAmount);
                        return(
                          <>
                            {/* {
                              console.log(totalPrice)
                            } */}
                            <CartCard id={item.id} key={item.id} product={item.productData} purchasedQuantity={item.PurchasedAmount}/>
                          </>
                        )  
                    })
                }
            </section>
          </section>
        </div>
      </div>
    </>
  );
};
export default ShoppingCart;
