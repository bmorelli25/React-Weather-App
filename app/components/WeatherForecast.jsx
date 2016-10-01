var React = require('react');

var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var WeatherForecast = React.createClass({

	getInitialState: function () {
		return {
			isLoading: true,
			errorMessage: null,
			data: null
		};
	},

	componentWillMount: function () {
		openWeatherMap.get5DayForecast(this.props.location).then(weatherForecast => {
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
			<div>
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
			<div>
				{fiveDaySummary.map(this.renderWeatherSummary)}
			</div>
		);
	},

	renderWeatherSummary: function (weatherData, index) {
		const date = this.getDate(weatherData.dt_txt);
		const temp = weatherData.main.temp;
		const weather = weatherData.weather[0];
		return (
			<div key={index} className="row">
				<div className="small-8 medium-6 small-centered column">
					<div className="forecast-container">
						<h4>{index === 0 ? 'Tomorrow' : date}</h4>
						<div className="row collapse">
							<div className="small-2 column weather-icon">
								<i className={`wi wi-owm-${weather.id}`} />
							</div>
							<div className="small-10 column">
								{weatherData.main.temp}&deg; / {weather.main}
							</div>
						</div>
					</div>
				</div>
			</div>);
	},

	getFiveDaySummary: function (fullData) {
		// get an array of unique dates from the returned API data
		const dates = [... new Set(fullData.map(data => this.getDate(data.dt_txt)))];

		const fiveDaySummary = [...dates].map((date => {
			const threeHourlyWeatherForDay = fullData.filter(data => {
				if (date === this.getDate(data.dt_txt)) {
					return data.weather;
				}
			});
			// TODO?: think about what time's weather to return as the day's forecasted weather
			return threeHourlyWeatherForDay[0];
		}))
		fiveDaySummary.splice(0, 1);	// API returns 6 days's data (i.e. includes today)
		return fiveDaySummary;
	},

	getDate: function (dateTimeStr) {
		const dateTime = dateTimeStr.split(" ");
		return dateTime[0];
	}

});

module.exports = WeatherForecast;
