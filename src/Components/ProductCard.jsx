import React, { useState, useRef } from 'react';

function ProductCard({ product }) {

 

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  
  if (!product || !product.images || product.images.length === 0) {
    return <div>No images available</div>;
  }
const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

const slideRight = () => {
    if (currentIndex < product.images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  console.log(product);
  console.log(product.images);
const handleTouchEnd = (e) => {
    if (!isSwiping) return;
    setIsSwiping(false);
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < product.images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  return (
    <div className="Just-in-card">
      <div
        className="Just-in-image"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <a href={`/product/${product.id}`}>
          <img
            src={product.images[currentIndex] ?? 'default-image.jpg'}
            alt={product.title}
            loading="lazy"
          />
        </a>
        <button className="left-slide" onClick={slideLeft}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="18"
            viewBox="0 0 7 13"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.62271e-07 6.49993L5.99993 0.5L6.85707 1.35713L0.857133 7.35707L2.62271e-07 6.49993Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.99998 12.5L2.62271e-07 6.49993L0.857182 5.64293L6.85712 11.6429L5.99998 12.5Z"
              fill="black"
            />
          </svg>
        </button>
        <button className="right-slide" onClick={slideRight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="18"
            viewBox="0 0 7 13"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 6.50007L1.00007 12.5L0.142934 11.6429L6.14287 5.64293L7 6.50007Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.00002 0.5L7 6.50007L6.14282 7.35707L0.142885 1.35713L1.00002 0.5Z"
              fill="black"
            />
          </svg>
        </button>
        <button className="New-btn">New</button>
      </div>
      <a href={`/product/${product.id}`}>
        <h2>{product.title}</h2>
      </a>
      <a href={`/Shop/${product.category.name}`}>
        <p>{product.category.name}</p>
      </a>
    </div>
  );
}

export default ProductCard;