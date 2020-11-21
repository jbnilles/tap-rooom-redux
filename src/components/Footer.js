import React from 'react';

function Footer () {
  const myStyledComponentStyles = {
    textAlign: 'center',
    
  }
  return (
    <React.Fragment>
      <div style = {myStyledComponentStyles}>
        <hr/>
        <h6>Project created to the specification of Epicodus React Fundamentals Independent Project</h6>
      </div>
    </React.Fragment>
  );
}
export default Footer;