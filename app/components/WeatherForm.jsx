var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
  },
  render: function() {
    return (
      <div>
        <form>
          <div>
            <input type="text" placeholder="Enter Location"/>
          </div>
          <div>
            <button>Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
