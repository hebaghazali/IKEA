const initial = {
  user: {},
};

export default function authReducer(state = initial, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
