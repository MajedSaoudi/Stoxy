import React, { useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Contact() {

  const faqData = [
    {
      question: 'How often do you introduce new collections?',
      answer: 'We regularly refresh our collections to keep up with the latest trends and deliver a diverse range of styles. New arrivals are introduced seasonally, ensuring you have access to the latest fashion statements.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we provide international shipping to bring Stoxys exclusive styles to customers around the world. Shipping fees and delivery times may vary based on the destination',
    },
    {
      question: 'Are gift cards available?',
      answer: 'Stoxy does not offer gift cards at this time.',
    },
    
  ];


  const [activeIndex, setActiveIndex] = useState(0);


  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  return (
    <>
      <Navbar backgroundColor={'white'}/>

      <div>

        <div className='path-container'>
          <div>
            <h1>Contact Us</h1>
            <div className='path'>
              <Link to='/'><p>Home</p></Link><span>&#x276F;</span>
              <p className='current-page'>Contact Us</p>
            </div>
          </div>
        </div>


        <div className='Contact-container'>
          <div className='Contact-elements'>
            <div className='Contact-info'>
              <h1>
                Need any help?


              </h1>
              <h1>
                we're here for you.
              </h1>
              <h4>
                Call Us
              </h4>
              <p>
                +(213
                ) 0000000
              </p>
              <h4>
                Mail
              </h4>
              <p>
                hello@stoxy.com
              </p>
            </div>
            <form className='Contact-form'>
              <div className='form-info'>
                <p>
                  Name
                </p>
                <input type="text" placeholder='thomas shelby' />
              </div>
              <div className='form-info'>
                <p>
                  Email
                </p>
                <input type="Email" placeholder='shelby@gmail.com' />
              </div>
              <div className='form-info' >
                <p>
                  Message
                </p>
                <textarea name="" id="" placeholder='Your Message...' rows={5}></textarea>
              </div>

              <button>Submit</button>
            </form>
          </div>
        </div>

      <div className='Faq-container'>
        <div className='Faq-info'>
          <h2>FREQUENTLY ASKED

          </h2>
          {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAnswer(index)}
          >
            <h4>{item.question}</h4>
            
            <h4>{activeIndex === index? 'x' : '+'}</h4>
          </div>
          {activeIndex === index && (
            <div className="faq-answer"><p>{item.answer}</p></div>
          )}
        </div>
      ))}
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
