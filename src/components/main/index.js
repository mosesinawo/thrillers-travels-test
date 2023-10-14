import React from 'react'
import Header from '../header'

const MainContent = ({children}) => {
  return (
    <div className='main'>
        <Header/>
        {children}
    </div>
  )
}

export default MainContent