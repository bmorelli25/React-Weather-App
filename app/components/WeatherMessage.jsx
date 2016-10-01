var React = require('react');

var WeatherMessage = React.createClass({
	generateTip: function () {
    var condition = String(this.props.condition.main);
    if (condition != 'undefined') {
      var conditionMap = {
        'Clear': "Clear blue skies",
        'Thunderstorm': "Stay in bed today.",
        'Drizzle': "Grab a book and a cup of coffee",
        'Extreme': "Dammit global warming.",
        'Rain': "It's a beautiful sunny day. Just Kiddding. It's pouring",
        'Snow': "Colder than your dating streak",
        'Atmosphere': "Mist is in the air.",
        'Clouds': "Cloudy with a chance of meatballs"
      };
      return conditionMap[condition] ? conditionMap[condition] : '';
    };
  },
  render: function() {
  	var {temp, location} = this.props;
    return (
	  	<div>
	      <h3 className="text-center">It is {temp}&deg; in {location}</h3>
	      <h3 className="text-center">{this.generateTip()}</h3>
	    </div>
  	);
  }
});
module.exports = WeatherMessage;
