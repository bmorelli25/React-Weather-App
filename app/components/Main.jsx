var React = require('react');
var Nav = require('./Nav.jsx');

const Main = React.createClass({
  getInitialState() {
    // returns false if localStorage doesn't exist or localStorage value for react-weather-app is null'
    // otherwise, returns the localStorage value for react-weather-app
    const localStorageVal = (localStorage ) && localStorage.getItem('react-weather-app.temperature');

    return {
      tempType: (localStorageVal) ? localStorageVal : 'F'
    };
  },

  updateTempType( tempType ) {
    this.setState( { tempType } );
    if ( localStorage ) {
      localStorage.setItem('react-weather-app.temperature', tempType );
    }
  },


  render() {
    const childrenWithProps = React.Children.map(this.props.children, child => {
      if (child.type.displayName === 'Weather') {
        return React.cloneElement( child, {
          tempType: this.state.tempType,
          updateTempType: this.updateTempType
        } );
      }

      return child;
    } );

    return (
      <div>
      <Nav tempType={this.state.tempType}/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered weather-form">
          <div>{childrenWithProps}</div>
        </div>
      </div>
    </div>
    )
  }
});

module.exports = Main;
