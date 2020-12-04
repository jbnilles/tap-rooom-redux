export default (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_EDIT':
    return !state;
  case 'ADD_ITEM':
    return action.editing;
  default:
    return state;
  }
};