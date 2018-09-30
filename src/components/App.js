import React ,{PropTypes} from 'react';
import Header from "./common/Header";
import {connect} from 'react-redux';
import Breweries from '../components/breweries/Breweries';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}


App.propTypes ={
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state,ownProps){
  return {
    loading:state.ajaxCallsInProgress > 0
  };
}


//export default App;
export default connect(mapStateToProps)(App);
