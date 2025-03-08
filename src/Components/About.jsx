import React from 'react'
import './About.css'
import Navbar from'./Navbar';
import { Link } from 'react-router-dom'
import Footer from './Footer';
function About() {
  return (
    <>
    <Navbar backgroundColor={'white'}/>
    <div className='About'>    
        
        <div className='path-container'>
        <div>
          <h1>About Us</h1>
          <div className='path'>
            <Link to='/'><p>Home</p></Link><span>&#x276F;</span>
            <p className='current-page'>About</p>
          </div>
        </div>
      </div>
     

      
        <div className='About-img'>
             <img src='https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Assorted color clothes lot hanging on wooden wall rack"/>
          </div>

         <div className='feature-section'>
          <div className='features-container'>
            <div className='feature-card'>
               <h2>
               SHOP ONLINE
               </h2>
               <p>
               Explore a vast collection of premium clothing from the comfort of your home.
               </p>
            </div>
            <div className='feature-card'>
               <h2>
               FREE SHIPPING
               </h2>
               <p>
               Enjoy the convenience of free shipping on all orders, nationwide.
               </p>
            </div>
            <div className='feature-card'>
               <h2>
               RETURN POLICY
               </h2>
               <p>
               Your satisfaction is our priority. Return any product you are not satisfied with.
               </p>
            </div>
            <div className='feature-card'>
               <h2>
               PAYMENT METHODS
               </h2>
               <p>
               Choose from a variety of secure payment methods to complete your transactions with ease.
               </p>
            </div>
          </div>
          </div>



          <div className='about-par'>
            <h4>
            At the heart of Stoxy lies a distinctive philosophy that transcends trends and embraces the essence of enduring style. Our collections are a harmonious blend of sophistication, versatility, and modernity, carefully curated to enhance your personal expression. We believe that fashion should empower, inspire, and reflect the unique narrative of every individual. Stoxy is not just about clothing; it's about embracing a lifestyle that embraces the artistry of fashion and the poetry of self-expression.
            </h4>
          </div>
    </div>
    <Footer />
    </>
  )
}

export default About