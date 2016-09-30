var axios = require('axios');

const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=imperial`;

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) { //if true, something went wrong
        throw new Error(res.data.message); //send to error handler in Weather.jsx
      } else {
        return res.data.main.temp; //send to success case in Weather.jsx
      }
    }, function (res) {
      throw new Error(res.data.message); //if api sends an error, we pull then show to user
    });
  }
};
