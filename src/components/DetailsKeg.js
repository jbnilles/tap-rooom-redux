import React from "react";
import PropTypes from "prop-types";




function DetailsKeg(props){
  const { keg, onClickingDelete } = props;
  let quantity = item.Quantity;
  if(parseInt(quantity) === 0) {
    quantity = 'Out Of Stock';
  }

  function handleChangeKegQuantityButton(keg, isSub, dif) {
    dif = parseInt(dif);
    props.onChangeKegQuantityClick({
      Name: keg.Name, 
      Description: keg.Description, 
      Quantity: isSub ? (keg.Quantity === 0 ? 0 : keg.Quantity = parseInt(item.Quantity) - dif) : keg.Quantity = parseInt(keg.Quantity) + dif, //  --item.Quantity  ===  item.Quantity = item.Quantity - 1
      id: keg.id});
  }

  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      <h3>Name: {keg.Name}<br />
      Brand: {keg.Brand}<br />
      Quantity: {quantity}</h3>
      <button onClick = {()=> handleChangekegQuantityButton(item, true, 1) }>Buy</button> {/* reduce quantity */}
      {/*<button onClick = {()=> handleChangekegQuantityButton(item, false, 10)  }>Stock</button>  increase quantity props.onStockClick*/}
      <button onClick = { props.onClickingEdit }>Update Item</button>
      <button onClick = {() => onClickingDelete(item.id) }>Close Item</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onChangeItemQuantityClick: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default DetailsKeg;