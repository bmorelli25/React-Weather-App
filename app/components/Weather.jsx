var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  handleSearch: function (location) { //function that is called by WeatherForm.jsx's 'this.props.onSearch'
    alert(location);
  },
  render: function () {
    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage/>
      </div>
    );
  }
});

module.exports = Weather;
