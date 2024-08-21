import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContainerExample from './bootstrap/ContainerExample';
import AutoLayoutExample from './bootstrap/AutoLayoutExample';
import AutoLayoutSizingExample from './bootstrap/AutoLayoutSizingExample';
import VerticalExample from './bootstrap/VerticalExample';
import HorizontalExample from './bootstrap/HorizontalExample';
import BasicExample from './bootstrap/BasicExample';
import Game from './bootstrap/Game';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
