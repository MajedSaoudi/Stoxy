import React, { useState, createContext, useContext, useEffect } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartcontent, setCartContent] = useState([]);
  const [cartcount, setCartCount] = useState(0);
  const [favouriteitems, setFavouriteItems] = useState([]);

  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartcontent')) || [];
    const storedFav = JSON.parse(localStorage.getItem('favouriteitems')) || [];
    setCartContent(storedCart);
    setCartCount(storedCart.length); 
    setFavouriteItems(storedFav);
  }, []);

 
  useEffect(() => {
    localStorage.setItem('cartcontent', JSON.stringify(cartcontent));
    localStorage.setItem('favouriteitems', JSON.stringify(favouriteitems));
    setCartCount(cartcontent.length); 
  }, [cartcontent, favouriteitems]);

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
        return [...prev, { ...Product, amount }];
      }
    });
   
  }

  function RemoveFromCart(id) {
    setCartContent((prev) => prev.filter((product) => product.id !== id));

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

  function RemoveFav(id) {
    setFavouriteItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <CartContext.Provider
      value={{ addtoCart, cartcontent, cartcount, RemoveFromCart, AddToFav, favouriteitems, RemoveFav }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
export const useCart = () => useContext(CartContext);