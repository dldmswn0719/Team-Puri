import React from 'react'
import Nav from '../components/Nav'
import Reviews from '../components/Review/Reviews'
import QuickMenu from '../components/Info/QuickMenu'

function Review_Page() {
  return (
    <>
        <Nav />

        <QuickMenu/>

        <Reviews />
    </>
  )
}

export default Review_Page