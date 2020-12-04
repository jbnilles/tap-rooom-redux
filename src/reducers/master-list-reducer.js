export default (state = [], action) => {
  
  switch (action.type){
    case 'ADD_KEG':
      return action.masterList;
    case 'EDIT_KEG':
      return action.masterList;
      
    default:
    return state;
  }
};