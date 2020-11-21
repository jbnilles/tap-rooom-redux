import React from "react";
import PropTypes from 'prop-types';

function Keg(props) {
  let quantity = props.Quantity;
  if(parseInt(quantity) === 0) {
    quantity = 'Out Of Stock';
  }
  
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <li>
          <h3>{props.Brand} : {props.Name}</h3>
          <h4>{quantity <=10 ? "Almost Empty" : ""}</h4>
          <h5>{quantity} Pints Remaining  | {props.AlcoholContent}% | ${props.Price}</h5>
        </li>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  Name: PropTypes.string.isRequired,
  Brand: PropTypes.string.isRequired,
  Quantity: PropTypes.number.isRequired,
  AlcoholContent: PropTypes.number.isRequired,
  Price: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;