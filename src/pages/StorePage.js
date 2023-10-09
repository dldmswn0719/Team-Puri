import React from 'react'
import Nav from '../components/Nav'
import ProductInfo from '../components/Store/ProductInfo'
import ProductNav from '../components/Store/ProductNav'
import ProductDetail from '../components/Store/ProductDetail'
import ProductDesc from '../components/Store/ProductDesc'
import StoreReview from '../components/Store/StoreReview'
import StoreQna from '../components/Store/StoreQna'
import QuickMenu from '../components/Info/QuickMenu'

function StorePage() {
    
    return (
        <>
            <Nav />
            <ProductInfo />
            <ProductNav />
            <ProductDetail />
            <ProductDesc />
            <StoreReview />
            <StoreQna />
            <QuickMenu />
         </>
    )
}

export default StorePage