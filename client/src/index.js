import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Root from './Root';
import App from './App';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
)