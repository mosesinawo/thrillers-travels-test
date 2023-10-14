import React from 'react'

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchNormal1 } from 'iconsax-react';


const Header = () => {
  return (
    <div className='header'>
      <div>
        <div className='header-input-container'>
          <div className='header-search'><SearchNormal1 size="20" color="#c1c8d3" /></div>
          <input className='header-input' type='text' placeholder='Search any things...' />
        </div>
      </div>

      <div className='header-left-container'>
        <p className='header-date'>Saturday, may 3, 2023 </p>
        <div className='header-bell'><FontAwesomeIcon icon={faBell} size="2xs" style={{ width: 20, height: 20 }} /></div>
      </div>
    </div>
  )
}

export default Header