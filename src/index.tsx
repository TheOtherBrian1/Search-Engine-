import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {DarkModeContextProvider} from './Context';

ReactDOM.render(
  <React.StrictMode>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
