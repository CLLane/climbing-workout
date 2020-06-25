import React, { Component } from "react";
import "./App.css";
import {Nav} from "../Nav/Nav";
import {Training} from "../Training/Training"

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
      {navState === '4x4' && <Training type={this.state.navState}></Training>}
    </div>
    );
  }
}

export default App;
