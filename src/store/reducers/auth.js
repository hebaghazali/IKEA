const initial = {
  id:"",
  user: {
    Address: "",
    Email: "",
    FirstName: "",
    LastName: "",
    Password: "",
    PhoneNum: "",
    BirthDate:"",
    Gender:"",
    PrefferedStore:""
  },
};

export default function authReducer(state = initial, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload.user,
        id: action.payload.id
      };
    default:
      return state;
  }
}
