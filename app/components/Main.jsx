var React = require('react');
var Nav = require('./Nav.jsx');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        {props.children}
      </div>
    </div>
  );
};

module.exports = Main;
