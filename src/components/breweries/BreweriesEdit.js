import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BreweryForm from "../breweries/BreweryForm";
import {browserHistory} from 'react-router';
import * as breweryActions from "../breweries/breweriesActions";
import PropTypes from 'prop-types';

class BreweriesEdit extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      brewery: props.brewery,
      saving: false,
      errors: {name: "", city: "", phone: ""}
    };
    this.updateBreweryState = this.updateBreweryState.bind(this);
    this.saveBrewery = this.saveBrewery.bind(this);
    this.validateBrewery = this.validateBrewery.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        brewery: Object.assign({}, nextProps.brewery),
        errors: Object.assign({}, this.state.errors)
      });
    }
  }

  updateBreweryState(event) {
    const field = event.target.name;
    let brewery = this.state.brewery;
    brewery[field] = event.target.value;
    return this.setState({brewery: brewery});
  }

  saveBrewery() {
    if (this.validateBrewery(this.state.brewery)) {
      this.setState({saving: true});
      this.props.actions.saveBrewery(this.state.brewery);
      this.setState({saving: false});
      browserHistory.push("/");
    }
  }

  validateBrewery(brewery) {
    let errors = {name: "", city: "", phone: ""};
    const error = "Filed is required";
    let isValid = true;
    if (!brewery.name) {
      errors.name = error;
      isValid = false;
    }

    if (!brewery.city) {
      errors.city = error;
      isValid = false;
    }

    if (!brewery.phone) {
      errors.phone = error;
      isValid = false;
    }
    this.setState({errors: errors});
    return isValid;
  }

  render() {
    return (
      <BreweryForm
        onChange={this.updateBreweryState}
        onSave={this.saveBrewery}
        brewery={this.state.brewery}
        saving={this.state.saving}
        errors={this.state.errors}
      />
    );
  }
}

BreweriesEdit.propTypes = {
  brewery: PropTypes.object.isRequired,
  saving: PropTypes.bool.isRequired
};

function getBreweryById(breweries, id) {
  const brewery = breweries.filter(brewery => brewery.id == id);
  if (brewery) {
    return brewery[0];
  }
  return null;
}


function mapStateToProps(state, ownProps) {
  const brewId = ownProps.params.id;
  debugger;
  let brewery = {name: "", phone: "", city: ""};
  if (brewId && state.breweries.length > 0) {
    brewery = getBreweryById(state.breweries, brewId);
  }
  return {
    brewery: brewery
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(breweryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BreweriesEdit);
