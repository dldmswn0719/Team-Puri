import React from 'react'
import Nav from '../components/Nav'
import AnimalDetails from '../components/Info/AnimalDetails'
// import StoreAside from '../components/Store/StoreAside'
import QuickMenu from '../components/Info/QuickMenu'



function InfoDetail() {
  return (
    <>
        <Nav />
        <AnimalDetails />
        {/* <StoreAside /> */}
        <QuickMenu/>
    </>
  )
}

export default InfoDetail