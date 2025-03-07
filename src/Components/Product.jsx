import React from 'react';
import './Product.css';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';



export function useProducts() {
  const [products, setProducts] = useState([]);
  const Base_URL = 'https://multimart-3e830-default-rtdb.europe-west1.firebasedatabase.app/Products.json';
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(Base_URL);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return products;
}



export default function Product(){
    
  const products = useProducts();



  return (
    <div className='Product'>
    {products.map((product) => {
      if(!product.images || product.images.length === 0){
        return null;
      } 
      return (
      <div key={product.id} className='Product-Container'>
        <div className='Product-Card'>
        <div><Link to={`/product/${product.id}`}><img src={product.images[0]} alt={product.title} /></Link></div>
        <p>{product.title}</p>
        <p>{product.price}$</p>
      </div>
      </div>
      );
    })}
  </div>
  )
}


