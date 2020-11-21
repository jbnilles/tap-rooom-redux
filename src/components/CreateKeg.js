import React from 'react'
import PropTypes from 'prop-types'
import {v4} from 'uuid'
// import ReusableForm from "./ReusableForm";

function CreateKeg(props) {

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
          
      Brand: event.target.Brand.value, 
      AlcoholContent: event.target.AlcoholContent.value, 
      Price: event.target.Price.value, 
      Name: event.target.Name.value, 
      Quantity: event.target.Quantity.value === "" || event.target.Quantity.value < 0 ? 0 : event.target.Quantity.value, 
      id:v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = {handleNewKegFormSubmission}
        buttonText = "Add Item" />
    </React.Fragment>
  )
};

NewItemForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default CreateKeg;