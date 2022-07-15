import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from '../About/About';
import Header from '../Common/Header';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';


const Pages = () => {
    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/portfolio" component={Portfolio} />
                </Switch>
            </Router>
        </>
    )
}

export default Pages