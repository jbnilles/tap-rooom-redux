export default (state = false, action) => {
  switch (action.type) {
  case 'ADD_KEG':
    return action.formVisibleOnPage;
  case 'EDIT_KEG':
    return action.formVisibleOnPage;
  case 'SHOW_FORM':
    return action.formVisibleOnPage;
  case 'UN_SELECT':
    return action.formVisibleOnPage;
  default:
    return state;
  }
};