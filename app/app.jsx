var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
