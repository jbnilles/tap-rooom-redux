// export const addItem = (item) => {
//   return item.masterList;
// }
 

export const editKeg = (keg) => {
  
  return {
    type: 'ADD_ITEM',
    masterList: keg.masterList,
    editing: false,
    selectedKeg: keg.kegToEdit,
    formVisibleOnPage: keg.formVisibleOnPage,
    

  }
} 