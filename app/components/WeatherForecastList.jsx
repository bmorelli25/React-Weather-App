var React = require('react');
var moment = require('moment');

var openWeatherMap = require('../api/openWeatherMap.jsx');
var ErrorModal = require('./ErrorModal.jsx');
var WeatherForecastDay = require('./WeatherForecastDay.jsx');

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

	renderError: function () {
		if (typeof errorMessage === 'string'){
			return (
				<ErrorModal message={errorMessage}/>
			)
		};
	},

	render: function () {
		var renderDays = () => {
			if (this.state.isLoading) { //if data hasn't loaded yet
				return <h3 className="text-center">Fetching 5-Day Forecast...</h3>;
			};

			//TODO Return H4 Class as well
			//<h4 className="forecast-title">Forecast for next 5 days</h4>
			//FILTERING OUT DUPLICATES
			// NEEDS FUTURE REFACTORING TO BETTER SELECT TIME TO DISPLAY
			var weatherData = this.state.data;
			var bank = [];
			var today = moment().date();
			var newData = weatherData.filter( (day) => {
				var ApiDate = moment.unix(day.dt).date();
				if (ApiDate === today) {
					return false;
				} else if (bank.indexOf(ApiDate) > -1){
					return false;
				} else {
					bank.push(ApiDate);
					return true;
				};
			});

			return newData.map((day) => {
				day.date_text = moment.unix(day.dt).format('dddd, MMM D');
				return <WeatherForecastDay key={day.dt} {...day}/>
			});
		};

		return (
			<div>
				{this.renderError()}
				{renderDays()}
			</div>
		);
	}
});

module.exports = WeatherForecastList;
