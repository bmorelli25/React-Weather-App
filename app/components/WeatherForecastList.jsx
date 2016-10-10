var React = require('react');

var dateFormatter = require('../utils/dateFormatter.jsx');
var openWeatherMap = require('../api/openWeatherMap.jsx');
var ErrorModal = require('./ErrorModal.jsx');
var WeatherForecastDay = require('./WeatherForecastDay.jsx');
var weatherArrayTemp = require('./WeatherArrayTemp.jsx');

var WeatherForecastList = React.createClass({

	getInitialState: function () {
		console.log("1");
		return {
			isLoading: true,
			errorMessage: null,
			data: null
		};
	},

	componentWillMount: function () {
		console.log("componentWillMount");
		openWeatherMap.getWeather('forecast', this.props.location).then(weatherForecast => {
			this.setState({
        isLoading: false,
        data: weatherForecast.list
      });
    }, e => {
      this.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
	},

	renderWeatherSummary: function (weatherData, index) {
		console.log("3");
		{this.renderError()}
		const dateTimeStr = this.state.data.dt_txt;
		const temp = this.state.data.main.temp;
		const weather = this.state.data.weather[0];
		return (
			<div key={index} className="row">
				<div className="small-10 small-centered column">
					<div className="forecast-container">
						<h4>{index === 0 ? 'Tomorrow' : dateFormatter.getDayDateLabel(dateTimeStr)}</h4>
						<div className="row collapse">
							<div className="small-2 medium-3 column weather-icon">
								<i className={`wi wi-owm-${weather.id}`} />
							</div>
							<div className="small-10 medium-9 column">
								{this.state.data.main.temp}&deg;
								<br />
								{weather.description}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},

	getFiveDaySummary: function () {
		console.log("4");
		// get an array of unique date strings from the returned API data
		const dates = [... new Set(this.state.data.map(data => this.getDateStr(data.dt_txt)))];

		const fiveDaySummary = [...dates].map((date => {
			const threeHourlyWeatherForDay = this.state.data.filter(data => {
				if (date === this.getDateStr(data.dt_txt)) {
					return data.weather;
				}
			});
			// TODO?: think about what time's weather to return as the day's forecasted weather
			return threeHourlyWeatherForDay[0];
		}))
		fiveDaySummary.splice(0, 1);	// API returns 6 days's data (i.e. includes today)
		console.log("Five Day Summary: ");
		console.log(fiveDaySummary);
		return fiveDaySummary;
	},

	getDateStr: function (dateTimeStr) {
		//called from getFiveDaySummary()
		console.log("5");
		const dateTime = dateTimeStr.split(" ");
		return dateTime[0];
	},

	//CHECKS IF DATA HAS BEEN FETCHED. IF SO, FORMATS RETURNED DATA. CALLED BY RENDER()
	renderForecast: function() {
		console.log("2");
  	if (this.state.isLoading) {
  		return <h3 className="text-center">Fetching 5-Day Forecast...</h3>;
  	}

		const fiveDaySummary = this.getFiveDaySummary();
  	return (
			<div>
				<h4 className="forecast-title">Forecast for next 5 days</h4>
				{this.getFiveDaySummary.map(this.renderWeatherSummary)}
			</div>
		);
  },

	//RENDERS AN ERROR IF ENCOUNTERED. CALLED BY RENDER()
	renderError: function () {
		if (typeof errorMessage === 'string'){
			return (
				<ErrorModal message={errorMessage}/>
			)
		};
	},

	render: function () {
		//const fiveDaySummary = this.getFiveDaySummary();

		var renderDays = () => {
			return weatherArrayTemp.map((day) => {
				return <WeatherForecastDay key={day.dt} {...day}/>
			})
		};

		return (
			<div>
				<p>Hello</p>
				{this.renderForecast()}
				{this.renderError()}
				{renderDays()}
			</div>
		);
	}
});

module.exports = WeatherForecastList;

// {this.renderForecast()}
// {fiveDaySummary.map(this.renderWeatherSummary)}
// {renderError()}
