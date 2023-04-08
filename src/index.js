import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App";
import Header from "./components/Header";
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <div className="app-container">
    <App />
    </div>
    </BrowserRouter>
  </React.StrictMode>
);


