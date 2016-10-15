var React = require('react');

var WeatherForecastDay = React.createClass({
	render: function () {
		var date = this.props.date_text;
		var temp = this.props.main.temp;
		var weather = this.props.weather[0];
		var tempType = this.props.tempType;
		//need to add support for 'tomorrow'

		if (tempType === 'C') {
      temp = ((temp - 32) * (5/9)).toFixed(2);
    }

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
									{Math.round(temp)}&deg;{tempType}
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
