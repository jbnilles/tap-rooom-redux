export default (state = false, action) => {
  switch (action.type) {
  case 'ADD_KEG':
    return action.editing;
  case 'EDIT_KEG':
    return action.editing;
  case 'START_EDIT_KEG':
    return action.editing;
  default:
    return state;
  }
};