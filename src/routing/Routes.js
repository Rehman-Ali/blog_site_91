import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutUs from '../About';
import ContactUs from '../ContactUs';
import Home from '../Home';
import PrivacyPolicy from '../PrivacyPolicy';
import SingleBlog from '../SingleBlog';

const Routes = () => {
  return (
 
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={AboutUs} />
        <Route exact path='/contact' component={ContactUs} />
        <Route exact path='/privacy-policy' component={PrivacyPolicy} />
        <Route exact path='/blog' component={SingleBlog} />
      </Switch>
   
  );
};

export default Routes;
