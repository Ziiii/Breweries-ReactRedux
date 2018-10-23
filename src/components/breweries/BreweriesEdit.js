import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BreweryForm from "../breweries/BreweryForm";
import {updateBrewery,saveBrewery} from "../breweries/breweriesActions";
import PropTypes from 'prop-types';
import ValidationService from "../../tools/ValidationService";


class BreweriesEdit extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log(props);
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
        this.props.updateBrewery(this.state.brewery);
      }
      else{
        this.props.saveBrewery(this.state.brewery);
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
  saving: PropTypes.bool.isRequired,
  updateBrewery:PropTypes.func.isRequired,
  saveBrewery:PropTypes.func.isRequired
};

function getBreweryById(breweries, id) {
  for(let i = 0; i < breweries.length; i++){
      if(breweries[i].id == id){
         return breweries[i];
      }
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
    updateBrewery:(brew) => {dispatch(updateBrewery(brew))},
    saveBrewery:(brew) => {dispatch(saveBrewery(brew))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreweriesEdit);
