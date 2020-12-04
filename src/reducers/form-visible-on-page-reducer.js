export default (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_VISIBLE':
    return !state;
  case 'ADD_ITEM':
    return action.formVisibleOnPage;
  default:
    return state;
  }
};