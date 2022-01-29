let initialState = {
  favourits: [],
};

export default function favReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD-TO-FAV':
      return {
        ...state,
        favourits: [action.payload, ...state.favourits],
      };

    case 'REMOVE-FROM-FAV':
      return {
        ...state,
        favourits: state.favourits.filter((i) => i !== action.payload),
      };
    default:
      return state;
  }
}
