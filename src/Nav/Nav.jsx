import React from 'react';
import "./Nav.css";

export const Nav = ({updateNavState} = this.props) => {
  return (
    <nav>
      <p onClick={() => updateNavState("4x4")}>Four by Fours</p>
      <p></p>
    </nav>
  )
}