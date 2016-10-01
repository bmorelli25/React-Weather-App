'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;
const OpenWeatherMap = require('../../api/openWeatherMap.jsx');

describe('React Weather App API Usage', () => {
	// it should exist
	it('OpenWeatherMap should exist', () => {
			expect(OpenWeatherMap).to.exist;
	});

	// it should fetch weather for a given location
	it('OpenWeatherMap should fetch weather for a given location', () => {
		let fetchWeatherPromise = OpenWeatherMap.getCurrentWeather('New York City');
		console.log(fetchWeatherPromise);
		console.log(fetchWeatherPromise.load);

		// fetchWeatherPromise.all(function(data) {
		// 	console.log(data);
		// });
	});
});
