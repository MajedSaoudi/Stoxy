import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import ProductDetail from './Components/ProductDetail';
import reportWebVitals from './reportWebVitals';
import About from './Components/About';

import CartProvider from './Components/CartContext';
import FPage from './Components/FPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Shop } from './Components/Shop';
import Contact from './Components/Contact';

const router = createBrowserRouter([
  {
    path: "/Stoxy",
    element: (
      
        <App />  
    
    ),
  },
  {
    path: "/Product/:id",
    element: (
     
        <ProductDetail />  
   
    ),
  },
  {
    path: "/Shop/:categoryName",
    element: (
        <Shop />  
    ),
  },
   {
    path: "/Favourite",
    element : (
      <FPage />
    ),
   },
   {
    path: "/About",
    element : (
      <About />
    ),
   },
   {
    path: "/Contact",
    element: (
     
        <Contact />  
   
    ),
  },
]);

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
      <RouterProvider router={router} basename='/Stoxy'/>
    </Auth0Provider>
    </CartProvider>
  </React.StrictMode>
  
);