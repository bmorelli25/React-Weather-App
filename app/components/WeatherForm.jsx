var React = require('react');
var autocomplete = require("../api/placesAutocomplete")
var Autosuggest = require("react-autosuggest")

var WeatherForm = React.createClass({
	getInitialState: function () {
		return {
			suggestions: [],
			input: ""
		}
	},
	onFormSubmit: function (e) {
		e.preventDefault();
		var location = this.state.input; //set variable to location value
		if (location.length > 0) { //check for input
			this.setState({
				input: "",
				suggestions: []
			}); //clear location value
			this.props.onSearch(location); //run the parent onSearch function (inside weather.jsx)
		}
	},
	render: function () {
		var that = this;
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<div>
						<Autosuggest
							suggestions={this.state.suggestions}
							renderSuggestion={suggestion => {
								return (
									<span className="search-item">{suggestion}</span>
								)
							}}
							getSuggestionValue={suggestion => {
								return suggestion
							}}
							inputProps={{
								value: this.state.input,
								onChange: (evt, {newValue}) => {
									this.setState({
										input: newValue
									})
								},
								placeholder: "Search weather by city"
							}}
							alwaysRenderSuggestions={true}
							onSuggestionsFetchRequested={({value}) => {
								autocomplete.getOptions(value).then(res => {
									that.setState({
										suggestions: res
									})
								}, () => {
									console.log("No suggestions found")
								})
							}}
						/>
					</div>
					<div>
						<button className="button hollow expanded custom-search-class">Get Weather</button>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = WeatherForm;
