import React from "react";
import KegList from "./KegList";
// import EditKeg from "./EditKeg";
// import CreateKeg from "./CreateKeg";
// import DeleteKeg from "./DeleteKeg";
// import DetailsKeg from './DetailsKeg';

class KegController extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      masterList: [{Name:'test', Quantity:12}],
    }
  }
  //event handlers
  
  render(){
    
    
    return (
      <React.Fragment>
        
        <KegList
          masterList={this.state.masterList}
          />
      </React.Fragment>
    );
  }
}


export default KegController;