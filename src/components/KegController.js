import React from "react";
import KegList from "./KegList";
import EditKeg from "./EditKeg";
import CreateKeg from "./CreateKeg";
import DetailsKeg from './DetailsKeg';

class KegController extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      formVisibleOnPage: false,
      masterList: [],
      selectedKeg: null,
      editing: false
    }
  }
  //event handlers
  handleEditingKegInList = (kegToEdit) => {
    const editedKegList = this.state.masterList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
      console.log(kegToEdit.Quantity)
    this.setState({
      masterList: editedKegList,
      editing: false,
      selectedKeg: kegToEdit
    });
  }
  handleEditClick = () => { 
    this.setState({editing: true});
  }

  handleDeletingKeg = (id) => { 
    const newMasterList = this.state.masterList
      .filter(keg => keg.id !== id);
    this.setState({
      masterList: newMasterList,
      selectedKeg: null
    });
  }

  handleClick = () => {  
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedKeg = (id) => { 
    const selectedKeg = this.state.masterList
      .filter(keg => keg.id === id)[0];
    this.setState({selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterList = this.state.masterList
      .concat(newKeg);
    this.setState({
      masterList: newMasterList,
      formVisibleOnPage: false
    });
  }

  handleChangeKegQuantityClick =  (kegToEdit) => {
    const editedKegCatalog = this.state.masterList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterList: editedKegCatalog,
    });
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) { 
      currentlyVisibleState = <EditKeg 
        keg = {this.state.selectedKeg} 
        onEditKeg =  {this.handleEditingKegInList}/>
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg !== null) { 
      
      currentlyVisibleState = <DetailsKeg 
        keg = {this.state.selectedKeg} 
        onClickingDelete = {this.handleDeletingKeg} 
        onClickingEdit = {this.handleEditClick}
        onChangeKegQuantityClick = {this.handleChangeKegQuantityClick} 
        />
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) { 
      currentlyVisibleState = <CreateKeg 
        onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {                                
      currentlyVisibleState = <KegList 
        Kegs={this.state.masterList} 
        onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    }
    
    return (
      <React.Fragment>
        {this.state.masterList[0] === undefined && 
          currentlyVisibleState.props.Kegs !== undefined ? "There are no kegs currently in the store" : ""}
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  } 
}


export default KegController;