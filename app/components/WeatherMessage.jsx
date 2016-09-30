var React = require('react');

var WeatherMessage = React.createClass({

  render: function() {
  	var {temp, location} = this.props
    return (
	  	<div>
	      <h3 className="text-center">It is {temp}&deg; in {location}</h3>
	      <h3 className="text-center"></h3>
	    </div>
  	);
  }
});
module.exports = WeatherMessage;
