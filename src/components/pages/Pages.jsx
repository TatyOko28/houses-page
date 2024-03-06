import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"



const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />                    
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />          
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
