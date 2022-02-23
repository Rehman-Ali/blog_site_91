import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './routing/Routes';



class App extends Component {
  render() {
    return (
    
        <Router>
          {/* <Layout> */}

          <Route component={Routes} />

          {/* </Layout> */}
        </Router>
      
    );
  }
}
export default App;
