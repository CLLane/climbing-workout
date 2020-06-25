import React, { Component } from "react";
import "./App.css";
import {Nav} from "../Nav/Nav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      navState: null,
    };
  }

  updateNavState = (navSelection) => {
    this.setState({...state, navState: navSelection})
  }

  render() {
    return (
    <div>
      <h1>Bouldering Training</h1>
      <Nav updateNavState={this.updateNavState}></Nav>
    </div>
    );
  }
}

export default App;
