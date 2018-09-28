import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Breweries extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      breweries: props.breweries
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({breweries: Object.assign([],nextProps.breweries)});
    }
  }

  render() {
    return (
      <div>
        <h1>Breweries</h1>
        <table className="table">
          <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Phone</th>
          </tr>
          </thead>
          <tbody>
          {this.state.breweries.map((brewerie) => {
            return (
              <tr>
                <th>{brewerie.name}</th>
                <th>{brewerie.city}</th>
                <th>{brewerie.phone}</th>
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
