import React from 'react'
import Heading from '../Common/Heading'
import { contact } from '../Common/data'

const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <Heading title="Contact Me" /> 
                    <div className="content flexsb">
                        <div className="right">
                            <form>
                                <div className="flex">
                                    <input type="text" placeholder='Your Name' data-aos='flip-left' />
                                    <input type="email" placeholder='Your Email'  data-aos='flip-right'/>
                                </div>
                                <input type="text" placeholder="Subject" data-aos='flip-up' />
                                <textarea cols="30" rows="10" data-aos='flip-down'></textarea>
                                <button data-aos='zoom-in-up'>Submit</button>
                            </form>
                        </div>
                        <div className="left">
                            {contact.map((val,idx)=>(
                                <div className="box" key={idx} data-aos='zoom-in'>
                                    <i>{val.icon}</i>
                                    <p>{val.text1}</p>
                                    <p>{val.text2}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact