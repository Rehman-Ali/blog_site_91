import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {newsArr} from '../components/utils/data';

const SingleBlog = (props) => {
  console.log("id==========" , props.location.search.slice(4,7))
  return (
    <Fragment>

    <Header/>
  <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="section-row sticky-container">
          {newsArr.filter(item => item.id ===  props.location.search.slice(4,7)).map((item, index) =>
           <div className="main-post" key={index}>

           <h3>{item.title}</h3>
           <figure className="figure-img">
             <img className="img-responsive" src={item.image} alt="site" />
          
           </figure>
           <p>{item.desc}</p>
         </div>
          )}
           
        
          </div>
          
         
          
         
        </div>
        
      </div>
    </div>
  </div>
   <Footer/>



    </Fragment>
  )
}

export default SingleBlog