import { ArrowSquareRight, Category, Edit, Home, Lovely, Setting, Ticket } from 'iconsax-react'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='sidebar  --flex-start --dir-column  '>
            <div className='--flex-center --dir-column'>
                <h4 className='sidebar-header'>Mima<span className='--color-gray'>Booking</span></h4>
                <div className='sidebar-img-container'>
                    <img className='sidebar-img' src='./images/girl.webp' alt='img' />
                    <span className='--flex-center' style={{ position: 'absolute', bottom: -10, left:25, backgroundColor:'#363853',borderRadius:'50%', padding:'5px' }}>
                    <Edit  size="18" color="#fff" variant="Outline" />
                    </span>
                </div>
                <p className='--text-md --color-gray --text-center --my2 --fw-bold'>ilia Jan</p>
            </div>

            <nav>
                <ul className='sidebar-links'>
                    <li className='sidebar-item'> <Home size="20" color="#363853" variant="Bold" /> Dashboard</li>
                    <li className='sidebar-item'> <Category size="20" color="#6d7c90" /> Explore City</li>
                    <li className='sidebar-item'> <Ticket size="20" color="#6d7c90" />Ticket</li>
                    <li className='sidebar-item'> <Lovely size="20" color="#6d7c90" />Favourite</li>
                    <li className='sidebar-item'><Setting size="20" color="#6d7c90" /> Setting</li>
                </ul>
            </nav>


            <div>
                <li className='sidebar-item'><ArrowSquareRight size="20" color="#797979" /> Logout</li>
            </div>

        </div>
    )
}

export default Sidebar