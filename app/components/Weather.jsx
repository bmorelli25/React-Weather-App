var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function () {
    return { //by default when we load the app we will see it 88 in Miami
      location: 'Miami',
      temp: 88
    }
  },
  handleSearch: function (location) { //function that is called by WeatherForm.jsx's 'this.props.onSearch'
    //faking our call for now.
    this.setState({
      location: location,
      temp: 23
    });
  },
  render: function () {

    //get our variables from state so they can be passed as props
    var {temp, location} = this.state;

    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;
