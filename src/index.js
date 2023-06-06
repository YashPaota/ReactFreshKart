import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { AppProvider } from './services/AppContext';
import { AuthProvider } from './services/AuthProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthProvider>
    <AppProvider>
       <Header />
       <div className= "app-container">
       <App />
       </div>
    </AppProvider> 
    </AuthProvider>
  </BrowserRouter>
  </React.StrictMode>
);


