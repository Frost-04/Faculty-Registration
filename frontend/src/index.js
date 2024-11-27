import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
//import './styles/global.css'; // Import custom global styles
import App from './App';
import AuthService from './services/AuthService';

// Set the Authorization header for Axios
AuthService.setAuthHeader();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
