import React from 'react'
import Intro from '../components/Store/Intro'
import DetailNav from '../components/Store/DetailNav'
import DetailPage from '../components/Store/DetailPage'
import DetailPage2 from '../components/Store/DetailPage2'
import Review from '../components/Store/Review'
import Qa from '../components/Store/Qa'
import Aside from '../components/Store/Aside'
import Nav from '../components/Nav'

function Store() {

  return (
    <>
      <Nav />
      <Intro />
      <DetailNav />
      <DetailPage />
      <DetailPage2 />
      <Aside />
      <Review />
      <Qa />
    </>
  )
}

export default Store