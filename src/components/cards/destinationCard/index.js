import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowSquareLeft, ArrowSquareRight } from 'iconsax-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const DestinationCard = () => {

    const [sliderRef, setSliderRef] = useState(null)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };

    const Card = () => {
        return (
            <div className='card-destination'>
                <div className='card-destination-wrapper'>
                    <div className='card-destination-container'>
                        <img className='card-destination-img' src='./images/img-1.jpg' alt='card-img' />
                    </div>
                    <div style={{ marginLeft: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div className='--flex-between'>
                            <p className='card-destination-title'>Monmartre France</p>
                            <span className='--flex-center' style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 'bold' }}><FontAwesomeIcon icon={faStar} style={{ width: 15, color: 'hsl(38.94deg 100% 48.04%)' }} size="2xs" />4/5</span>

                        </div>
                        <p className='card-destination-desc'>Visiting the best tourist area choosen by the audience</p>
                        <p className='card-destination-price'> $460,000,00</p>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <div>
            <div className='card-destination-controls'>
             <p style={{marginRight:'auto'}} className='home-title'>Trending destinations</p>
                <ArrowSquareLeft style={{ cursor: 'pointer' }} size="32" color="#2d3253" onClick={sliderRef?.slickPrev} />
                <ArrowSquareRight style={{ cursor: 'pointer' }} size="32" color="#2d3253" onClick={sliderRef?.slickNext} />
            </div>

            <Slider ref={setSliderRef}  {...settings}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </Slider>
        </div>
    )
}

export default DestinationCard