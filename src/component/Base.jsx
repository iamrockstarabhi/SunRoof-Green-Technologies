import React from 'react'
import CustomNavbar from './CustomNavbar'

const Base = ( {children} ) => {
  return (
    <>

        <CustomNavbar></CustomNavbar>

        {children}

        {/* <h1>Footer</h1> */}
    
    </>
  )
}

export default Base