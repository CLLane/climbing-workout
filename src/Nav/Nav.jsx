import React from 'react';
import "./Nav.css";

export const Nav = ({updateNavState} = this.props) => {
  return (
    <nav>
      <p onClick={() => updateNavState('Warm Up')}>Warm Up</p>
      <p onClick={() => updateNavState("4x4")}>Four by Fours</p>
      <p onClick={() => updateNavState('Injury Recovery')}>Injury Recovery</p>
    </nav>
  )
}