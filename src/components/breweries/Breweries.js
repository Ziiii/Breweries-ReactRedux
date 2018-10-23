import React from 'react';
import {connect} from 'react-redux';
import TextInput from '../common/TextInput';
import {Link} from "react-router-dom";
import {loadFilteredBreweries,deleteBrewery} from "../breweries/breweriesActions";
import PropTypes from 'prop-types';

class Breweries extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      breweries: props.breweries,
      filter: {name: "", city: ""}
    };
    this.filterBreweries = this.filterBreweries.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.updateFilterState = this.updateFilterState.bind(this);
    this.deleteBrew = this.deleteBrew.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({breweries: Object.assign([], nextProps.breweries)});
    }
  }

  filterBreweries() {
    let name = this.state.filter.name;
    let city = this.state.filter.city;
    this.props.loadFilteredBreweries(name,city);
  }

  onNameChange(event) {
    this.setState({filterName: event.target.value});
  }

  onCityChange(event) {
    this.setState({filterCity: event.target.value});
  }

  updateFilterState(event) {
    const field = event.target.name;
    let filter = this.state.filter;
    filter[field] = event.target.value;
    return this.setState({filter: filter});
  }

  deleteBrew(breweryId) {
    if (confirm("You sure?")) {
      this.props.deleteBrewery(breweryId);
    }
  }

  render() {
    return (
      <div>
        <h1>Breweries</h1>
        <div>
          <TextInput label="Name" onChange={this.updateFilterState} name="name" placeholder="Name"/>
          <TextInput label="City" onChange={this.updateFilterState} name="city" placeholder="City"/>
          <input type="button" value="Apply" onClick={this.filterBreweries} className="btn btn-primary"/>
          <Link to={'/brewery/'} className="btn btn-primary btn-apply">Add</Link>
        </div>
        <hr/>
        <table className="table">
          <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Phone</th>
          </tr>
          </thead>
          <tbody>
          {this.state.breweries.map((brewery) => {
            return (
              <tr>
                <th><Link to={'/brewery/' + brewery.id}>{brewery.name}</Link></th>
                <th>{brewery.city}</th>
                <th>{brewery.phone}</th>
                <th>
                  <input
                    type="button"
                    onClick={() => this.deleteBrew(brewery.id)}
                    value="Delete"
                    className="btn btn-danger"
                  />
                </th>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

Breweries.propTypes = {
  breweries: PropTypes.array.isRequired,
  loadFilteredBreweries: PropTypes.func.isRr,
  deleteBrewery: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    breweries: state.breweries

  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadFilteredBreweries: (name,city) => {dispatch(loadFilteredBreweries(name,city))},
    deleteBrewery: (breweryId) => {dispatch(deleteBrewery(breweryId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Breweries);
