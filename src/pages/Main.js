import React from 'react'
import Nav from '../components/Nav'
import Content1Swiper from './../components/Main/Content1Swiper'
import Content2Info from '../components/Main/Content2Info'
import Content3Review from '../components/Main/Content3Review'
import Content4Grid from '../components/Main/Content4Grid'
import Content5Donate from '../components/Main/Content5Donate'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import MainLoading from './MainLoading'

function Main() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);
    
    return (
        <>
            {loading ? (
                <MainLoading />
                ) : (
                <>
                    <Nav />
                    <Content1Swiper />
                    <Content2Info />
                    <Content3Review />
                    <Content4Grid />
                    <Content5Donate />
                    <Footer />
                </>
            )}
      </>
    );
}

export default Main