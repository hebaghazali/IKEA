let initialState = {
  cartProducts: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD-TO-CART':
      return {
        ...state,
        cartProducts: [action.payload, ...state.cartProducts],
      };

    case 'REMOVE-FROM-CART':
      return {
        ...state,
        cartProducts: state.cartProducts.filter((i) => i.id !== action.payload),
      };
    default:
      return state;
  }
}
