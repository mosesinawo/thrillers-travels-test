import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Card = () => {
    return (
        <div className='card-destination'>
            <div className='card-destination-wrapper'>
                <div className='card-destination-container'>
                    <img className='card-destination-img' src='./images/img-3.jpg' alt='card-img' />
                </div>
                <div style={{ marginLeft: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div className='--flex-between'>
                        <p className='card-destination-title'>Monmartre France</p>
                        <span className='--flex-center' style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 'bold' }}></span>

                    </div>
                    <p className='card-destination-desc'>Visiting the best tourist area choosen by the audience</p>
                    <p className='card-destination-price'> $460,000,00</p>
                </div>
            </div>
        </div>

    )
}

const Explore = () => {
    return (
        <div className='--flex-center'>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default Explore