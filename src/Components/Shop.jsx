import React from 'react';
import Navbar from './Navbar';
import './Shop.css';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect,useMemo } from 'react';
import Favourite from '../Assets/images/Heart.svg';
import { Link } from 'react-router-dom';
import search from '../Assets/images/search (2).svg';
import Footer from './Footer';
import Productimageholder from '../Assets/images/product.jpg';
export function Shop() {

  const { categoryName } = useParams();
  const [filter, setFilter] = useState(categoryName);
  const [selectedOption, setSelectedOption] = useState('0');
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activefilter, setActiveFilter] = useState(filter);
  const itemsPerPage = 16;
  const MaxPages = 4;

  const options = [
    { value: '0', label: 'Sort By' },
    { value: '1', label: 'Price : Low to high' },
    { value: '2', label: 'Price : High to low' },
    { value: '3', label: 'Most Popular' },

  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setFilter(event.target.value);
  };


  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(1500);


  const handleMinChange = (e) => {
    const value = Math.max(1, Math.min(parseInt(e.target.value, 10), maxValue - 1));
    setMinValue(value);
  };


  const handleMaxChange = (e) => {
    const value = Math.max(minValue + 1, Math.min(parseInt(e.target.value, 10), 1500));
    setMaxValue(value);
  };


  const handleMinInput = (e) => {
    const value = Math.max(1, Math.min(parseInt(e.target.value, 10), maxValue - 1));
    setMinValue(value);
  };


  const handleMaxInput = (e) => {
    const value = Math.max(minValue + 1, Math.min(parseInt(e.target.value, 10), 1500));
    setMaxValue(value);
  };

  if (activefilter === 1) {
    setActiveFilter('Price : Low To High')
  } else if (activefilter === 2) {
    setActiveFilter('Price : High To Low')
  } else if (activefilter === 3) {
    setActiveFilter('Most Popular')
  }
  


  const getBaseURL = () => {
    switch (filter) {
      case 'All':
        return 'https://multimart-3e830-default-rtdb.europe-west1.firebasedatabase.app/Products.json';
      case 'Clothes':
        return 'https://multimart-3e830-default-rtdb.europe-west1.firebasedatabase.app/Product/Category=1.json';
      case 'Electronics':
        return 'https://multimart-3e830-default-rtdb.europe-west1.firebasedatabase.app/Product/Category=2.json';
      case 'Furniture':
        return 'https://multimart-3e830-default-rtdb.europe-west1.firebasedatabase.app/Product/Category=3.json';
      case 'Shoes':
        return 'https://multimart-3e830-default-rtdb.europe-west1.firebasedatabase.app/Product/Category=4.json';
      case 'Miscellaneous':
        return 'https://multimart-3e830-default-rtdb.europe-west1.firebasedatabase.app/Product/Category=5.json';

    }
  };


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const Base_URL = getBaseURL();
        const response = await fetch(Base_URL);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [filter, categoryName]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter, currentPage]);



  const searchedAndSortedProducts = products
    .filter((p) => p.price >= minValue && p.price <= maxValue)
    .filter((p) => p.title.toLowerCase().replace(/\s+/g, '').includes(value.toLowerCase().replace(/\s+/g, '')))

    .sort((a, b) => {
      switch (selectedOption) {
        case '1':
          return a.price - b.price ;
        case '2':
          return b.price - a.price;
        case '3':
          return b.rating - a.rating;


        default:
          return 0;
      }
    });

    const totalItems = searchedAndSortedProducts.length;
    const totalPages = Math.min(Math.ceil(totalItems / itemsPerPage), MaxPages);
    const currentItems = useMemo(() => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return searchedAndSortedProducts.slice(startIndex, endIndex);
    }, [searchedAndSortedProducts, currentPage, itemsPerPage]);


    const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    };

  const [imageLoaded, setImageLoaded] = useState(false);


  const handleImageLoad = () => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 200);
  };



 
  if (!searchedAndSortedProducts) {
    return (
      <div className="Loading">
        <div>Stoxy</div>
      </div>
    );
  }




  return (


    <>
      <Navbar backgroundColor="white"/>
      <div className='path-container'>
        <div>
          <h1>SHOP</h1>
          <div className='path'>
            <Link to='/Stoxy'><p>Home</p></Link><span>&#x276F;</span>
            <p className='current-page'>Shop</p>
          </div>

        </div>
      </div>

      <div className='Shop'>

        <div className="Shop-container">
          <div className='filter-tab'>
            <div className='filter-tab-container'>
              <div className='Category-tab'>
                <h1>CATEGORY</h1>
                <div className='Category-buttons'>
                 
                  <button onClick={() => {
                    setFilter('All');
                    setCurrentPage(1);
                  }}
                    className={`Category-button ${filter === 'All' ? 'active' : ''}`}
                  >All</button>
                  <button onClick={() => {
                    setFilter('Clothes');
                    setCurrentPage(1);
                  }}
                    className={`Category-button ${filter === 'Clothes' ? 'active' : ''}`}
                  >Clothes</button>
                  <button onClick={() => {
                    setFilter('Shoes');
                    setCurrentPage(1);
                  }}
                    className={`Category-button ${filter === 'Shoes' ? 'active' : ''}`}
                  >Shoes</button>
                  <button onClick={() => {
                    setFilter('Electronics');
                    setCurrentPage(1);
                  }}
                    className={`Category-button ${filter === 'Electronics' ? 'active' : ''}`}
                  >Electronics</button>
                  <button onClick={() => {
                    setFilter('Furniture');
                    setCurrentPage(1);
                  }}
                    className={`Category-button ${filter === 'Furniture' ? 'active' : ''}`}>Furniture</button>
                  <button onClick={() => {
                    setFilter('Miscellaneous');
                    setCurrentPage(1);
                  }}
                    className={`Category-button ${filter === 'Miscellaneous' ? 'active' : ''}`}
                  >Miscellaneous</button>

                </div>
                <hr />
              </div>
              <div className='Price-range'>
                <h1>PRICE RANGE</h1>
                <div className="price-range-slider">

                  <div className="slider-container">
                    <div className="slider-container">
                      <div className="slider-track">
                        <div
                          className="filled-track"
                          style={{
                            left: `${((minValue - 1) / 1499) * 100}%`,
                            right: `${100 - ((maxValue - 1) / 1499) * 100}%`,
                          }}
                        ></div>


                      </div>
                      <input
                        type="range"
                        min={1}
                        max={1500}
                        value={minValue}
                        onChange={handleMinChange}
                        className="slider-min-slider"
                      />
                      <input
                        type="range"
                        min={1}
                        max={1500}
                        value={maxValue}
                        onChange={handleMaxChange}
                        className="slider-max-slider"
                      />
                    </div>

                  </div>


                  <div className="input-container">
                    <div className="input-field">
                      <label htmlFor="min-input">Min:</label>
                      <input
                        id="min-input"
                        type="number"
                        min={0}
                        max={1499}
                        value={minValue}
                        onChange={handleMinInput}
                        placeholder='Min'
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="max-input">Max:</label>
                      <input
                        id="max-input"
                        type="number"
                        min={2}
                        max={1500}
                        value={maxValue}
                        onChange={handleMaxInput}
                      />
                    </div>
                  </div>



                </div>

              </div>
            </div>
          </div>

          <div className="Product-container">
            <div className='search-sort-tab'>
              <div className='search-input'>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Search For Anything ..."
                />
                <img src={search} />
              </div>
              <div className='Sort-input'>
                <select value={selectedOption} onChange={handleOptionChange}>
                  <option value="0" disabled className="hidden-option">
                    Sort By
                  </option>
                  {options.slice(1).map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

              </div>
            </div>



            <div className="Filter-buttons">
              <a
                onClick={() => {
                  setFilter('All');
                  setCurrentPage(1);
                }}
                style={filter === 'All' ? {
                  color: 'rgb(156, 156, 156)'
                } : {}}
              >
                All
              </a>
              <a

                onClick={() => {
                  setFilter('Clothes');
                  setCurrentPage(1);
                }}

                style={filter === 'Clothes' ? {
               color: 'rgb(156, 156, 156)'
                } : {}}
              >
                Clothes
              </a>
              <a
                onClick={() => {
                  setFilter('Electronics');
                  setCurrentPage(1);
                }}
                style={filter === 'Electronics' ? {
               color: 'rgb(156, 156, 156)'
                } : {}}
              >
                Electronics
              </a>
              <a
                onClick={() => {
                  setFilter('Furniture');
                  setCurrentPage(1);
                }}
                style={filter === 'Furniture' ? {
                 color: 'rgb(156, 156, 156)'
                } : {}}
              >
                Furniture
              </a>
              <a
                onClick={() => {
                  setFilter('Shoes');
                  setCurrentPage(1);
                }}
                style={filter === 'Shoes' ? {
                 color: 'rgb(156, 156, 156)'
                } : {}}
              >
                Shoes
              </a>
              <a
                onClick={() => {
                  setFilter('Miscellaneous');
                  setCurrentPage(1);
                }}
                style={filter === 'Miscellaneous' ? {
                  
                  color: 'rgb(80, 80, 80)'
                } : {}}
              >
                Miscellaneous
              </a>
            </div>
            

            <div className="Products-container">
              <div className="Product-card-container">
                {currentItems.map((product, index) => {
                  if(!product.images || product.images.length ===0){
                    return null;
                  }
                  return(
                  <div key={index} className="Product-Card">
                    <div className='Product-image'>
                      <Link to={`/product/${product.id}`} onClick={() => {
                        window.scrollTo(0, 0);
                      }}>
                        <img src={product.images[0] ?? {Productimageholder}} alt={product.title} onLoad={() => handleImageLoad()} loading={index < 4 ? "eager" : "lazy"}/>
                      </Link>
                      {!imageLoaded && <div className='image-loading skeleton'></div>}

                    </div>

                    {!imageLoaded ? (
                      <div className="skeleton-text skeleton"></div>
                    ) : (
                      <Link to={`/product/${product.id}`} >
                        <h5>{product.title}</h5>
                      </Link>
                      
                    )}
                    {!imageLoaded ? (
                      <div className='skeleton-container'>
                        <div className="skeleton-price skeleton"></div>
                      </div>
                    ) : (
                      <p>£{product.price}</p>
                    )}
                 
                  </div>
                  );
                })}
              </div>
            </div>


            <div className="pagination">
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
  >
   &#x276E;
  </button>
  <span>
    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index + 1}
        onClick={() => handlePageChange(index + 1)}
        style={{
          border: currentPage === index + 1 ? "1px solid" : "",
          background: currentPage === index + 1 ? 'black' : '',
          color: currentPage === index + 1 ? 'white' : '',
        }}
      >
        {index + 1}
      </button>
    ))}
  </span>
  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    &#x276F;
  </button>
</div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}