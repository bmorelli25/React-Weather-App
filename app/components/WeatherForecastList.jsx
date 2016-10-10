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
			};

			var weatherData = this.state.data;
			console.log(weatherData);
			//TODO Return H4 Class as well
			//<h4 className="forecast-title">Forecast for next 5 days</h4>
			//return weatherArrayTemp.map((day) => { //once data loads
			return weatherData.map((day) => {
				day.date_text = moment.unix(day.dt).format('dddd, MMM D');
				return <WeatherForecastDay key={day.dt} {...day}/>
			});
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
