import React from 'react'
import Store_Test from '../components/Store_Test'
import Intro from '../components/Store/Intro'
import DetailNav from '../components/Store/DetailNav'
import DetailPage from '../components/Store/DetailPage'
import DetailPage2 from '../components/Store/DetailPage2'
import Review from '../components/Store/Review'
import Qa from '../components/Store/Qa'
import Aside from '../components/Store/Aside'
import Nav from '../components/Nav'
// import LoginNav from '../components/LoginNav'

function Store() {

  return (
    <>
      {/* <LoginNav /> */}
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