import React, { Component } from "react";
import "./App.css";
import {Nav} from "../Nav/Nav";
import {TrainingDetails} from "../TrainingDetails/TrainingDetails"

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
      {navState && <TrainingDetails type={this.state.navState}></TrainingDetails>}
    </div>
    );
  }
}

export default App;




