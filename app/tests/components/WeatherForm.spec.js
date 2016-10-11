'use strict';

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import WeatherForm from '../../components/WeatherForm.jsx';

// Create a global object for dealing with the dependency
// on the google autocompleter
global.google = {
	maps: {
		places: {
			Autocomplete: function() {
				return {
					addListener: () => {},
				};
			}
		}
	}
}

const noOp = () => {};

describe('Weather Form', () => {
	it('should render', () => {
		const weatherForm = shallow(<WeatherForm
			onSearch={noOp}
			onTypeChange={noOp} />);

		expect(weatherForm).to.exist;
	})

	it('should check the celcius radio when the prop `tempType` is set to `C`', () => {
		const weatherForm = shallow(<WeatherForm
			onSearch={noOp}
			onTypeChange={noOp}
			tempType="C" />);

		expect(weatherForm.find('#temp_c').prop('checked')).to.be.true;
		expect(weatherForm.find('#temp_f').prop('checked')).to.be.false;
	});

	it('should check the farneheit radio when the prop `tempType` is set to `F`', () => {
		const weatherForm = shallow(<WeatherForm
			onSearch={noOp}
			onTypeChange={noOp}
			tempType="F" />);

		expect(weatherForm.find('#temp_c').prop('checked')).to.be.false;
		expect(weatherForm.find('#temp_f').prop('checked')).to.be.true;
	})

	it('should check the farneheit radio when the prop `tempType` is not defined', () => {
		const weatherForm = shallow(<WeatherForm
			onSearch={noOp}
			onTypeChange={noOp} />);

		expect(weatherForm.find('#temp_c').prop('checked')).to.be.false;
		expect(weatherForm.find('#temp_f').prop('checked')).to.be.true;
	})

	it('should call `onTypeChange` with the correct temp type when the temp radio is changed', (done) => {
		const weatherForm = mount(<WeatherForm
			onSearch={noOp}
			onTypeChange={newTempValue => {
				expect(newTempValue).to.equal('F');
				done();
			}}
			tempType="C"/>);

		const farenheitTempRadio = weatherForm.find('#temp_f');
		farenheitTempRadio.simulate('change');
	});

	it('should call `onSearch` with the input\s value when the form is submitted', (done) => {
		const searchValue = 'Shanghai';
		const weatherForm = mount(<WeatherForm
			onSearch={(value) => {
				expect(value).to.equal(searchValue);
				done();
			}}
			onTypeChange={noOp}
			tempType="C"/>);

		const form = weatherForm.find('form');

		// Replace the autocomplete internal `getLocation` function for testing
		weatherForm.ref('googleAutoComplete')
			.nodes[0].getLocation = () => searchValue;

		form.simulate('submit');
	});


});
