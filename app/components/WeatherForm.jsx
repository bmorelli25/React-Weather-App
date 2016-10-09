var React = require('react');
var GoogleAutocomplete = require('./GoogleAutocomplete.jsx');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var location = this.refs.googleAutoComplete.getLocation(); //set variable to location value
    if (location.length > 0){ //check for input
			this.refs.googleAutoComplete.clearLocation(); //clear location value
			this.props.onSearch(location); //run the parent onSearch function (inside weather.jsx)
    }
  },
  render: function() {
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
            <button className="button hollow expanded custom-search-class">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
