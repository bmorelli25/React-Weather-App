var React = require('react');

var dateFormatter = require('../utils/dateFormatter.jsx');
var openWeatherMap = require('../api/openWeatherMap.jsx');
var ErrorModal = require('./ErrorModal.jsx');

var WeatherForecastDay = React.createClass({

	render: function () {
		console.log(this.props);
		//const fiveDaySummary = this.getFiveDaySummary();
		// console.log("3");
		//
		// const dateTimeStr = this.props.dt_txt;
		// const temp = this.props.main.temp;
		// const weather = this.props.weather[0];
		//
		// return (
		// 	<div key={index} className="row">
		// 		<div className="small-10 small-centered column">
		// 			<div className="forecast-container">
		// 				<h4>{index === 0 ? 'Tomorrow' : dateFormatter.getDayDateLabel(dateTimeStr)}</h4>
		// 				<div className="row collapse">
		// 					<div className="small-2 medium-3 column weather-icon">
		// 						<i className={`wi wi-owm-${weather.id}`} />
		// 					</div>
		// 					<div className="small-10 medium-9 column">
		// 						{this.props.data.main.temp}&deg;
		// 						<br />
		// 						{weather.description}
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// );
		return (
			<h1>Weather Forecast Day</h1>
		);
	}
});

module.exports = WeatherForecastDay;

// {this.renderForecast()}
// {fiveDaySummary.map(this.renderWeatherSummary)}
// {renderError()}
