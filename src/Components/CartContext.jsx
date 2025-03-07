import React from 'react'
import { useState, createContext,useContext,useEffect } from 'react'
 
const CartContext = createContext();
 
function CartProvider({children}) {

  const [cartcontent,setCartContent] = useState([]);
  const [cartcount,setCartCount] = useState(0);
  const [favouriteitems,setFavouriteItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartcontent')) || [];
    const storedfav = JSON.parse(localStorage.getItem('favouriteitems')) || [];
    setCartContent(storedCart);
    setCartCount(storedCart.length);
    setFavouriteItems(storedfav);
  }, []);
  
  useEffect(() => {
    
    localStorage.setItem('cartcontent', JSON.stringify(cartcontent));
    localStorage.setItem('favouriteitems', JSON.stringify(favouriteitems))
  }, [cartcontent,favouriteitems]);



  localStorage.setItem('cartcontent', JSON.stringify([{ id: 1, name: 'Test Product', amount: 1 }]));

  function addtoCart(Product, amount) {
    setCartContent((prev) => {
    
      const existingProductIndex = prev.findIndex((item) => item.id === Product.id);
  
      if (existingProductIndex !== -1) {
 
        const updatedCart = [...prev];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          amount: updatedCart[existingProductIndex].amount + amount,
        };
        return updatedCart;
      } else {
      
        return [...prev, { ...Product, amount}];
      }
    });
  
   
    setCartCount((prevCount) => {
      const productExists = cartcontent.some((item) => item.id === Product.id);
      return productExists ? prevCount : prevCount + 1;
    });
  }

  function RemoveFromCart(id){
      const newcartcontent = cartcontent.filter((product) => product.id !== id);
      setCartContent(newcartcontent);
      setCartCount((c)=>c-=1);
  }
 
  function AddToFav(Product) {
    setFavouriteItems((prev) => {

      const exist = prev.findIndex((item) => item.id === Product.id);
  
      if (exist !== -1) {
   
        return prev;
      } else {
  
        return [...prev, Product];
      }
    });
  }

  function RemoveFav(id){
    setFavouriteItems((prev) => prev.filter((item) => item.id !== id));  
  }

  
  
  
  return (
    <CartContext.Provider value={{addtoCart,cartcontent,cartcount, RemoveFromCart,AddToFav,favouriteitems, RemoveFav}}>
      {children}
    </CartContext.Provider>
  )
}
export  default CartProvider
export const useCart = () => useContext(CartContext);

