import React from 'react'
import './styles.css'
import bannerimg from '../../assets/big-ben.jpg'

const index = () => {
    return (
        <hero className="hero">
        <div className="hero-banner">
            <div className="hero-banner-img">
                <img src={bannerimg} alt="#" />
            </div>

            <div className="hero-banner-container">
                <p>Hero. this can be very long</p>
            </div>

        </div>
            
        </hero>
    )
}

export default index



