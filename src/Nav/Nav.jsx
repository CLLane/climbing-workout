import React from 'react';
import "./Nav.css";

export const Nav = (props) => {
  console.log('props', props)
  return (
    <nav>
      <p onClick={() => props.updateNavState("4x4")}>Four by Fours</p>
    </nav>
  )
}