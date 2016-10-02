'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;
const OpenWeatherMap = require('../../api/openWeatherMap.jsx');

describe('React Weather App', () => {
	// it should exist
	it('OpenWeatherMap should exist', () => {
			expect(OpenWeatherMap).to.exist;
	});

	// getCurrentWeather tests
	describe('Fetching current weather for a given location', () => {
		// ways it should handle working correctly
		it('OpenWeatherMap should fetch weather for a given location (City Name)', () => {
			return OpenWeatherMap.getCurrentWeather('New York City').then(result => {
				expect(result.name).to.equal('New York');
			});
		});

		it('OpenWeatherMap should fetch weather for a given location (City comma State Abbreviation)', () => {
			return OpenWeatherMap.getCurrentWeather('Brooklyn,New York').then(result => {
				expect(result.name).to.equal('New York');
			});
		});

		it('OpenWeatherMap should fetch weather for a given location (City comma State)', () => {
			return OpenWeatherMap.getCurrentWeather('Brooklyn,New York').then(result => {
				expect(result.name).to.equal('New York');
			});
		});

		// ways it should handle breaking
		it('OpenWeatherMap should raise an error when given a fake location', () => {
			return OpenWeatherMap.getCurrentWeather('89h34f98nsdv8998').catch(err => {
				expect(err).throw
			});
		});
	});

	// get5DayForecast tests
	describe('Fetching 5 day weather forecast for a given location', () => {
		// ways it should handle working correctly
		it('OpenWeatherMap should fetch 5 day weather forcast for a given location (City Name)', () => {
			return OpenWeatherMap.get5DayForecast('Seattle').then(result => {
				expect(result.city.name);
			});
		});

		it('OpenWeatherMap should fetches 5 days of weather', () => {
			return OpenWeatherMap.get5DayForecast('Seattle').then(result => {
				let startDate = new Date(result.list[0].dt_txt);
				let endDate = new Date(result.list[result.list.length-1].dt_txt);
				let timeDifference = Math.abs(endDate - startDate);
				// the number of milliseconds per day: 1000 * 3600 * 24
				let dateDifference = Math.ceil(timeDifference/(1000 * 3600 * 24));

				expect(dateDifference).to.equal(5);
			});
		});

		it('OpenWeatherMap should fetch 5 day weather forcast for a given location (City Name)', () => {
			return OpenWeatherMap.get5DayForecast('asdf').catch(err => {
				expect(err).throw;
			});
		});
	});
});
