import React, { Component } from 'react';
import Navbar from "./containers/Navbar/Navbar.js";
import Desserts from "./containers/Main/Desserts.js";
import Form from "./containers/Main/Form.js";
import Footer from "./containers/Footer/Footer.js";

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: "#E9B96E"}}>
        <Navbar/>
        <Desserts/>
        <Form/>
        <Footer/>
      </div>
    );
  }
}

export default App;
