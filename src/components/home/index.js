import React from 'react'
import Search from '../searchBox'
import DestinationCard from '../cards/destinationCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import OfferCard from '../cards/offerCard'
import Explore from '../cards/explore'


const HomePage = () => {
    return (
        <section className='home'>
            <div className='home-container --width-full'>
                <img className='home-top-img' src='./images/bed.webp' alt='bed' />
                <div className='home-search'>
                    <Search />
                </div>
            </div>
            <div style={{ marginTop: 50, width: '100%' }}>
             
                <DestinationCard />
            </div>
            <div style={{ marginTop: 50, marginBottom: 50, width: '100%' }}>
                <p className='home-title' >Best Offers</p>
                <OfferCard />
            </div>
            <div>
                <p className='home-title'>Explore france</p>
                <Explore />
            </div>
        </section>
    )
}

export default HomePage