import React from 'react'
// import Main_Test from '../components/Main_Test'
import Nav from '../components/Nav'
import Content1Swiper from './../components/Main/Content1Swiper'
import Content2Info from '../components/Main/Content2Info'
import Content3Review from '../components/Main/Content3Review'
import Footer from '../components/Footer'
import Content4Grid from '../components/Main/Content4Grid'
import Content5Donate from '../components/Main/Content5Donate'

function Main() {
    return (
        <>
            <Nav />
            {/* <Main_Test /> */}
            <Content1Swiper />
            <Content2Info />
            <Content3Review />
            <Content4Grid />
            <Content5Donate />
            <Footer />
        </>
    );
}

export default Main