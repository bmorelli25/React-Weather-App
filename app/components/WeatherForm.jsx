import React, { Component, PropTypes } from 'react';
import GoogleAutocomplete from './GoogleAutocomplete.jsx';

export default class WeatherForm extends Component {
	constructor(props) {
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.tempChange = this.tempChange.bind(this);
	}

	onFormSubmit(e) {
		e.preventDefault();
		const location = this.refs.googleAutoComplete.getLocation(); //set variable to location value
		if (location.length > 0){ //check for input
			this.refs.googleAutoComplete.clearLocation(); //clear location value
			this.props.onSearch(location); //run the parent onSearch function (inside weather.jsx)
		}
	}

	tempChange(event) {
		this.props.onTypeChange(event.target.value);
	}

	render() {
		const celsiusChecked = { checked: this.props.tempType === 'C' }
		const fahrenheitChecked = { checked: this.props.tempType === 'F' }

		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<div>
						<GoogleAutocomplete
							style={{width: '90%'}}
							ref="googleAutoComplete"
						/>
					</div>
					<div>
						<fieldset>
							<span style={{ marginRight: '12px' }}>Temperature:</span>
							<input
								ref='temp_c'
								onChange={this.tempChange}
								type='radio'
								name='temperature'
								value='C'
								id='temp_c'
								{...celsiusChecked} />
							<label htmlFor='temp_c'>Celsius</label>

							<input
								onChange={this.tempChange}
								type='radio'
								name='temperature'
								value='F'
								id='temp_f'
								{...fahrenheitChecked} />
							<label htmlFor='temp_f'>Fahrenheit</label>
						</fieldset>
					</div>
					<div>
						<button className='button hollow expanded custom-search-class'>Get Weather</button>
					</div>
				</form>
			</div>
		);
	}
};

WeatherForm.propTypes = {
	onSearch: PropTypes.func.isRequired,
	onTypeChange: PropTypes.func.isRequired,
	tempType: PropTypes.oneOf(['C', 'F']).isRequired
};

WeatherForm.defaultProps = {
	tempType: 'F'
};
