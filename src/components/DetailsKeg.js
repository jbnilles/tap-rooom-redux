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
      Quantity: isSub ? (keg.Quantity === 0 ? 0 : keg.Quantity = parseInt(keg.Quantity) - dif) : keg.Quantity = parseInt(keg.Quantity) + dif, //  --keg.Quantity  ===  keg.Quantity = keg.Quantity - 1
      id: keg.id});
  }

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>Name: {keg.Name}</h3>
      <h3>Brand: {keg.Brand}</h3>
      <h3>Quantity: {quantity}</h3>
      <h5>Price: {keg.Price}</h5>
      <h5>Alcohol Percent: {keg.AlcoholContent}</h5>
      <button onClick = {()=> handleChangeKegQuantityButton(keg, true, 1) }>Buy</button> {/* reduce quantity */}
      {/*<button onClick = {()=> handleChangekegQuantityButton(keg, false, 10)  }>Stock</button>  increase quantity props.onStockClick*/}
      <button onClick = { props.onClickingEdit }>Update Keg</button>
      <button onClick = {() => onClickingDelete(keg.id) }>Close Keg</button>
      <hr/>
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