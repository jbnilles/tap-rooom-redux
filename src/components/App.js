import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import KegController from "./KegController";

function App() {
  return (
    <React.Fragment>
      <Header />
      <KegController />
      <Footer />
    </React.Fragment>
  );
}

export default App;
