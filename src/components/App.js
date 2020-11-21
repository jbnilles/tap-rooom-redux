import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import KegController from "./KegController";

function App() {
  return (
    <React.Fragment>
      <div class="contain">
        <div id="header">
          {/* <Header /> */}
        </div>
        <div id="body">
          <KegController />
        </div>
        <div id="footer">
          {/* <Footer /> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
