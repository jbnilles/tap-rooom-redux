export default (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_VISIBLE':
    return !state;
  case 'ADD_KEG':
    return action.formVisibleOnPage;
  case 'EDIT_KEG':
    return action.formVisibleOnPage;
  default:
    return state;
  }
};