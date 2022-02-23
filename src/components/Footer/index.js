import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
        <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="footer-widget">
            <div className="footer-logo">
              <a href="/" className="logo"><img src="img/logo.png" alt="site" /></a>
            </div>
            <ul className="footer-nav">
            
            </ul>
            <div className="footer-copyright">
              <span>© 
                Copyright © All rights reserved  
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-widget">
                <h3 className="footer-title">About Us</h3>
                <ul className="footer-links">
                  <li><a href="/about">About Us</a></li>
                
                  <li><a href="/contact">Contacts</a></li>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
             
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer-widget">
            <h3 className="footer-title">Join our Newsletter</h3>
            <div className="footer-newsletter">
              <form>
                <input className="input" type="email" name="newsletter" placeholder="Enter your email" />
                <button className="newsletter-btn"><i className="fa fa-paper-plane" /></button>
              </form>
            </div>
            <ul className="footer-social">
              <li><a href="foo"><i className="fa fa-facebook" /></a></li>
              <li><a href="foo"><i className="fa fa-twitter" /></a></li>
              <li><a href="foo"><i className="fa fa-google-plus" /></a></li>
              <li><a href="foo"><i className="fa fa-pinterest" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </Fragment>
  )
}

export default Footer