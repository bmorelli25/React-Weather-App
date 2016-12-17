import React, { Component, PropTypes } from 'react';

export const conditionMap = {
	'Clear': "Clear skies",
	'Thunderstorm': "Thunderstorms and Lightning",
	'Drizzle': "Drizzle",
	'Extreme': "Extreme Weather. Use caution.",
	'Rain': "Rain",
	'Snow': "Snow",
	'Atmosphere': "Fog/Mist",
	'Clouds': "Cloudy with a chance of meatballs"
};

export default class WeatherMessage extends Component {
	generateTip() {
		const condition = String(this.props.condition.main);
		if (condition != 'undefined') {
			return conditionMap[condition] ? conditionMap[condition] : '';
		}
	}

	render() {
		var {temp, location, tempType} = this.props;

		if (tempType === 'C') {
			temp = (temp - 32) * (5/9);
			temp = temp.toFixed(2)
		}

		return (
			<div>
				<h3 className="text-center">It is {Math.round(temp)}&deg;{tempType} in {location}</h3>
				<h3 className="text-center">{this.generateTip()}</h3>
			</div>
		);
	}
}

WeatherMessage.propTypes = {
	temp: PropTypes.number.isRequired,
	location: PropTypes.string.isRequired,
	tempType: PropTypes.string.isRequired,
	condition: PropTypes.shape({
		main: PropTypes.string.isRequired
	}).isRequired
};

module.exports = WeatherMessage;
