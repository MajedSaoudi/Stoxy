import React, { useState, useEffect } from 'react';

import Home from './Home';
import Category from './Category';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { gsap } from "gsap";
import Lenis from '@studio-freight/lenis';
import Justin from './Justin';
import Footer from './Footer';

function HomePage() {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 802);

    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 802);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const location = useLocation();



    useEffect(() => {
        if (isDesktop) {
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
            delay: 0,
          });
    
          timeline.fromTo(
            ".Header",
            { opacity: 0, y: -300 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'linear' },
            "-=0.5"
          );
    
          return () => {
            timeline.kill();
          };
        }
      }, [isDesktop]);


    useEffect(() => {
      const lenis = new Lenis({
        lerp: 0.07, 
        smooth: true, 
      });
    
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
    
      requestAnimationFrame(raf);
      
        const handleClick = () => {
            
           
                lenis.stop(); 
          
            setTimeout(() => {
                lenis.start();
              }, 100);
          };
          document.addEventListener('click', handleClick);
      
     
  
      
    
      return () => {
        if (lenis) {
            lenis.destroy(); 
          }
      };
    }, [location.pathname]);  








    




  return (
    <div className='HomePage'>
     <Navbar />
    <Home />
    <Category />
    <Justin />
    <Footer />
    </div>
    
    );
}

export default HomePage;

