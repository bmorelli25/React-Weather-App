var React = require('react');

var WeatherMessage = React.createClass({
	generateTip: function () {
    switch (this.props.weather[0].main) {
			case "Clouds":
			    return "Rain rain go away...";
			case "Atmosphere":
			    return "";
			case "Clear":
			    return "Clear blue sky";
			case "Extreme":
				if(this.props.weather[0].main.id == 904)
			    return "Dammit global warming.";
			case "Thunderstorm":
			    return "Stay in bed.";
			case "Drizzle":
			    return "Grab a cup of coffee and read a book.";
			case "Rain":
			    return "It's a beautiful sunny day. Just Kiddding. It's pouring";
			case "Snow":
			    return "It's ducking freezing";
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
