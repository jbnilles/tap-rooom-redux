export default (state = [], action) => {
  
  switch (action.type){
    case 'ADD_ITEM':
    return action.masterList;
      
    default:
    return state;
  }
};