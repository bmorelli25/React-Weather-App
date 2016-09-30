###React Weather Application

###**[Live Demo](http://still-springs-11020.herokuapp.com/)**

-------------

Simple [React](https://facebook.github.io/react/) web application written with jsx that returns the current weather. The app utilizes:
* [OpenWeatherMap's ](http://openweathermap.org/) API.
* [Webpack](https://webpack.github.io/) for bundling
* [React Router](https://github.com/reactjs/react-router)
* [Axios](https://github.com/mzabriskie/axios) for easy http requests
* [Express](https://expressjs.com/) for a simple server to run our application
* [Foundation](http://foundation.zurb.com/) for styling
* [Sass Loader](https://github.com/jtangelder/sass-loader) & [node-sass](https://github.com/sass/node-sass)

####API KEY
To securely enter you OpenWeatherMap API key, simply create a `.env` file in the project root and add the following line:
`API_KEY=yourkeyhere`.
You will then have access to API key as a global variable anywhere in the client.
