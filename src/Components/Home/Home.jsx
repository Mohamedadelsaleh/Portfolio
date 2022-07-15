import React from 'react'
import About from '../About/About'
import Hero from './Hero'
import Services from '../Services/Services'
import Counter from '../Common/Counter'
import Portfolio from '../Portfolio/Portfolio'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Counter />
            <Portfolio />
        </>
    )
}

export default Home