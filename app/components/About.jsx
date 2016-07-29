var React = require('react');

//stateless functional component
//don't need createClass or render function
var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a simple weather application built on <a href="https://facebook.github.io/react/" target="_blank">React</a>.</p>
      <p>This app utilizes <a href="http://openweathermap.org/" target="_blank">OpenWeatherMaps</a> API to pull and return current weather data from around the world.</p>
      <p>The source code for this application can be viewed on <a href="https://github.com/bmorelli25/ReactWeather" target="_blank">Github.</a></p>
    </div>
  );
};

module.exports = About;
