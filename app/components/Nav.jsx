var React = require('react');
var {Link, IndexLink} = require('react-router');
var IPInfo = require('ipInfo');
var openWeatherMap = require('openWeatherMap');

var Nav = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  componentWillMount: function () {
    IPInfo.getLocation().then(data => {
      const location = data.city;
      if (location !== '') {
        openWeatherMap.getCurrentWeather(location).then(currentWeather => {
          this.setState({
            currentLocation: location,
            temp: currentWeather.main.temp,
    				condition: currentWeather.weather[0]
          });
        });
      }
    });
  },
  onSearch: function (e) {
    e.preventDefault();
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location='+ encodedLocation;
    }
  },
  render: function () {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-middle">
          {(this.state.currentLocation) ? `It is ${this.state.temp} degrees in ${this.state.currentLocation}` : ''}
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" className="custom-search-class" placeholder="Search weather by city" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
