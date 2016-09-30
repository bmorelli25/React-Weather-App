var React = require('react');

var WeatherMessage = React.createClass({
	generateTip: function () {
    if(this.props.weather[0].main == "Clouds"){
    	return "Testing"
    }
  },
  render: function() {
  	var {temp, location} = this.props
  	var tip = this.generateTip();
    return (
	  	<div>
	      <h3 className="text-center">It is {temp}&deg; in {location}</h3>
	      <h3 className="text-center">{tip}</h3>
	    </div>
  	);
  }
});
module.exports = WeatherMessage;
