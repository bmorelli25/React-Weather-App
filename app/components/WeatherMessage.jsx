var React = require('react');

var WeatherMessage = React.createClass({
	//Have hard coded a few messages.
	//In future, the tips for each category can be chosen from an array of similar messages. 
	randomizeTip:function(){
	  var index = Math.floor(Math.random() * tips.length);
	  return tips[index];
	},
	generateTip: function () {
    switch (this.props.weather[0].main) {
			case "Clouds":
			    return "It's a beautiful sunny day. Just Kidding. Grab your umbrellas.";
			case "Atmosphere":
			    return "Uhmm...";
			case "Clear":
			    return "Clear blue skies";
			case "Extreme":
				if(this.props.weather[0].main.id == 904)
			    return "Dammit global warming.";
			case "Thunderstorm":
			    return "Stay in bed.";
			case "Drizzle":
			    return "Grab a cup of coffee and read a book.";
			case "Rain":
			    return "It's a beautiful sunny day. Just Kiddding. It's pouring!";
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
