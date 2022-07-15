import React,{ useState } from 'react';
import {Link} from "react-router-dom";
import { Menu } from '@mui/icons-material';
import logo from "../../Assets/OneWeb_Logo.png"
import { navlink } from './data';


const Header = () => {

    const [responsive, setResponsive] = useState(false);

    return (
        <>
            <header>
                <div className="container flexsb">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className={responsive ? 'hideMenu' :'nav'}>
                        {navlink.map((link,idx)=>(
                                <Link to={link.url} key={idx} >{link.text}</Link>
                            )
                        )}
                    </div>
                    <button className="toggle" onClick={()=>{setResponsive(!responsive)}}>
                            <Menu className="icon"></Menu>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header