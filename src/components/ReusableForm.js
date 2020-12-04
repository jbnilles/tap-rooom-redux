import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  return (
    
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='Name'
          required
          defaultValue={props.Name ? props.Name : ""}
          placeholder='Enter a Name' />
          <input
          type='text'
          name='Brand'
          required
          defaultValue={props.Brand ? props.Brand : ""}
          placeholder='Enter a Brand' />
          <input
          type='number'
          min='0'
          step='.25'
          name='Price'
          defaultValue={props.Price ? props.Price : ""}
          placeholder='Enter a Price' />
          <input
          type='number'
          min='0'
          max='100'
          step='.01'
          name='AlcoholContent'
          defaultValue={props.AlcoholContent ? props.AlcoholContent : ""}
          placeholder='Alcohol %' />
          {!props.isNew ? 
          
          <input
          type='number'
          name='Quantity'
          defaultValue={props.Quantity ? props.Quantity : ""}
          placeholder='Enter a Quantity' /> : ""}
            
          
          
          <button type ='submit'>Submit</button>
          <br />
       
      </form>
    </React.Fragment>
    );
  }
  
  ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
  };
  
  export default ReusableForm;