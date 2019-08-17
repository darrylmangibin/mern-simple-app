import React from 'react';
import classses from './styles.module.css';

const Button = (props) => {
  return (
    <button
      className={classses.button}
      style={{ background: props.bg }}
      onClick={props.click}
    >
      {props.title}
    </button>
  )
}

export default Button;