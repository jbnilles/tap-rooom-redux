export default (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_VISIBLE':
    return !state;
  default:
    return state;
  }
};