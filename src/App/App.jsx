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
    this.setState({...this.state, navState: navSelection})
    // console.log('this.state :>> ', this.state);
  }

  render() {
    const {navState} = this.state;
    return (
    <div>
      <Nav updateNavState={this.updateNavState}></Nav>
      {navState === '4x4' && <h1>{navState}</h1>}
    </div>
    );
  }
}

export default App;
