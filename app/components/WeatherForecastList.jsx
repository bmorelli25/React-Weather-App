var React = require('react');
var moment = require('moment');

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
		return fiveDaySummary;
	},

	getDateStr: function (dateTimeStr) {
		const dateTime = dateTimeStr.split(" ");
		return dateTime[0];
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

		var renderDays = () => {
			//TODO remove first element from list of days
			//TODO cap at 5 days just in case

			if (this.state.isLoading) { //if data hasn't loaded yet
				return <h3 className="text-center">Fetching 5-Day Forecast...</h3>;
			}

			//TODO Return H4 Class as well
			//<h4 className="forecast-title">Forecast for next 5 days</h4>
			return weatherArrayTemp.map((day) => { //once data loads
				day.date_text = moment.unix(day.dt).format('dddd, MMM D');
				return <WeatherForecastDay key={day.dt} {...day}/>
			})
		};

		return (
			<div>
				<p>Hello</p>
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
