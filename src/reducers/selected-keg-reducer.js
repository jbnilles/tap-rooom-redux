export default (state = null, action) => {
  console.log(action)
  switch (action.type) {
  case 'TOGGLE_KEG':
    return action.selectedKeg;
  // case 'ADD_KEG':
  //   return action.selectedKeg;
  case 'EDIT_KEG':
    return action.selectedKeg;
  case 'SELECT_KEG':
    return action.selectedKeg;
  default:
    return state;
  }
};