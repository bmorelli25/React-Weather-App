var React = require('react');

var WeatherMessage = React.createClass({
	// Can be refactored to pick up random tips from a map/dictionary (keys -> conditions)
	generateTip: function () {
    switch (this.props.condition.main) {
			case 'Clouds':
			    return "Cloudy with a chance of meatballs";
			case 'Atmosphere':
			    return str.strike("Love") + "Mist is in the air.";
			case 'Clear':
			    return "Clear blue skies";
			case 'Extreme':
			    return "Dammit global warming.";
			case 'Thunderstorm':
			    return "Stay in bed today.";
			case 'Drizzle':
			    return "Grab a book and a cup of coffee";
			case 'Rain':
			    return "It's a beautiful sunny day. Just Kiddding. It's pouring";
			case 'Snow':
			    return "Colder than your dating streak";
			default : return "For more details, look out the window."
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
