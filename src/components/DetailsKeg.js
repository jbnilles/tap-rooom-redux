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
      <h3>Name: {keg.Name}<br />
      Brand: {keg.Brand}<br />
      Quantity: {quantity}</h3>
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