var React = require('react');

var GoogleAutocomplete = React.createClass({
	componentDidMount: function() {
		const { types=['(cities)'] } = this.props;
		this.autocomplete = new google.maps.places.Autocomplete(this.refs.location, {
		  types,
		});
		this.autocomplete.addListener('place_changed', this.onSelected);
	},

	onSelected: function () {
		if (this.props.onPlaceSelected) {
			this.props.onPlaceSelected(this.autocomplete.getPlace());
		}
	},

	getLocation: function() {
		return this.refs.location.value;
	},

	clearLocation: function() {
		this.refs.location.value = '';
	},

	render: function () {
		return (
			<div>
				<input type="search" className="custom-search-class" placeholder="Search weather by city" ref="location"/>
			</div>
		);
	}
});

module.exports = GoogleAutocomplete;
