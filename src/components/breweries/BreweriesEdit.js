import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class BreweriesEdit extends React.Component {
  constructor(props, context) {
    console.log(props);
    super(props, context);
    this.state = {brewery:props.brewery};
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({brewery: Object.assign([],nextProps.brewery)});
    }
  }

  render() {
    return (
      <div>
        <h1>Brew edit page</h1>
        {this.state.brewery.name}
      </div>
    );
  }
}

BreweriesEdit.propTypes = {
  //my Props types
};

function getBreweryById(breweries, id) {
  const brewery = breweries.filter(brewery => brewery.id == id);
  if (brewery) {
    return brewery[0];
  }
  return null;
}


function mapStateToProps(state, ownProps) {
  debugger;
  const brewId = ownProps.params.id;
  console.log(ownProps);
  console.log(brewId);
  let brewery = {name: "test", number: "", city: ""};
  if (brewId && state.breweries.length > 0) {
    brewery = getBreweryById(state.breweries, brewId);
  }
  console.log(brewery);
  return {
    brewery:brewery
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BreweriesEdit);
