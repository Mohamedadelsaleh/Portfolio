import React, { Fragment } from 'react'
import { about } from '../Common/data'
import Heading from '../Common/Heading'

const About = () => {
    return (
        <>
            <section className="about">
                <div className="container flex">
                    {about.map((val,idx) => (
                        <Fragment key={idx}>
                            <div className="left" data-aos='fade-down-right'>
                                <img src={val.cover} alt='' />
                            </div>
                            <div className="right" data-aos='fade-down-left'>
                                <Heading title='About Me' />
                                <p>{val.desc}</p>
                                <p>{val.desc1}</p>
                                <button>Download CV</button>
                                <button className="primaryBtn">Download CV</button>
                            </div>
                        </Fragment>
                    )) }
                </div>
            </section>
        </>
    )
}

export default About