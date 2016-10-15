###React Weather Application

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

Want to contribute? Here's how:

1. First ```fork``` and ```star``` the project.
2. Run ```npm install``` to install all needed dependencies.
3. Navigate to [OpenWeatherMap's ](http://openweathermap.org/) and get a free API key. Then, create a file name ```.env``` in the project root and add the following line: ```API_KEY=yourkeyhere```. This will give you access to API_KEY as a global variable anywhere in the client. It allows you to use your API Key while keeping it secret from everyone else.
4. Get a key to access [Google Places API](https://developers.google.com/places/web-service/get-api-key) and replace `API_KEY` in `index.html` with access key you got from google.
5. If you don't have webpack installed on your machine, run ```npm install webpack -g```.
6. Open up two command prompts. In one, run ```webpack -w```. This lets webpack watch for changes to your files. After any saved changes, webpack automatically runs and updates your ```bundle.js``` file.
7. In the other command prompt run ```npm start``` or ```node server.js```. These commands do the same thing: Starting your server to host the web app.
8. Navigate to ```localhost:3000``` to see the app in action
9. Browse the open issues, join the discussion, and push your code. All accepted Pull Requests will have their names added as contributors to the project. Thanks for all your help!
