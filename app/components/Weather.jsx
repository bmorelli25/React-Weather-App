var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) { //function that is called by WeatherForm.jsx's 'this.props.onSearch'
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
			condition: undefined
    });

    openWeatherMap.getCurrentWeather(location).then(function (currentWeather) {
      that.setState({
        location: location,
        temp: currentWeather.main.temp,
				condition: currentWeather.weather[0].id,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/'; //reset url after the search
    }
  },
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

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
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

				var conditionCode = String(condition).charAt(0);
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
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
				{setBodyClass()}
      </div>
    )
  }
});

module.exports = Weather;
