export default (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_KEG':
    return action.selectedKeg;
  default:
    return state;
  }
};