import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import State from './context/state/State'

ReactDOM.render(
  <BrowserRouter><State><App /></State></BrowserRouter>,     
  document.getElementById('root')
);


