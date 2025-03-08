import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (

    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-container'>
          <div className='Stoxy'>
            <h1>STOXY</h1>
            <p>Your trusted </p>
            <p>fashion  companion</p>
          </div>
          <div className='Navigation-links'>
            <h1>NAVIGATION</h1>
            <Link to='/' onClick={() => {
              window.scrollTo(0, 0);
            }}><p>Home</p></Link>
            <Link to='/Shop/All' onClick={() => {
              window.scrollTo(0, 0);
            }}><p>Shop</p></Link>
            <Link to='/About' onClick={() => {
              window.scrollTo(0, 0);
            }}><p>About</p></Link>
            <Link to='/Contact' onClick={() => {
              window.scrollTo(0, 0);
            }}><p>Contact</p></Link>
          </div>
          <div className='Categories-links'>
            <h1>Categories</h1>
            <Link to='/Shop/Clothes' onClick={() => {
              window.scrollTo(0, 0);
            }}><p>Clothes</p></Link>
            <Link to="/Shop/Shoes" onClick={() => {
              window.scrollTo(0, 0);
            }}><p>Shoes</p></Link>
            <Link to="/Shop/Electronics" onClick={() => {
              window.scrollTo(0, 0);
            }}><p>Electronics</p></Link>
            <Link to="/Shop/Furniture" onClick={() => {
              window.scrollTo(0, 0);
            }}><p>Fourniture</p></Link>
            <Link to="/Shop/Miscellaneous" onClick={() => {
              window.scrollTo(0, 0);
            }}><p>Miscellaneous</p></Link>
          </div>
          <div className='Social-Media'>
            <a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={33} height={33}>
              <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
            </svg></a>

            <a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32}>
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg></a>
            <Link to=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32}>
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
            </svg></Link>
            <a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32}>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
            </svg></a>
          </div>
        </div>
      </div>
      <h3>All Rights Reserved By @Majed</h3>
    </div>


  )
}
