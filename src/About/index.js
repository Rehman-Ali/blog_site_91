import React , {
    Fragment
}from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const AboutUs = () => {
  return (
    <Fragment>
  
<Header/>
  <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="section-row">
            <h3>About Us</h3>
            <figure className="figure-img">
            </figure>
            <p>Webmag News, the pioneer of News Channel in Pakistan operates under the philosophy of keeping its viewers “Har Lamha Bakhabar.” Bakhabar is an English word that means informed, and that is precisely what the channel strives to achieve by leaving no stone unturned as it digs into the heart of every story on the local as well as international level.
            <br/>
            <br/>

Besides its comprehensive news coverage and updates every hour, Webmag News offers wide range of extraordinary insights on topics ranging from politics, business and finance, money and stock market to fashion entertainment and weather updates.
<br/>
<br/>

To reveal as much as possible about the most exclusive and interesting aspects of the news has always been a priority. After publication of the story on web, it’s also reworked and updated with the development of the story. The website also rims with intriguing blogs and fascinating features contribute by competent writers and renowned journalists.
<br/>
<br/>
<br/>
Employing a vast network of over 500 strategically positioned correspondents all over Pakistan and around the world, Webmag News is at the forefront of every breaking news story that matters most to you.</p>
          </div>
         
        </div>
       
      </div>
    </div>
  </div>
  <Footer/>


    </Fragment>

  )
}

export default AboutUs