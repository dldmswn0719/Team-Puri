import React from 'react'
import Intro from '../components/Intro'
import DetailNav from '../components/DetailNav'
import DetailPage from '../components/DetailPage'
import DetailPage2 from '../components/DetailPage2'
import Review from '../components/Review'
import Qa from '../components/Qa'
import Aside from '../components/Aside'

function Details() {

  return (
    <>
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

export default Details