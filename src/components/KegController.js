import React from "react";
import KegList from "./KegList";
// import EditKeg from "./EditKeg";
// import CreateKeg from "./CreateKeg";
// import DeleteKeg from "./DeleteKeg";
// import DetailsKeg from './DetailsKeg';

class KegController extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      formVisibleOnPage: false,
      itemCatalog: [],
      selectedItem: null,
      editing: false
    }
  }
  //event handlers
  handleEditingItemInList = (itemToEdit) => { // editing item in actual array
    const editedItemCatalog = this.state.itemCatalog
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      itemCatalog: editedItemCatalog,
      editing: false,
      selectedItem: null
    });
  }
  handleEditClick = () => { // sets items to edit
    this.setState({editing: true});
  }

  handleDeletingItem = (id) => { /// deletes item from array
    const newItemCatalog = this.state.itemCatalog
      .filter(item => item.id !== id);
    this.setState({
      itemCatalog: newItemCatalog,
      selectedItem: null
    });
  }

  handleClick = () => {  // sets state to normal
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedItem = (id) => { // view item in Detail
    const selectedItem = this.state.itemCatalog
      .filter(item => item.id === id)[0];
    this.setState({selectedItem});
  }

  handleAddingNewItemToList = (newItem) => { // adds new item to Array
    const newItemCatalog = this.state.itemCatalog
      .concat(newItem);
    this.setState({
      itemCatalog: newItemCatalog,
      formVisibleOnPage: false
    });
  }

  handleChangeItemQuantityClick =  (itemToEdit) => {
    const editedItemCatalog = this.state.itemCatalog
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      itemCatalog: editedItemCatalog,
    });
  }
  
  render(){
    
    
    return (
      <React.Fragment>
        
        <KegList
          masterList={this.state.masterList}
          />
      </React.Fragment>
    );
  }
}


export default KegController;