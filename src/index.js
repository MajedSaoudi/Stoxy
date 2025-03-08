import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


import CartProvider from './Components/CartContext';





const Domain = process.env.REACT_APP_Domain;
const ClientId = process.env.REACT_APP_Clientid;
const redirectUri = window.location.origin + "/Stoxy";
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <Auth0Provider
      domain={Domain}
      clientId={ClientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      <BrowserRouter basename="/Stoxy"> 
      <App />
      </BrowserRouter>
    </Auth0Provider>
    </CartProvider>
  </React.StrictMode>
  
);