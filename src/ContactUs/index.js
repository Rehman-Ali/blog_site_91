import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const ContactUs = () => {
  return (
    <Fragment>

<Header/>
  <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="section-row">
            <h3>Contact Information</h3>
            <p>For any query, please feel free to contact the following:</p>
            <ul className="list-style">
              <li><p><strong>Email:</strong> <span className="__cf_email__" data-cfemail="e0b785828d8187a0858d81898cce838f8d">rehmanali1477@gmail.com</span></p></li>
              <li><p><strong>Phone:</strong> +923117880246</p></li>
              <li><p><strong>Address:</strong> office # 200, Grand Regent Mall, Faisalabad Pakistan </p></li>
            </ul>
          </div>
        </div>
        <div className="col-md-5 col-md-offset-1">
          <div className="section-row">
            <h3>Send A Message</h3>
            <form>
              <div className="row">
                <div className="col-md-7">
                  <div className="form-group">
                    <span>Email</span>
                    <input className="input" type="email" name="email" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="form-group">
                    <span>Subject</span>
                    <input className="input" type="text" name="subject" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea className="input" name="message" placeholder="Message" defaultValue={""} />
                  </div>
                  <button className="primary-button">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>


    </Fragment>
  )
}

export default ContactUs