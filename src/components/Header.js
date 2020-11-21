import React from 'react';

function Header () {
  const myStyledComponentStyles = {
    textAlign: 'center',
  }
  return (
    <React.Fragment>
      <div style ={myStyledComponentStyles}>
        <h2>The Tap Room</h2>
      </div>
      

    </React.Fragment>
  );
}
export default Header;