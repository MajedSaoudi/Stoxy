import React, { useRef, useState, useEffect } from 'react';


import './Category.css';

import { Link } from 'react-router-dom';


export const User_Uid = process.env.User_Uid;


export default function Category() {


  function handleOpenPage() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const Base_URL = 'https://multimart-3e830-default-rtdb.europe-west1.firebasedatabase.app/Categories.json';
  const [categories, setCategories] = useState([]);
  async function fetching() {
    const response = await fetch(Base_URL);
    const data = await response.json();
    setCategories(data)
  }



  useEffect(() => {
    fetching();
  }, [])


  return (
  

   
      <div className='Category'>


        <div className='para'>
          <h1>Featured Categories</h1>
        </div>
        <div className='Home-container'>
          <div className='category-images-container'>

            {categories.map((category) => (
              <>
                <div key={category.name} className='category-tab'>
                  <div className='category-images' key={category.id}>
                  <a href={`/Shop/${category.name}`} >
                    <img src={category.image} loading="lazy"/>

                    <div className='category-names' >
                      <h1>{category.name}</h1>
                      <h1>&gt;</h1>
                    </div></a>
                  </div>
                </div>
              </>
            ))}
          </div>

        </div>
      </div>
  );
}
