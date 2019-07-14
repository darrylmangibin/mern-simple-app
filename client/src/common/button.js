import React from 'react';

const Button = ({ title, background, color, handleClick }) => {
  return (
    <button onClick={handleClick} style={{ background, color }} className="btn">{title}</button>
  )
} 

export default Button;