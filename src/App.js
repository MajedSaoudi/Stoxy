import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import Category from './Components/Category';
import Product from './Components/Product';
import Navbar from './Components/Navbar';
import { gsap } from "gsap";
import Lenis from '@studio-freight/lenis';
import Justin from './Components/Justin';
import Footer from './Components/Footer';

function App() {







useEffect(() => {
        const timeline = gsap.timeline();
  
  
        timeline.to(".video-container", {
          scale: 1.5,
          duration: 0,
          ease: "linear",
        });
        timeline.to(".video-container", {
          scale: 1,
          duration: 0.8,
          ease: "ease",
          delay:0
        });
 
        timeline.fromTo(
          ".Header",
          { opacity: 0, y: -300 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'linear' },
          "-=0.5",
             
        );
        
        
  
    }, []);


    useEffect(() => {
      const lenis = new Lenis({
        lerp: 0.08, 
        smooth: true, 
      });
    
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
    
      requestAnimationFrame(raf);
    
    
      return () => {

      };
    }, []);  








    




  return (
    <div className='App'>
     <Navbar />
    <Home />
    <Category />
    <Justin />
    <Footer />
    </div>
    
    );
}

export default App;

