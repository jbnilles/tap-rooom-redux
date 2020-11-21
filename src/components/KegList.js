import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg'

function KegList(props) {

  <React.Fragment>
    {props.masterList.map((keg) => 
    <li>
      <Keg
        Name={keg.Name}
        Brand={keg.Brand}
        AlcoholContent={keg.AlcoholContnet}
        Price={keg.Price}
        id={keg.id}
        key={keg.id}
      />
    </li>)}
  </React.Fragment>
}

Keg.propTypes = {
  Items: PropTypes.array,
}


export default KegList;