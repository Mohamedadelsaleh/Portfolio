import React from 'react'
import About from '../About/About'
import Hero from './Hero'
import Services from '../Services/Services'
import Counter from '../Common/Counter'
import Portfolio from '../Portfolio/Portfolio'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Counter />
            <Portfolio />
            <Testimonials />
        </>
    )
}

export default Home