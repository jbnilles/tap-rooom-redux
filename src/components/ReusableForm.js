import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  return (
    
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='Name'
          defaultValue={props.Name ? props.Name : ""}
          placeholder='Enter a Name' />
          <input
          type='text'
          name='Brand'
          defaultValue={props.Brand ? props.Brand : ""}
          placeholder='Enter a Brand' />
          <input
          type='text'
          name='Price'
          defaultValue={props.Price ? props.Price : ""}
          placeholder='Enter a Price' />
          <input
          type='text'
          name='AlcoholContent'
          defaultValue={props.AlcoholContent ? props.AlcoholContent : ""}
          placeholder='Enter a AlcoholContent' />
          
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