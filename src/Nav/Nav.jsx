import React from 'react';
import "./Nav.css";
const {updateNavState} = this.props
export const Nav = () => {
  return (
    <nav>
      <p onClick={() => updateNavState("4x4")}>Four by Fours</p>
    </nav>
  )
}