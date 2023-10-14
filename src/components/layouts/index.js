import React from 'react'
import Sidebar from '../sidebar'
import MainContent from '../main'

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Sidebar />
            <MainContent>
                {children}
            </MainContent>
        </div>
    )
}

export default Layout