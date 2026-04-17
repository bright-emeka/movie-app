import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the '/client' at the end
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);