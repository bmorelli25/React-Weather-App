var React = require('react');

var WeatherMessage = ({temp, location}) => {  //get our props from Weather.jsx with ES6 destructuring
  return (
    <div>
      <p>It is {temp}&deg; in {location}</p>
    </div>
  );
}

module.exports = WeatherMessage;
