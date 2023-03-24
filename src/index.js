import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import App from './components/App';

const root = document.querySelector("#root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);