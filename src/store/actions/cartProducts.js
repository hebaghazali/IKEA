export const addToCart = (data) => {
  return {
    type: 'ADD-TO-Cart',
    payload: data,
  };
};

export const removeFromCart = (data) => {
  return {
    type: 'REMOVE-FROM-CART',
    payload: data,
  };
};
