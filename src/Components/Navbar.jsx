import React from 'react'
import './Navbar.css';
import { useState, useRef, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import LoginButton from './login';
import Productimageholder from '../Assets/images/product.jpg';
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

                <Link onClick={() => {
                  handleLinkClick()
                }} className='shop' to='/Shop/All'><p>Shop <span><i class="arrow down"></i></span></p></Link>
                <ul className='shop-dropdown' style={{

                  backgroundColor: backgroundColor || 'white',
                }}>
                  <li><Link to="/Shop/Electronics">Electronics </Link></li>
                  <li><Link to={`/Shop/Furniture`}>Furniture </Link></li>
                  <li><Link to="/Shop/Clothes">Clothes </Link></li>
                  <li><Link to="/Shop/Shoes">Shoes </Link></li>

                </ul>
              </div>
              <div className="shop-container">
                <Link to="/About"><p>About Us</p></Link>
              </div>
              <div className="shop-container">
                <Link to="/Contact"><p>Contact</p></Link>
              </div>


            </div>

          </div>
          <div className='Logo'>
            <Link to='/'>
              <h1>Stoxy</h1>
            </Link>
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
                <p className='cart-num'>{cartcount !== undefined ? cartcount : '0'}</p>
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
           
                if (!product.images || product.images.length === 0) {
                  return null; 
                }

                return (
                  <>
                  <div className='cart-item' key={index}>
                    <div className='cart-item-details'>
                      <img src={product.images[0] ?? {Productimageholder}} alt='' className='cart-item-image' />
                      <div className='cart-item-info'>
                        <h4>{product.title}</h4>
                        <b>Price: {product.amount * product.price}$</b>
                      </div>
                    </div>
                    <div className='remove-container'>
                      <img src={Remove} className='Trash-png' onClick={() => RemoveFromCart(product.id)} />
                    </div>
                   
                  </div>
                   <hr className='product-hr'/>
                   </>
                );
              })
            ) : (
              <p>No items in the cart.</p>
            )}
          </div>

        </div>
        <p>Subtotal : £{calculateSubtotal() !== undefined ? calculateSubtotal() : '0'}.00</p>
        <hr></hr>
        <div className='cart-buttons'>
          <button className='close-btn' onClick={() => setChartIsOpen(!chartisOpen)}>Close</button>
          <Link ><button className='Checkout-btn'>Checkout</button></Link>
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

                  {
                    if(!product.images || product.images.length === 0 ){
                      return null;
                    }  
                    return(
                    <>
                      <Link to={`/product/${product.id}`} onClick={() => setShowSearch(false)} className='search-item-container'>
                        <div className='search-item' key={product.id}>

                          <img src={product.images[0] ?? {Productimageholder}} alt='' className='cart-item-image' />
                          <div className='Search-item-details'>
                            <h3>{product.title}</h3>
                            <p className='searched-description'>{product.description.substr(0, 25)}...</p>
                            <b>Price: £{product.price}</b>
                          </div>

                        </div>
                        <hr></hr>
                      </Link>


                    </>

                   );

                  })}

                  <div className='Search-buttons'>
                    <Link to='/Shop/All'>
                      <button className='search-close-btn' >
                        See All Products
                      </button>
                    </Link>
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
            <Link onClick={() => setIsOpen(false)}
              to="/Shop/All">Shop</Link>
          </div>
          <Link onClick={() => setIsOpen(false)}
            to="/Shop/Clothes">Clothes</Link>
          <Link onClick={() => setIsOpen(false)}
            to="/Shop/Shoes"> Shoes</Link>
          <Link onClick={() => setIsOpen(false)}
            to="/Shop/Electronics">Electronics</Link>
        </div>
        <Link onClick={() => setIsOpen(false)} to='/About'>About Us</Link>
        <Link onClick={() => setIsOpen(false)} to='/Contact'>Contact</Link>
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