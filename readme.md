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

-------------

###HACKTOBERFEST!

Want to contribute? Here's how:

1. First ```fork``` and ```star``` the project.
2. Run ```npm install``` to install all needed dependencies.
3. Navigate to [OpenWeatherMap's ](http://openweathermap.org/) and get a free API key. Then, create a file name ```.env``` in the project root and add the following line: ```API_KEY=yourkeyhere```. This will give you access to API_KEY as a global variable anywhere in the client. It allows you to use your API Key while keeping it secret from everyone else.
3. If you don't have webpack installed on your machine, run ```npm install webpack -g```.
4. Open up a command prompt and run ```npm run dev```. This will both monitor any files for changes (and rebuild the ```bundle.js``` file) and also start up a server to host the web app.
5. Navigate to ```localhost:3000``` to see the app in action
6. Browse the open issues, join the discussion, and push your code. All accepted Pull Requests will have their names added as contributors to the project. Thanks for all your help!
