import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BreweryForm from "../breweries/BreweryForm";
import * as breweryActions from "../breweries/breweriesActions";
import PropTypes from 'prop-types';
import ValidationService from "../../tools/ValidationService";


class BreweriesEdit extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      brewery: props.brewery,
      saving: false,
      errors: {name: "", city: "", phone: ""}
    };
    this.updateBreweryState = this.updateBreweryState.bind(this);
    this.saveOrUpdateBrewery = this.saveOrUpdateBrewery.bind(this);
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

  saveOrUpdateBrewery() {
    let isValid;
    let errors;
    [isValid,errors] = ValidationService.validateBrewery(this.state.brewery);
    if (isValid) {
      this.setState({saving: true});
      if(this.state.brewery.id){
          this.props.actions.updateBrewery(this.state.brewery);
      }
      else{
        this.props.actions.saveBrewery(this.state.brewery);
      }
      this.setState({saving: false});
      this.props.history.push("/");
    }
    else{
      this.setState({errors: errors});
    }
  }

  render() {
    return (
      <BreweryForm
        onChange={this.updateBreweryState}
        onSave={this.saveOrUpdateBrewery}
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
  const brewery = breweries.filter(brewery => brewery.id === id);
  if (brewery) {
    return brewery[0];
  }
  return null;
}


function mapStateToProps(state, ownProps) {
  const brewId = ownProps.match.params.id;
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
