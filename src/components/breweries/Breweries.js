import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TextInput from '../common/TextInput';
import {Link} from 'react-router';

class Breweries extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      breweries: props.breweries,
      filterName: "",
      filterCity: ""
    };
    this.filterBreweries = this.filterBreweries.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({breweries: Object.assign([],nextProps.breweries)});
    }
  }

  filterBreweries(){
    debugger;
    let bres = this.state.breweries;
    if(this.state.filterName){
      bres = bres.filter(x=>x.name.indexOf(this.state.filterName)!=-1)
    }
    if(this.state.filterCity){
      bres = bres.filter(x=>x.city.indexOf(this.state.filterCity)!=-1)
    }
    if(!this.state.filterName && !this.state.filterCity){
      bres = this.props.breweries;
    }
    this.setState({breweries: bres})
  }

  onNameChange(event){
    this.setState({filterName: event.target.value});
  }

  onCityChange(event){
    this.setState({filterCity: event.target.value});
  }


  render() {
    return (
      <div>
        <h1>Breweries</h1>
        <TextInput label="Name" onChange={this.onNameChange} name="Name" placeholder="Name"/>
        <TextInput label="City" onChange={this.onCityChange} name="City" placeholder="City"/>

        <input type="submit" value="Apply" onClick={this.filterBreweries} className="btn btn-primary"></input>
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
                <th><Link to={'/brewery/'+brewery.id}>{brewery.name}</Link></th>
                <th>{brewery.city}</th>
                <th>{brewery.phone}</th>
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
  breweries: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    breweries: state.breweries
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Breweries);
