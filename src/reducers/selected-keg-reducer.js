export default (state = null, action) => {
  switch (action.type) {
  case 'TOGGLE_KEG':
    return action.selectedKeg;
  case 'ADD_ITEM':
    return action.selectedKeg;
  default:
    return state;
  }
};