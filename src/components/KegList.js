import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg'

function KegList(props) {


  return (
  <React.Fragment>
    <ul>
      {props.Kegs.map((keg) => 
        <Keg
          whenKegClicked = {props.onKegSelection}
          Name={keg.Name}
          Brand={keg.Brand}
          AlcoholContent={keg.AlcoholContnet}
          Quantity={keg.Quantity}
          Price={keg.Price}
          id={keg.id}
          key={keg.id}
        />
      )}
    </ul>
  </React.Fragment>)
}

Keg.propTypes = {
  Items: PropTypes.array,
}


export default KegList;