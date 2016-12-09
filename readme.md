###React Weather Application
**Find the current weather and 5 day forecast of any city on earth with this simple little web app**

###**[Live Demo](http://still-springs-11020.herokuapp.com/)** (needs to be updated. Run locally for most recent demo)

-------------

Simple [React](https://facebook.github.io/react/) web application written with jsx that returns the current weather. The app utilizes:
* [OpenWeatherMap's ](http://openweathermap.org/) API.
* [Webpack](https://webpack.github.io/) for bundling
* [React Router](https://github.com/reactjs/react-router)
* [Axios](https://github.com/mzabriskie/axios) for easy http requests
* [Express](https://expressjs.com/) for a simple server to run our application
* [Foundation](http://foundation.zurb.com/) for styling
* [Sass Loader](https://github.com/jtangelder/sass-loader) & [node-sass](https://github.com/sass/node-sass)

-------------

###HACKTOBERFEST!
This project was featured during DigitalOcean's 2016 HACKTOBERFEST! Thanks to everyone who contributed in both discussion and coding! 

-------------

How to run the app locally:

1. Run ```npm install``` to install all needed dependencies.
2. Navigate to [OpenWeatherMap's ](http://openweathermap.org/) and get a free API key. Then, create a file name ```.env``` in the project root and add the following line: ```API_KEY=yourkeyhere```. This will give you access to API_KEY as a global variable anywhere in the client. It allows you to use your API Key while keeping it secret from everyone else.
3. Get a key to access [Google Places API](https://developers.google.com/places/web-service/get-api-key) and replace `API_KEY` in `index.html` with access key you got from google.
4. If you don't have webpack installed on your machine, run ```npm install webpack -g```.
5. Open up two command prompts. In one, run ```webpack -w```. This lets webpack watch for changes to your files. After any saved changes, webpack automatically runs and updates your ```bundle.js``` file.
6. In the other command prompt run ```npm start``` or ```node server.js```. These commands do the same thing: Starting your server to host the web app.
7. Navigate to ```localhost:3000``` to see the app in action
