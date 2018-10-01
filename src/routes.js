import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Breweries from './components/breweries/Breweries';
import BreweriesEdit from './components/breweries/BreweriesEdit';


class MainRoot extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    return (
      <Router>
        <div className="container-fluid">
          <Route exact path="/" component={Breweries}/>
          <Route exact path="/brewery" component={BreweriesEdit}/>
          <Route path="/brewery/:id" component={BreweriesEdit}/>
        </div>
      </Router>
    );
  }
}

export default MainRoot;
