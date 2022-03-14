let initialState = {
    rating: [],
  };
  
  export default function rateReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_RATING':
        return {
          ...state,
          rating: [action.payload, ...state.rating],
        };
  
        
        default:
          return state;
  
    }
  }
  