import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import './stylesheets/styles.scss';
import App from './App';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
