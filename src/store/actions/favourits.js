export const addToFav = (data) => {
  return {
    type: 'ADD-TO-FAV',
    payload: data,
  };
};

export const removeFromFav = (data) => {
  return {
    type: 'REMOVE-FROM-FAV',
    payload: data,
  };
};
