import React from "react";

import Navbar from "./Navbar";
import Header from "./header/Header";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <Header />
      </div>
    );
  }
}

export default App;
