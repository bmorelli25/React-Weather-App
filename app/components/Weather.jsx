import React, { useState, useEffect } from 'react';

var WeatherForm = require('./WeatherForm.jsx');
var WeatherMessage = require('./WeatherMessage.jsx');
var WeatherForecastList = require('./WeatherForecastList.jsx');
var openWeatherMap = require('../api/openWeatherMap.jsx');
var ErrorModal = require('./ErrorModal.jsx');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) { //function that is called by WeatherForm.jsx's 'this.props.onSearch'
		
		const [isLoading, setIsLoading] = useState(true);
		const [errorMessage, setErrorMessage] = useState(undefined);
		const [location, setLocation] = useState(undefined);
		const [temp, setTemp] = useState(undefined);
		const [condition, setCondition] = useState(undefined);
		
    openWeatherMap.getWeather('weather', location).then(currentWeather => {
			setIsLoading(false);
			setLocation(currentWeather.name + ", " + currentWeather.sys.country) || location);
			setTemp(currentWeather.main.temp);
			setCondition(currentWeather.weather[0]);
    }, e => {
			setIsLoading(false);
			setErrorMessage(e.message);
    });
  },
	
	useEffect(() => {
		setLocation(this.props.location.query.location);

		if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/'; //reset url after the search
    }
	}
	
  componentWillReceiveProps: function (newProps) { //called any time components props get updated
    //we can pull updated location and make the search just like above
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/'; //reset url after the search
    }
  },
  render: function () {

    //get our variables from state so they can be passed as props
    var {isLoading, temp, condition, location, errorMessage} = this.state;
    const tempType = this.props.tempType;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if (temp && location && condition) {
        return <WeatherMessage location={location} temp={temp} tempType={tempType} condition={condition} />;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

		function setBodyClass () {
			if (typeof condition != 'undefined') {
				// Map condition codes to conditions using http://openweathermap.org/weather-conditions
				var conditionMap = {
					'2': 'thunderstorm',
					'3': 'drizzle',
					'5': 'rain',
					'6': 'snow',
					'7': 'atmosphere',
					'8': 'clouds'
				}

				var conditionCode = String(condition.id).charAt(0);
				var conditionClass = conditionMap[conditionCode] ? 'condition-' + conditionMap[conditionCode] : '';

				// Works but will cause issues if body classes need to be added anywhere else
				// Needs refactoring.
				document.body.classList = "";
				document.body.classList.add(conditionClass);
			}
		}

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} onTypeChange={this.props.updateTempType} tempType={this.props.tempType} />
        {renderMessage()}
        {location && <WeatherForecastList location={location} tempType={this.props.tempType} />}
        {renderError()}
				{setBodyClass()}
      </div>
    )
  }
});

module.exports = Weather;
