'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import WeatherMessage, { conditionMap }  from '../../components/WeatherMessage.jsx';

describe('Weather Message', () => {
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
		const conditionValue = conditionMap['Clear'];
		const message = shallow(<WeatherMessage location="" temp={45} condition={condition} />);
		expect(message.text()).to.contain(conditionValue);
	});
})
