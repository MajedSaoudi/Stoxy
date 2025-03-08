import React, { useEffect, useState, useRef } from 'react';
import './ProductDetail.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link, useParams } from 'react-router-dom';
import { useProducts } from './Product';
import Navbar from './Navbar';
import { useCart } from './CartContext';
import fav from '../Assets/images/Heart.jpg';
import favblack from '../Assets/images/Heart.png';
import Productimageholder from '../Assets/images/product.jpg';
import toast, { Toaster } from 'react-hot-toast';
import Footer from './Footer';


export default function ProductDetail() {
    const notify = () => toast.success('Successfully Added!');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [amount, setAmount] = useState(1);
    const { id } = useParams();
    const Products = useProducts();
    const Product = Products.find((p) => p.id == parseInt(id));
    const { addtoCart, AddToFav, favouriteitems } = useCart();
    const [heartisclicked, setHeartisclicked] = useState(false);
    const Size = [6, 8, 10, 14, 18, 20];
    const [activeButton, setActiveButton] = useState(null);
    const [limitedProducts, setLimitedProducts] = useState([]);
    const [isHovered, setIsHovered] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });


    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setCursorPosition({ x, y });
    };

    useEffect(() => {
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        const shuffledProducts = shuffleArray([...Products.filter((p) => p.id != Product.id)]).slice(0, 6);
        setLimitedProducts(shuffledProducts);


        setAmount(1);
        setCurrentIndex(0);
        setHeartisclicked(false)
    }, [Product]);

    if (!Product) {
        return <div className='Loading'>
            <div>
                <h1>Stoxy</h1>
            </div>
        </div>;
    }





    const buttons = [6, 8, 10, 14, 18, 20];
    const SizeofClothes = ["Small", "Medium", "Large", "XLarge"];

    const handleClick = (value) => {
        setActiveButton(value);
    };

    function goToSlide(index) {
        setCurrentIndex(index);
    };






    function handledecrement() {
        if (amount > 1) {
            setAmount((c) => c - 1);
        }
    }

    
    return (
        <>
            <Navbar backgroundColor="white" />
            <div className='Path-container'>
                <div className='Path'>

                    <a href='/Stoxy'><p>Home</p></a><span>&#x276F;</span>
                    <a href='/Shop/All'><p>Shop</p></a><span>&#x276F;</span>
                    <a href={`/Shop/${Product.category.name}`}><p>{Product.category.name}  <span>&#x276F;</span></p></a>
                    <h4>{Product.title}</h4>

                </div>
            </div>
            <div className='ProductDetail'>
                <div className='Product-Details-container'>
                    <div className='ProductDetails-image-figure'>
                        <div className='mini-images-container'>
                            {Product.images.map((images, index) => (
                                <>
                                    <img key={index} src={images} onClick={() => goToSlide(index)} className={`mini-images ${currentIndex === index ? 'active' : ''}`} />
                                </>

                            ))}

                        </div>
                        <div className='ProductDetails-image'>

                            <div className='product-image'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onMouseMove={handleMouseMove}
                            >
                                <img src={Product.images[currentIndex]} style={{
                                    transform: isHovered ? "scale(1.4)" : "scale(1)",
                                    transformOrigin: `${cursorPosition.x}% ${cursorPosition.y}%`,
                                    transition: "transform 0.3s ease",
                                }}
                                />
                            </div>


                        </div>
                        <div className='add-fav' onClick={() => {
                            AddToFav(Product)
                            setHeartisclicked(!heartisclicked);
                        }}> {!heartisclicked ? <img src={fav} /> : <img src={favblack} />}</div>
                    </div>

                    <div className='Product-par'>
                        <p className='Product-category'>{Product.category.name}</p>
                        <h1 className='Product-name'>{Product.title}</h1>
                        <h1 className='Product-price'>£{amount * Product.price}.00</h1>
                        <hr></hr>
                        <div className='Product-description'>
                            <h3 >Description : </h3>
                            <p>{Product.description}</p>
                        </div>

                        {Product.category.name === 'Shoes' ? (
                            <>
                                <h2>Size : </h2>
                                <div className='Product-Size'>
                                    {buttons.map((value) => (
                                        <button
                                            key={value}
                                            onClick={() => handleClick(value)}
                                            style={{
                                                backgroundColor: activeButton === value ? "black" : "",
                                                color: activeButton === value ? 'white' : ""
                                            }}
                                        >
                                            {value}
                                        </button>
                                    ))}
                                </div>
                            </>
                        ) : Product.category.name === 'Clothes' ? (
                            <>
                                <h2>Size : </h2>
                                <div className='Product-Size'>
                                    {SizeofClothes.map((Size) => (
                                        <button
                                            key={Size}
                                            onClick={() => handleClick(Size)}
                                            style={{
                                                backgroundColor: activeButton === Size ? "black" : "",
                                                color: activeButton === Size ? 'white' : ""
                                            }}
                                        >
                                            {Size}
                                        </button>
                                    ))}
                                </div>
                            </>
                        ) : null}
                        <h2>Amount :</h2>
                        <div className='Product-Amount'>

                            <button onClick={() => handledecrement()} disabled={amount === 1}>- </button>
                            <p>{amount}</p>
                            <button onClick={() => setAmount((c) => c + 1)} >+</button></div>
                        <div className='Payment-buttons'>
                            <button onClick={() => {
                                notify()
                                addtoCart(Product, amount)
                                setAmount(1)

                            }
                            } className='Addtocart-btn' >Add to Cart</button>
                            <Toaster position="top-center" toastOptions={{
                               
                                style: {
                               
                                    
                                    marginTop:'60px'
                                },

            
                            
                            }} />
                            <button className='Addtofav-btn'>Checkout Now</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='page-space-container'>
                <hr className='page-space' />
            </div>

            <div className='recommended-products-container'>
                <div>
                    <div className='Header-name'>
                        <h1>Other products : </h1>
                        <a href='/Shop/All'>View All</a>
                    </div>
                    <div className='recommended-products'>

                        {limitedProducts.map((product) => {
                            if(!product.images || product.images.length === 0 ){
                                return null;
                            }
                            return (
                            <>
                                <div className='recommended-products-card'>
                                    <div>
                                        <Link to={`/product/${product.id}`} onClick={() => {
                                            window.scrollTo(0, 0);
                                        }}>
                                            <img
                                                      src={product.images[currentIndex] ?? {Productimageholder}}
                                                      alt={product.title}
                                                      loading="lazy"
                                                    />

                                            <div className='recommended-card-details'>
                                                <h2>{product.title}</h2>

                                                <h3>£{product.price}</h3>


                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </>
                            );
                        })}

                    </div>
                </div>
            </div>
          
            <Footer/>
        </>
    )
}
