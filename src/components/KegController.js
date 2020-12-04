import React from "react";
import KegList from "./KegList";
import EditKeg from "./EditKeg";
import CreateKeg from "./CreateKeg";
import DetailsKeg from './DetailsKeg';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class KegController extends React.Component{
  
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     formVisibleOnPage: false,
  //     masterList: [],
  //     selectedKeg: null,
  //     editing: false
  //   }
  // }
  //event handlers
  handleEditingKegInList = (kegToEdit) => {
    const editedKegList = this.state.masterList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
      console.log(kegToEdit.Quantity)
      const { dispatch } = this.props;
    const action = a.editKeg({
      masterList: editedKegList,
      editing: false,
      selectedKeg: kegToEdit
    });
    dispatch(action);
  }
  handleEditClick = () => { 
    
    const { dispatch } = this.props;
      const action = a.startEditingKeg(true);
      dispatch(action);
    //this.setState({editing: true});
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
    if (this.props.selectedKeg != null) {
      const { dispatch } = this.props;
      const action = a.editKeg({
        masterList: this.props.masterList,
        editing: false,
        selectedKeg: null,
        formVisibleOnPage: false,
      });
      dispatch(action);
      // this.setState({
      //   formVisibleOnPage: false,
      //   selectedKeg: null,
      //   editing: false
      // });
    } else {
      // this.setState(prevState => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage,
      // }));
      const { dispatch } = this.props;
      const action = a.addKeg({
        masterList: this.props.masterList, 
        editing: false,
        selectedKeg: null,
        formVisibleOnPage: !this.props.formVisibleOnPage,
      });
      dispatch(action);
    }
    console.log(this.props)
  }

  handleChangingSelectedKeg = (id) => { 
    const selectedKeg = this.props.masterList
      .filter(keg => keg.id === id)[0];

    const { dispatch } = this.props;
    const action = a.selectKeg(selectedKeg);
    dispatch(action);
    // this.setState({selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterList = this.props.masterList
      .concat(newKeg);
      const { dispatch } = this.props;
      const action = a.addKeg({
        masterList: newMasterList, 
        editing: false,
        selectedKeg: null,
        formVisibleOnPage: false,
      });
      dispatch(action);
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
    console.log('props',this.props)
    if (this.props.editing) { 
      currentlyVisibleState = <EditKeg 
        keg = {this.props.selectedKeg} 
        onEditKeg =  {this.handleEditingKegInList}/>
      buttonText = "Return to Keg List";
    } else if (this.props.selectedKeg !== null) { 
      
      currentlyVisibleState = <DetailsKeg 
        keg = {this.props.selectedKeg} 
        onClickingDelete = {this.handleDeletingKeg} 
        onClickingEdit = {this.handleEditClick}
        onChangeKegQuantityClick = {this.handleChangeKegQuantityClick} 
        />
      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) { 
      currentlyVisibleState = <CreateKeg 
        onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {                                
      currentlyVisibleState = <KegList 
        Kegs={this.props.masterList} 
        onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    }
    
    return (
      <React.Fragment>
        {this.props.masterList[0] === undefined && 
          currentlyVisibleState.props.Kegs !== undefined ? "There are no kegs currently in the store" : ""}
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  } 
}
KegController.propTypes = {
masterList: PropTypes.array,
selectedKeg: PropTypes.object,
formVisibleOnPage: PropTypes.bool,
editing: PropTypes.bool,

}
const mapStateToProps = state => {
  return {
    masterList: state.masterList,
    selectedKeg: state.selectedKeg,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
  }
}
  KegController = connect(mapStateToProps)(KegController);
export default KegController;