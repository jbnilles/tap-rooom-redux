import React from "react";
import PropTypes from 'prop-types';

function Keg(props) {
  let quantity = props.Quantity;
  if(parseInt(quantity) === 0) {
    quantity = 'Out Of Stock';
  }
  
  return (
    <React.Fragment>
      {/* <div onClick = {() => props.whenItemClicked(props.id)}> */}
        <li>{props.Name} : {quantity}</li>
      {/* </div> */}
    </React.Fragment>
  );
}

Keg.propTypes = {
  Name: PropTypes.string.isRequired,
  // Description: PropTypes.string,
  Quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  // whenItemClicked: PropTypes.func
};

export default Keg;