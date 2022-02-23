import React, {Fragment} from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import {newsArr} from '../components/utils/data';
const Home = () => {
  return (




    
 <Fragment>
  
  <Header/>
  <div className="section">
    <div className="container">
      <div className="row">
      {newsArr.slice(0,2).map((item, index) =>
      <div className="col-md-6" key={index}>
      <div className="post post-thumb">
        <a className="post-img" href={`/blog?id=${item.id}`}><img src={item.image} alt="site" /></a>
        <div className="post-body">
          <div className="post-meta">
          </div>
          <h3 className="post-title"><a href={`/blog?id=${item.id}`}>{item.title.slice(0, 50)}..</a></h3>
        </div>
      </div>
    </div>)
     }
        
        {/* <div className="col-md-6">
          <div className="post post-thumb">
            <a className="post-img" href={`/blog?id=${item.id}`}><img src="img/post-2.jpg" alt="site" /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-3" href="category">Jquery</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href={`/blog?id=${item.id}`}>Ask HN: Does Anybody Still Use JQuery?</a></h3>
            </div>
          </div>
        </div> */}
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h2>Recent Posts</h2>
          </div>
        </div>
        {newsArr.slice(2,8).map((item, index) =>
        <div className="col-md-4" key={index}>
          <div className="post">
            <a className="post-img" href={`/blog?id=${item.id}`}><img src={item.image} alt="site" height={200} width={250} /></a>
            <div className="post-body">
              <div className="post-meta">
                {/* <a className="post-category cat-1" href="category">Web Design</a>
                <span className="post-date">March 27, 2018</span> */}
              </div>
              <h3 className="post-title"><a href={`/blog?id=${item.id}`}>{item.title.slice(0, 50)}...</a></h3>
            </div>
          </div>
        </div>
        )}
        {/* <div className="col-md-4">
          <div className="post">
            <a className="post-img" href={`/blog?id=${item.id}`}><img src="img/xpost-4.jpg.pagespeed.ic.acII8ZYTz8.jpg" alt="site" /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-2" href="category">JavaScript</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href={`/blog?id=${item.id}`}>Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
            </div>
          </div>
        </div> */}



{/*         
        <div className="col-md-4">
          <div className="post">
            <a className="post-img" href={`/blog?id=${item.id}`}><img src="img/xpost-5.jpg.pagespeed.ic.tcaqbxStTb.jpg" alt="site" /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-3" href="category">Jquery</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href={`/blog?id=${item.id}`}>Ask HN: Does Anybody Still Use JQuery?</a></h3>
            </div>
          </div>
        </div> */}
        {/* <div className="clearfix visible-md visible-lg" /> */}
        {/* <div className="col-md-4">
          <div className="post">
            <a className="post-img" href={`/blog?id=${item.id}`}><img src="img/xpost-6.jpg.pagespeed.ic.JtVoUYkYr5.jpg" alt="site" /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-2" href="category">JavaScript</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href={`/blog?id=${item.id}`}>Why Node.js Is The Coolest Kid On The Backend Development Block!</a></h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="post">
            <a className="post-img" href={`/blog?id=${item.id}`}><img src="img/xpost-1.jpg.pagespeed.ic.A4Rpahx6U5.jpg" alt="site" /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-4" href="category">Css</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href={`/blog?id=${item.id}`}>CSS Float: A Tutorial</a></h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="post">
            <a className="post-img" href={`/blog?id=${item.id}`}><img src="img/post-2.jpg" alt="site" /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-1" href="category">Web Design</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href={`/blog?id=${item.id}`}>Tell-A-Tool: Guide To Web Design And Development Tools</a></h3>
            </div>
          </div>
        </div> */}
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
          {newsArr.slice(8,9).map((item, index) =>
            <div className="col-md-12" key={index}>
              <div className="post post-thumb">
                <a className="post-img" href={`/blog?id=${item.id}`}><img src={item.image} alt="site" /></a>
                <div className="post-body">
                  <div className="post-meta">
                   
                  </div>
                  <h3 className="post-title"><a href={`/blog?id=${item.id}`}>{item.title}...</a></h3>
                </div>
              </div>
            </div>
          )}
           {newsArr.slice(9,11).map((item, index) =>
            <div className="col-md-6" key={index}>
              <div className="post">
                <a className="post-img" href={`/blog?id=${item.id}`}><img src={item.image} height={200} width={250} alt="site" /></a>
                <div className="post-body">
                  <div className="post-meta">
                 
                  </div>
                  <h3 className="post-title"><a href={`/blog?id=${item.id}`}>{item.title}</a></h3>
                </div>
              </div>
            </div>
           )}
            
            <div className="clearfix visible-md visible-lg" />
            {newsArr.slice(11,13).map((item, index) =>
            <div className="col-md-6" key={index}>
              <div className="post">
                <a className="post-img" href={`/blog?id=${item.id}`}><img src={item.image} height={200} width={250} alt="site" /></a>
                <div className="post-body">
                  <div className="post-meta">
                 
                  </div>
                  <h3 className="post-title"><a href={`/blog?id=${item.id}`}>{item.title}</a></h3>
                </div>
              </div>
            </div>
           )}
            <div className="clearfix visible-md visible-lg" />
            {newsArr.slice(13,15).map((item, index) =>
            <div className="col-md-6" key={index}>
              <div className="post">
                <a className="post-img" href={`/blog?id=${item.id}`}><img src={item.image} height={200} width={250} alt="site" /></a>
                <div className="post-body">
                  <div className="post-meta">
                 
                  </div>
                  <h3 className="post-title"><a href={`/blog?id=${item.id}`}>{item.title}</a></h3>
                </div>
              </div>
            </div>
           )}
          </div>
        </div>
        <div className="col-md-4">
          <div className="aside-widget">
            <div className="section-title">
              <h2>Most Read</h2>
            </div>
            {newsArr.slice(15,19).map((item, index) =>
            <div className="post post-widget" key={index}>
              <a className="post-img" href={`/blog?id=${item.id}`}><img src={item.image} alt="site" /></a>
              <div className="post-body">
                <h3 className="post-title"><a href={`/blog?id=${item.id}`}>{item.title}</a></h3>
              </div>
            </div>
            )}
          
          </div>
          
          <div className="aside-widget text-center">
           
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section section-grey">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center">
            <h2>Featured Posts</h2>
          </div>
        </div>
        {newsArr.slice(19,22).map((item, index) =>
        <div className="col-md-4" key={index}>
          <div className="post">
            <a className="post-img" href={`/blog?id=${item.id}`}><img src={item.image} height={200} width={250} alt="site" /></a>
            <div className="post-body">
              <div className="post-meta">
               
              </div>
              <h3 className="post-title"><a href={`/blog?id=${item.id}`}>{item.title}</a></h3>
            </div>
          </div>
        </div>
        )}
      
      </div>
    </div>
  </div>
  <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Most Read</h2>
              </div>
            </div>
            {newsArr.slice(22,26).map((item, index) =>
            <div className="col-md-12" key={index}>
              <div className="post post-row">
                <a className="post-img" href={`/blog?id=${item.id}`}><img src={item.image} alt="site" /></a>
                <div className="post-body">
                  <div className="post-meta">
                    
                  </div>
                  <h3 className="post-title"><a href={`/blog?id=${item.id}`}>{item.title}</a></h3>
                  <p>{item.desc.slice(0, 200)}...</p>
                </div>
              </div>
            </div>
            )}
          
            {/* <div className="col-md-12">
              <div className="section-row">
                <button className="primary-button center-block">Load More</button>
              </div>
            </div> */}
          </div>
        </div>
      
      </div>
    </div>
  </div>
  <Footer/>
</Fragment> 


  )
}

export default Home