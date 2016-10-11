var React = require('react');

var openWeatherMap = require('../api/openWeatherMap.jsx');
var ErrorModal = require('./ErrorModal.jsx');

var WeatherForecastDay = React.createClass({
	render: function () {
		var day = this.props.day_text;
		var date = this.props.date_text;
		var temp = this.props.main.temp;
		var weather = this.props.weather[0];
		var tempType = this.props.tempType;
		//need to add support for 'tomorrow'
		
		if (tempType === 'C') {
      temp = ((temp - 32) * (5/9)).toFixed(2);
    };

		return (
			<div className="day">
				<div>
					<h4>
						<span className="dayLabel">{day}, </span>
						<span className="dateLabel">{date}</span>
					</h4>
					<div className="row collapse">
						<div className="weather-icon">
							<i className={`wi wi-owm-${weather.id}`} />
						</div>
						<div>
							{temp}&deg; {tempType}
							<br />
							{weather.description}
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = WeatherForecastDay;
