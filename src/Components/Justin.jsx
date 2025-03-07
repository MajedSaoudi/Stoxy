import './Justin.css'
import React, { useState } from 'react'
import ProductCard from './ProductCard';


function Justin() {

    const products = [
        {
          category: {
            creationAt: '2025-01-11T03:14:58.000Z',
            id: 1,
            image: 'https://i.imgur.com/QkIa5tT.jpeg',
            name: 'Clothes',
            updatedAt: '2025-01-11T03:14:58.000Z',
          },
          creationAt: '2025-01-11T03:14:58.000Z',
          description:
            'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
          id: 3,
          images: [
            'https://i.imgur.com/cHddUCu.jpeg',
            'https://i.imgur.com/CFOjAgK.jpeg',
            'https://i.imgur.com/wbIMMme.jpeg',
          ],
          price: 55,
          title: 'Classic Heather Gray Hoodie',
          updatedAt: '2025-01-11T03:14:58.000Z',
        },
        {
          category: {
            creationAt: '2025-01-11T03:14:58.000Z',
            id: 1,
            image: 'https://i.imgur.com/QkIa5tT.jpeg',
            name: 'Clothes',
            updatedAt: '2025-01-11T03:14:58.000Z',
          },
          creationAt: '2025-01-11T03:14:58.000Z',
          description:
            'Elevate your casual wardrobe with this timeless red baseball cap. Crafted from durable fabric, it features a comfortable fit with an adjustable strap at the back, ensuring one size fits all. Perfect for sunny days or adding a sporty touch to your outfit.',
          id: 11,
          images: [
            'https://i.imgur.com/cBuLvBi.jpeg',
            'https://i.imgur.com/N1GkCIR.jpeg',
            'https://i.imgur.com/kKc9A5p.jpeg',
          ],
          price: 20,
          title: 'Classic Red Baseball Cap',
          updatedAt: '2025-01-11T03:14:58.000Z',
        },
        {
          category: {
            creationAt: '2025-01-11T03:14:58.000Z',
            id: 5,
            image: 'https://i.imgur.com/BG8J0Fj.jpg',
            name: 'Miscellaneous',
            updatedAt: '2025-01-11T03:14:58.000Z',
          },
          creationAt: '2025-01-11T03:14:58.000Z',
          description:
            'Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires perfect for handling a variety of terrains. Designed for fun-seekers of all ages, this go-kart is an ideal choice for backyard racing or exploring local trails.',
          id: 46,
          images: [
            'https://i.imgur.com/Ex5x3IU.jpg',
            'https://i.imgur.com/z7wAQwe.jpg',
            'https://i.imgur.com/kc0Dj9S.jpg',
          ],
          price: 499,
          title: 'Sleek All-Terrain Go-Kart',
          updatedAt: '2025-01-11T03:14:58.000Z',
        },
        {
          category: {
            creationAt: '2025-01-11T03:14:58.000Z',
            id: 3,
            image: 'https://i.imgur.com/Qphac99.jpeg',
            name: 'Furniture',
            updatedAt: '2025-01-11T03:14:58.000Z',
          },
          creationAt: '2025-01-11T03:14:58.000Z',
          description:
            'Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.',
          id: 32,
          images: [
            'https://i.imgur.com/4lTaHfF.jpeg',
            'https://i.imgur.com/JktHE1C.jpeg',
            'https://i.imgur.com/cQeXQMi.jpeg',
          ],
          price: 600,
          title: 'Elegant Solid Wood Dining Table',
          updatedAt: '2025-01-11T03:14:58.000Z',
        },
        
      ];
 
 

     
  return (
    <div className='JustIn'>
        <div className='para'>
          <h1>This Just In</h1>
        </div>

        <div className='Home-container'>
            <div className='Just-in-container' >
                {products.map((Product,index)=>(
          <ProductCard index={index} product={Product} />
             
            ))}
                
           

            

            </div>
        </div>
    </div>
  )
}

export default Justin