import React, { Fragment } from 'react'
import { social } from './data'

const Footer = () => {
    return (
        <>
            <footer>
                {social.map((item,idx) => (
                    <Fragment key={idx}>
                        <i data-aos='fade-down-right'>{item.icon}</i>
                    </Fragment>
                ))}
                <p data-aos='fade-down-right'>All Right Resceved © 2022</p>
            </footer>
        </>
    )
}

export default Footer