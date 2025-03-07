import React from 'react'
import './Navbar.css';
import { useState, useRef, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import LoginButton from './login';
import LogoutButton from './Logout';
import burger from '../Assets/images/burger.svg';
import profile from '../Assets/images/Profile.svg';
import close from '../Assets/images/close.svg';
import bag from '../Assets/images/bag.svg';
import cart from '../Assets/images/Cart.svg';
import Product, { useProducts } from '../Components/Product.jsx';
import Remove from '../Assets/images/delete-512.png';
import { useCart } from './CartContext';
import search from '../Assets/images/search (2).svg';
import Favourite from '../Assets/images/Heart.svg';





function Navbar({ backgroundColor }) {
  const [isOpen, setIsOpen] = useState(false);
  const [chartisOpen, setChartIsOpen] = useState(false);
  const [isauthenticated, seIsAuthenticated] = useState(false);
  const [ShopIsopened, setShopIsopened] = useState(false)
  const [ProfileIsOpened, setProfileIsOpened] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { cartcontent, cartcount, Amount, RemoveFromCart } = useCart();
  const [showsearch, setShowSearch] = useState(false);
  const [imageloaded, setImageIsloaded] = useState(false);
  const Product = useProducts();

  function handleProfileClick() {
    setProfileIsOpened(!ProfileIsOpened);
    setShowSearch(false);
    setChartIsOpen(false);
    setIsOpen(false);
  }
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const calculateSubtotal = () => {
    return cartcontent.reduce((total, item) => total + item.price * item.amount, 0);
  };




  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {

        setIsVisible(false);
      } else {

        setIsVisible(true);
      }



      prevScrollY.current = currentScrollY;

    };

    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleSearchOpen() {
    setShowSearch(!showsearch);
    setChartIsOpen(false);
    setProfileIsOpened(false);
    setSearched('');
    setIsOpen(false);
  }

  const [searched, setSearched] = useState("");
  function handleinputchange(e) {
    setSearched(e.target.value);
  }


  const SearchedProduct = Product.filter((item) => {
    const cleanedSearchTerm = searched.toLowerCase().replace(/\s+/g, '');
    const cleanedTitle = item.title.toLowerCase().replace(/\s+/g, '');
    const cleanedCategory = item.category.name.toLowerCase().replace(/\s+/g, '');

    return (
      cleanedTitle.includes(cleanedSearchTerm) ||
      cleanedCategory.includes(cleanedSearchTerm)
    );
  });
  return (

    <div className='Header-container'>
      <div className='Header' style={{
        transition: "transform 0.3s ease-in-out",
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        backgroundColor: backgroundColor || 'white',
      }}>
        <div className='Container'>

          <div className='Categories'>
            <div className="checkbtn" onClick={() => {
              setIsOpen(!isOpen);
              setChartIsOpen(false);
              setShowSearch(false);
            }}>
              <img src={isOpen ? close : burger} alt="Menu" className='menu-icon' />
            </div>
            <div className='menu'>
              <div className="shop-container">

                <a onClick={() => {
                  handleLinkClick()
                }} className='shop' href='/Shop/All'><p>Shop <span><i class="arrow down"></i></span></p></a>
                <ul className='shop-dropdown' style={{

                  backgroundColor: backgroundColor || 'white',
                }}>
                  <li><a href="/Shop/Electronics">Electronics </a></li>
                  <li><a href={`/Shop/Furniture`}>Furniture </a></li>
                  <li><a href="/Shop/Clothes">Clothes </a></li>
                  <li><a href="/Shop/Shoes">Shoes </a></li>

                </ul>
              </div>
              <div className="shop-container">
                <a href="/About"><p>About Us</p></a>
              </div>
              <div className="shop-container">
                <a href="/Contact"><p>Contact</p></a>
              </div>


            </div>

          </div>
          <div className='Logo'>
            <a href='/Stoxy'>
              <h1>Stoxy</h1>
            </a>
          </div>
          <div className='information'>
            <div className='search-container'>
              <img alt="Search Icon" src={search} className='search-btn' onClick={() => handleSearchOpen()} />
            </div>

            <div className='cart-container' onClick={handleLinkClick}>
              <div className='cart' onClick={() => {
                setChartIsOpen(!chartisOpen)
                setShowSearch(false);
                setProfileIsOpened(false);
                setIsOpen(false);
              }}>

                <img src={cart} alt="Cart Icon" />
                <p className='cart-num'>{cartcount}</p>
              </div>
            </div>

            <div className='Favourite-container'>
              <Link to='/favourite'>
                <img src={Favourite} className='favourite-png' alt="Favourite-icon" />
              </Link>
            </div>

            <div className='Profile-container' >
              <img src={profile} alt="Profile Icon" onClick={() => handleProfileClick()} className='Default-profile' />

            </div>
          </div>
        </div>

      </div>
      <div className={`chart ${chartisOpen ? 'show' : ''}`}>
        <div className='chart-header'>
          <b>Shopping Cart</b>
          <img src={cart} />
        </div>
        <hr />
        <div className='chart-contain'>
          <div className='chart-product'>

            {cartcontent.length > 0 ? (
              cartcontent.map((product, index) => {
                // Check if product.images exists and is not empty
                if (!product.images || product.images.length === 0) {
                  return null; // Skip rendering this product
                }

                return (
                  <div className='cart-item' key={index}>
                    <div className='cart-item-details'>
                      <img src={product.images[0]} alt='' className='cart-item-image' />
                      <div className='cart-item-info'>
                        <h4>{product.title}</h4>
                        <b>Price: {product.amount * product.price}$</b>
                      </div>
                    </div>
                    <div className='remove-container'>
                      <img src={Remove} className='Trash-png' onClick={() => RemoveFromCart(product.id)} />
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No items in the cart.</p>
            )}
          </div>

        </div>
        <p>Subtotal : £{calculateSubtotal()}.00</p>
        <hr></hr>
        <div className='cart-buttons'>
          <button className='close-btn' onClick={() => setChartIsOpen(!chartisOpen)}>Close</button>
          <a ><button className='Checkout-btn'>Checkout</button></a>
        </div>

      </div>
      <div className={`Search ${showsearch ? 'show' : ''}`}>
        <div className='Search-tab-container'>
          <div className='Search-tab'>
            <input type='text' value={searched} onChange={handleinputchange} />
            <img src={search} />
          </div>
          {searched !== '' ? (
            <>
              <div className='Products-Count'>
                <button>PRODUCTS <span>({SearchedProduct.length})</span></button>
              </div>
              <hr />
            </>
          ) : null}

          <div className='Search-contain'>
            <div className='search-product'>

              {searched !== "" ? (
                <>


                  {SearchedProduct.slice(0, 4).map((product) =>

                  (
                    <>
                      <a href={`/product/${product.id}`} onClick={() => setShowSearch(false)} className='search-item-container'>
                        <div className='search-item' key={product.id}>

                          <img src={product.images[0]} alt='' className='cart-item-image' />
                          <div className='Search-item-details'>
                            <h3>{product.title}</h3>
                            <p className='searched-description'>{product.description.substr(0, 25)}...</p>
                            <b>Price: £{product.price}</b>
                          </div>

                        </div>
                        <hr></hr>
                      </a>


                    </>



                  ))}

                  <div className='Search-buttons'>
                    <a href='/Shop/All'>
                      <button className='search-close-btn' >
                        See All Products
                      </button>
                    </a>
                  </div>


                </>

              )
                : (

                  ''
                )}
            </div>

          </div>

        </div>

      </div>
      <div className={`Menu ${isOpen ? 'show' : ''}`}>
        <div>
          <div>
            <a onClick={() => setIsOpen(false)}
              href="/Shop/All">Shop</a>
          </div>
          <a onClick={() => setIsOpen(false)}
            href="/Shop/Clothes">Clothes</a>
          <a onClick={() => setIsOpen(false)}
            href="/Shop/Shoes"> Shoes</a>
          <a onClick={() => setIsOpen(false)}
            href="/Shop/Electronics">Electronics</a>
        </div>
        <a onClick={() => setIsOpen(false)} href='/About'>About Us</a>
        <a onClick={() => setIsOpen(false)} href='/Contact'>Contact</a>
      </div>
      <div className={`Profile-Dropdown ${ProfileIsOpened ? 'show' : ''}`}>
        <div>

          {isAuthenticated && (
            <>
              <div className='Profile-Data'>

                <div className='Profile-image'>
                  <img src={user.picture} onLoad={() => setImageIsloaded(true)} />
                  {!imageloaded && <div className='profile-image-loading skeleton'></div>}
                </div>

              </div>
              <div className='Profile-Name'>
                <h2>{user.name.substring(0, 12)}</h2>

              </div>
            </>
          )

          }
          <div className='Auth-btn'>
            {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar