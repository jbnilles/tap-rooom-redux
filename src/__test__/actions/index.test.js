import * as actions from './../../actions';
const keg = {
  masterList: {},
  editing: false,
  selectedKeg: null,
  formVisibleOnPage: false,
}
describe('Tap Room actions', () => {
  it('editKeg should create Edit_keg action', () => {
    expect(actions.editKeg(keg)).toEqual(
      {
        type: 'EDIT_KEG',
        masterList: keg.masterList,
        editing: keg.editing,
        selectedKeg: keg.selectedKeg,
        formVisibleOnPage: keg.formVisibleOnPage,
      }
    );
  });
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg(keg)).toEqual(
      {
        type: 'ADD_KEG',
        masterList: keg.masterList,
        editing: keg.editing,
        selectedKeg: keg.selectedKeg,
        formVisibleOnPage: keg.formVisibleOnPage,
      }
    );
  });
  it('deleteItem should create DELETE_ITEM action', () => {
    expect(actions.editKeg(keg)).toEqual(
      {
        type: 'EDIT_KEG',
        masterList: keg.masterList,
        editing: keg.editing,
        selectedKeg: keg.selectedKeg,
        formVisibleOnPage: keg.formVisibleOnPage,
      }
    );
  });
  it('deleteItem should create DELETE_ITEM action', () => {
    expect(actions.editKeg(keg)).toEqual(
      {
        type: 'EDIT_KEG',
        masterList: keg.masterList,
        editing: keg.editing,
        selectedKeg: keg.selectedKeg,
        formVisibleOnPage: keg.formVisibleOnPage,
      }
    );
  });
  it('deleteItem should create DELETE_ITEM action', () => {
    expect(actions.editKeg(keg)).toEqual(
      {
        type: 'EDIT_KEG',
        masterList: keg.masterList,
        editing: keg.editing,
        selectedKeg: keg.selectedKeg,
        formVisibleOnPage: keg.formVisibleOnPage,
      }
    );
  });
});


// export const addItem = (item) => {
//   return item.masterList;
// }
 


export const addKeg = (keg) => {
  
  return {
    type: 'ADD_KEG',
    masterList: keg.masterList,
    editing: false,
    selectedKeg: keg.selectedKeg,
    formVisibleOnPage: keg.formVisibleOnPage,
  }
} 
export const selectKeg = (keg) => {
  
  return {
    type: 'SELECT_KEG',
    selectedKeg: keg
  }
} 
export const unSelect = (keg) => {
  
  return {
    type: 'UN_SELECT',
    selectedKeg: keg.selectedKeg,
    formVisibleOnPage: keg.formVisibleOnPage,
  }
} 
export const startEditingKeg = (keg) => {
  
  return {
    type: 'START_EDIT_KEG',
    editing: keg
  }
}
export const showForm = (keg) => {
  
  return {
    type: 'SHOW_FORM',
    formVisibleOnPage: keg
  }
}