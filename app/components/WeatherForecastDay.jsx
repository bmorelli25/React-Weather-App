var React = require('react');
var moment = require('moment');

var openWeatherMap = require('../api/openWeatherMap.jsx');
var ErrorModal = require('./ErrorModal.jsx');

var WeatherForecastDay = React.createClass({

	render: function () {
		const date = this.props.date_text;
		const temp = this.props.main.temp;
		const weather = this.props.weather[0];
		var todaysDate = moment().date();
		//need to add support for 'tomorrow'

		return (
			<div>
				<div className="row">
					<div className="small-10 small-centered column">
						<div className="forecast-container">
							<h4>{date}</h4>
							<div className="row collapse">
								<div className="small-2 medium-3 column weather-icon">
									<i className={`wi wi-owm-${weather.id}`} />
								</div>
								<div className="small-10 medium-9 column">
									{temp}&deg;
									<br />
									{weather.description}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = WeatherForecastDay;
