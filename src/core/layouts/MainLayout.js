import React from 'react'
import Header from '../parts/Header'
import Footer from '../parts/Footer'


const MainLayout = ({children}) => {
  return (
    <>
    <Header/>
    <main>{children}</main>
    <Footer/>   
    </>
  )
}

export default MainLayout