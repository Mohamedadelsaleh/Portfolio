import React, { useState } from 'react'
import {portfolio} from '../Common/data'
import VisibilityOutlinedIcon  from '@mui/icons-material/VisibilityOutlined'
import Heading from '../Common/Heading'

const allCategories = ['all',... new Set(portfolio.map((item)=>item.category))]

const Portfolio = () => {

    const [list, setList] = useState(portfolio)
    const [category, setCategory] = useState(allCategories)

    const filterItems = (category) =>{
        const newCategory = portfolio.filter((item,idx)=>item.category === category)
        setList(newCategory)

        if(category === 'all'){
            setList(portfolio)
        }
    }

    return (
        <>
            <article>
                <div className="container">
                    <Heading title='Portfolio' />
                    <div className="catButton">
                        {category.map((category)=>(
                            <button className='primaryBtn' onClick={()=>filterItems(category)}>{category}</button>
                        ))}
                    </div>
                    <div className="content grid3">
                        {list.map((val,idx) =>(
                            <div className="box">
                                <div className="img">
                                    <img src={val.cover} alt='' />
                                </div>
                                <div className="overlay">
                                    <h3>{val.title}</h3>
                                    <span>{val.name}</span>
                                    <VisibilityOutlinedIcon />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </>
    )
}

export default Portfolio