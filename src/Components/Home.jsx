import React, { useEffect, useState, useRef, useCallback, Suspense } from 'react';
import './Home.css';
import Video from '../Assets/images/H-Video.webm';
import { Link } from 'react-router-dom';

const ScrollVelocity = React.lazy(() => import('./ScrollVelocity'));
const SplitText = React.lazy(() => import('./SplitText'));

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = useCallback(() => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  return (
    <>
      <div className='Home'>
        <div className='Home-Container'>
          <div className='Home-par-container'>
            <div className='Home-par'>
              <Suspense fallback={<div></div>}>
                <SplitText
                  text="Transform Your Home & Style with Stoxy"
                  className="Heading"
                  delay={50}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="50px"
                />
              </Suspense>
              <div className='Sub-heading'>
              <h3>Discover curated fashion and home decor blending elegance with functionality. Shop our latest collections to elevate your space with timeless pieces.</h3>
              </div>
              <Link to='/Shop/All'>
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
          <div className='video-container'>
            <Link to='/Shop/All'>
              <video
                autoPlay
                ref={videoRef}
                muted
                loop
                id="myVideo"
                onLoadedData={() => setIsLoaded(true)}
                preload="metadata"
                playsInline
                poster="/path/to/poster-image.jpg"
                className="svelte-gv32my"
              >
                <source src={Video} type="video/mp4" />
              </video>
              <div className='video-des'>
                <div className='video-par'>
                  <div className='arrow'>
                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="arrow svelte-mkzi11 left">
                      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M20,12l-8,8-1.41-1.41L16.17,13H4V11H16.17l-5.59-5.59L12,4Z"></path>
                    </svg>
                  </div>
                  <div className='Shop-now'>
                    {null}
                    <h1>Discover fashion and home decor that inspires</h1>
                  </div>
                </div>
              </div>
            </Link>
            <button className='PausePlay-btn' onClick={togglePlayPause}>
              {isPlaying ? '❚❚' : '▶'}
            </button>
          </div>
        </div>
      </div>
      <div className='Scroll-Velocity-container'>
        <Suspense className='suspence' fallback={<div>Loading...</div>}>
          <ScrollVelocity
            texts={['Stoxy Clothing Shoes Fourniture Electronics', 'Stoxy Clothing Shoes Fourniture Electronics']}
            className="custom-scroll-text"
          />
        </Suspense>
      </div>
    </>
  );
}