import React from 'react'
import Main_Test from '../components/Main_Test'
import Nav from '../components/Nav'
import Content1Swiper from './../components/Main/Content1Swiper'
import Content2Info from '../components/Main/Content2Info'
import Content3Review from '../components/Main/Content3Review'

function Main() {
  return (
    <>
      <Nav />
      <Main_Test />
      <Content1Swiper />
      <Content2Info />
      <Content3Review />
    </>
  )
}

export default Main