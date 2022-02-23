import React, { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
         <header id="header">
    <div id="nav">
      <div id="nav-fixed">
        <div className="container">
          <div className="nav-logo">
            <a href="/" className="logo"><img src="img/logo.png" alt="site" /></a>
          </div>
          <ul className="nav-menu nav navbar-nav">
          <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contacts</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
          <div className="nav-btns">
           
            <div className="search-form">
              
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </header>
    </Fragment>
  )
}

export default Header