const React = require('react');

const dateFormatter = require('../utils/dateFormatter.jsx');
const openWeatherMap = require('../api/openWeatherMap.jsx');
const ErrorModal = require('./ErrorModal.jsx');

const WeatherForecast = React.createClass({

	getInitialState: function () {
		return {
			isLoading: true,
			errorMessage: null,
			data: null
		};
	},

	componentWillMount: function () {
		openWeatherMap.getWeather('forecast', this.props.location).then(weatherForecast => {
			const forecastData = weatherForecast.list;
			this.setState({
        isLoading: false,
        data: forecastData
      });
    }, e => {
      this.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
	},

	render: function () {
		const { isLoading, errorMessage } = this.state;
		const hasError = !isLoading && errorMessage;
		return (
			<div>
				{hasError ? <ErrorModal message={errorMessage} /> : this.renderForecast()}
			</div>
		);
	},

  renderForecast: function() {
  	if (this.state.isLoading) {
  		return <h3 className="text-center">Fetching 5-Day Forecast...</h3>;
  	}

  	return (
			<div className="forecast-container">
				<h4 className="forecast-title">Forecast for next 5 days</h4>
				<DailyWeatherList data={this.state.data} />
			</div>
		);
  }

});

var DailyWeatherList = React.createClass({

	render: function () {
		const fiveDaySummary = this.getFiveDaySummary(this.props.data);
		return (
			<div className="small-12 days">
				{fiveDaySummary.map(this.renderWeatherSummary)}
			</div>
		);
	},

	renderWeatherSummary: function (weatherData, index) {
		const dateTimeStr = weatherData.dt_txt;
		const temp = weatherData.main.temp;
		const weather = weatherData.weather[0];
		return (
			<div key={index} className="day">
				<div className="">
					<h4>
						<span className="dayLabel">{index === 0 ? 'Tomorrow' : dateFormatter.getDayLabel(dateTimeStr) + ', '}</span>
						<span className="dateLabel">{index === 0 ? '\u00a0' : dateFormatter.getDateLabel(dateTimeStr)}</span>
					</h4>
					<div className="row collapse">
						<div className="weather-icon">
							<i className={`wi wi-owm-${weather.id}`} />
						</div>
						<div className="">
							{weatherData.main.temp}&deg;
							<br />
							{weather.description}
						</div>
					</div>
				</div>
			</div>);
	},

	getFiveDaySummary: function (fullData) {
		// get an array of unique date strings from the returned API data
		const dates = [... new Set(fullData.map(data => this.getDateStr(data.dt_txt)))];

		const fiveDaySummary = [...dates].map((date => {
			const threeHourlyWeatherForDay = fullData.filter(data => {
				if (date === this.getDateStr(data.dt_txt)) {
					return data.weather;
				}
			});
			// TODO?: think about what time's weather to return as the day's forecasted weather
			return threeHourlyWeatherForDay[0];
		}))
		fiveDaySummary.splice(0, 1);	// API returns 6 days's data (i.e. includes today)
		return fiveDaySummary;
	},

	getDateStr: function (dateTimeStr) {
		const dateTime = dateTimeStr.split(" ");
		return dateTime[0];
	}

});

module.exports = WeatherForecast;
