import React from 'react'
import Slider from "react-slick"
import { testimonials } from '../Common/data'
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <>
            <div className="testimonials hero">
                <div className="container">
                <Slider {...settings}>
                        {testimonials.map((val,idx)=>(
                            <div className="box">
                                <i>
                                    <FormatQuoteIcon />
                                </i>
                                    <p>{val.text}</p>
                                    <div className="img">
                                        <img src={val.image} alt="" />
                                    </div>
                                    <h3>{val.name}</h3>
                                    <label>{val.post}</label>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Testimonials