var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    //get our props from Weather.jsx
    var {temp, location} = this.props;

    return (
      <div>
        <p>It is {temp}&deg; in {location}</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;
