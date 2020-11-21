import React from "react";
import PropTypes from "prop-types";




function DetailsKeg(props){
  const { keg, onClickingDelete } = props;
  let quantity = keg.Quantity;
  if(parseInt(quantity) === 0) {
    quantity = 'Out Of Stock';
  }

  function handleChangeKegQuantityButton(keg, isSub, dif) {
    dif = parseInt(dif);
    props.onChangeKegQuantityClick({
      Name: keg.Name, 
      Quantity: isSub ? (keg.Quantity === 0 ? 0 : keg.Quantity = parseInt(keg.Quantity) - dif) : keg.Quantity = parseInt(keg.Quantity) + dif, 
      Price: keg.Price,
      AlcoholContent: keg.AlcoholContent,
      Brand: keg.Brand,
      id: keg.id});
  }
  const styleComponent = {
    color : keg.Quantity > 50 ? "green" : keg.Quantity > 10 ? "orange" : "red"
  }

  return (

    
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>Name: {keg.Name}</h3>
      <h3>Brand: {keg.Brand}</h3>
      <h2>{quantity <=10 ? "Almost Empty" : ""}</h2>
      <h3>Quantity: {quantity} Pints</h3>
      <h5 style={styleComponent}>Price: ${keg.Price}</h5>
      <h5>Alcohol Percent: {keg.AlcoholContent}%</h5>
      <button onClick = {()=> handleChangeKegQuantityButton(keg, true, 1) }>Buy</button> 
      <button onClick = { props.onClickingEdit }>Edit Keg</button>
      <button onClick = {() => onClickingDelete(keg.id) }>Remove Keg</button>
    </React.Fragment>
  );
}

DetailsKeg.propTypes = {
  keg: PropTypes.object,
  onChangeKegQuantityClick: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default DetailsKeg;