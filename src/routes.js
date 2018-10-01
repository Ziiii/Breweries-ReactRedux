import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './components/App';
import Breweries from './components/breweries/Breweries';
import TestPage from './components/breweries/testPage';
import TestPage2 from './components/breweries/testPage2';
import BreweriesEdit from './components/breweries/BreweriesEdit'

// export default (
//   <BrowserRouter path="/" component={App}>
//     <Route path="/" component={Breweries}/>
//     <Route path="brewery" component={BreweriesEdit}/>
//     <Route path="brewery/:id" component={BreweriesEdit}/>
//   </BrowserRouter>
// );

class MainRoot extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    return (
      <Router>
        <div className="container-fluid">
          <Route exact path="/" component={TestPage}/>
          <Route path="/brewery" component={TestPage2}/>
          {/*<Route path="/brewery/:id" component={BreweriesEdit}/>*/}
        </div>
      </Router>
    )
  }
}

export default MainRoot;
