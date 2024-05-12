import React from 'react'
import './Banner.css'
import ban1 from '../../assets/banner1.png'
import ban2 from '../../assets/banner2.png'

const Banner = () => {
  return (
    <>
        <div className="container">
            <div className="banner">
                <div className="banner-left">
                    <h2>Welcome to GreenShop</h2>
                    <h1>LET'S MAKE A BETTER <b>PLANET</b></h1>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                </div>
                <div className="banner-right">

                    <img src={ban2} alt="" />
                    <img className='ban1' src={ban1} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner