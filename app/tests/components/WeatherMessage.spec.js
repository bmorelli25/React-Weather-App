'use strict';

const React = require('react');
const shallow = require('enzyme').shallow;
const expect = require('chai').expect;

const WeatherMessage = require('../../components/WeatherMessage.jsx');

describe.only('Weather Message', () => {
	it('should render', () => {
		const message = shallow(<WeatherMessage location="" temp={45} condition={{}}/>);
		expect(message).to.exist;
	});

	it('displays the given temp', () => {
		const temp = 45.01;
		const message = shallow(<WeatherMessage location="" temp={temp} condition={{}}/>);
		expect(message.text()).to.contain(temp);
	});

	it('displays the given location', () => {
		const location = "Moscow";
		const message = shallow(<WeatherMessage location={location} temp={45} condition={{}}/>);
		expect(message.text()).to.contain(location);
	});

	it('displays the main condition, if specified', () => {
		const condition = {
			main: 'Clear'
		};
		const conditionValue = 'Clear blue skies'; // From WeatherMessage.jsx
		const message = shallow(<WeatherMessage location="" temp={45} condition={condition} />);
		expect(message.text()).to.contain(conditionValue);
	});
})
