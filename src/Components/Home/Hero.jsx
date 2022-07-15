import React from 'react'
import Typewriter from 'typewriter-effect'
import { home } from '../Common/data'

const Hero = () => {
    return (
        <>
            <section className="hero">
                {home.map((val,idx) => (
                    <div className="heroContainer">
                        <h3>{val.text}</h3>
                        <h1>
                            <Typewriter options={
                                                    {strings:[`${val.name}`, `${val.post}`, `${val.design}`],
                                                        autoStart:true,
                                                        loop:true,
                                                }} />
                        </h1>
                        <p>{val.desc}</p>
                        <button className="primaryBtn">Download CV</button>
                    </div>
                )) }
            </section>
        </>
    )
}

export default Hero