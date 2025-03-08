import React, { useEffect, useRef } from "react";
import "./FPage.css";
import Navbar from "./Navbar";
import Productimageholder from '../Assets/images/product.jpg';
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
function FPage() {
  const { favouriteitems, RemoveFav } = useCart();
  return (
    <>
      <Navbar />

      <div className="favourite">
        <div className='path-container'>
          <div>
            <h1>Favourite</h1>
            <div className='path'>
              <Link to='/Stoxy'><p>Home</p></Link><span>&#x276F;</span>
              <p className='current-page'>Favourite</p>
            </div>
          </div>
        </div>
        <div className="favourite-container">
          <div className="favourite-Product-card-container">
            {favouriteitems.length > 0 ? (
              favouriteitems.map((item) => {
                if(!item.images || item.images.length === 0){
                  return null;
                }
                return (
                <div className="favourite-Card" key={item.id}>
                  <a href={`/Product/${item.id}`}>
                  <img src={item.images[0] ?? {Productimageholder}} alt={item.title} /> 
                  <h5>{item.title}</h5>
                  <p>£{item.price}</p>
                  </a>
                  <button className="close-btn" onClick={() => RemoveFav(item.id)}>Remove</button>
                </div>
                );
              })
            ) : (
              <div className="Choose-favourite">
                <h2>Choose Your favourite product</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default FPage