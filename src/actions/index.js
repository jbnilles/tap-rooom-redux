// export const addItem = (item) => {
//   return item.masterList;
// }
 

export const editKeg = (keg) => {
  
  return {
    type: 'EDIT_KEG',
    masterList: keg.masterList,
    editing: false,
    selectedKeg: keg.selectedKeg,
    formVisibleOnPage: keg.formVisibleOnPage,
    

  }
} 
export const addKeg = (keg) => {
  
  return {
    type: 'ADD_KEG',
    masterList: keg.masterList,
    editing: false,
    selectedKeg: keg.selectKeg,
    formVisibleOnPage: keg.formVisibleOnPage,
    

  }
} 
export const selectKeg = (keg) => {
  
  return {
    type: 'SELECT_KEG',
    selectedKeg: keg
  }
} 
export const startEditingKeg = (keg) => {
  
  return {
    type: 'START_EDIT_KEG',
    editing: keg
  }
}