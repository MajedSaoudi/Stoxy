import React from 'react'

function Favourite() {
  return (
    <div>
         <div className='path-container'>
        <div>
          <h1>About Us</h1>
          <div className='path'>
            <Link to='/'><p>Home</p></Link><span>&#x276F;</span>
            <p className='current-page'>About</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favourite