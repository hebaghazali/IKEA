export function changeUser(status) {
  return {
    type: 'SET_USER',
    payload: status,
  };
}
