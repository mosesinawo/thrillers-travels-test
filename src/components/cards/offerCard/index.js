import { Heart, Location } from 'iconsax-react'
import React from 'react'

const Card = () => {
    return (
        <div className='card-offer'>
            <div className='card-offer-img-wrapper' >
                <img className='card-offer-img' src='./images/img-2.jpg' alt='offer-card' />
            </div>
            <p className='card-offer-title'>7 Seasons Apartment</p>
            <p className='card-offer-desc'><Location size="18" color="#c1c8d3" /> Kensington/London</p>
            <div className='--flex-center --flex-between ' style={{ marginTop: 20 }}>
                <p className='card-offer-price'>$65,00 <span style={{ color: '#c1c8d3', fontWeight: '300', fontSize: 12 }}>/night</span></p>
                <Heart size="20" color="#c1c8d3" />
            </div>
        </div>
    )
}

const OfferCard = () => {
    return (
     <div className='card-offer-container'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
     </div>
    )
}

export default OfferCard