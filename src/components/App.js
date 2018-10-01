import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

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
