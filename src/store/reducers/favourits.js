let initialState = {
  favourits: [],
  totalPrice: 0,
  totalAmountOfCartItems: 0,
};

export default function favReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_FAV':
      return {
        ...state,
        favourits: [action.payload, ...state.favourits],
      };

    case 'REMOVE_FROM_FAV':
      return {
        ...state,
        favourits: state.favourits.filter(i => i.id !== action.payload),
      };

      case 'SET_AMOUNT': {
        state.totalPrice = 0;
        state.totalAmountOfCartItems = 0;
        state.favourits.find((i, index) => {
          if (i.id === action.payload.id) {
            state.favourits[index].PurchasedAmount =
              action.payload.PurchasedAmount;
          }
  
          state.totalPrice +=
            state.favourits[index].PurchasedAmount *
            state.favourits[index].productData.Price;
  
          state.totalAmountOfCartItems +=
            state.favourits[index].PurchasedAmount;
        });
        return {
          ...state,
          favourits: state.favourits,
          totalPrice: state.totalPrice,
          totalAmountOfCartItems: state.totalAmountOfCartItems,
        };
      }
      default:
        return state;

  }
}
