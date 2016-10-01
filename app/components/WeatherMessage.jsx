var React = require('react');

var WeatherMessage = ({temp, location}) => {  //get our props from Weather.jsx with ES6 destructuring
  return (
      <h3 className="text-center">It is currently {temp}&deg; in {location}.</h3>
  );
}

module.exports = WeatherMessage;
