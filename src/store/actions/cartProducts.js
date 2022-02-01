export const addToCart = (data) => {
  return {
    type: 'ADD-TO-CART',
    payload: data,
  };
};

export const removeFromCart = (data) => {
  return {
    type: 'REMOVE-FROM-CART',
    payload: data,
  };
};

export const setCartItemAmount = (data)=>{
  return{
    type: 'SET-AMOUNT',
    payload:data
  }
}
