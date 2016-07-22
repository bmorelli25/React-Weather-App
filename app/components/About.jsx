var React = require('react');

//stateless functional component
//don't need createClass or render function
var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>This is a simple React Weather app</p>
    </div>
  );
};

module.exports = About;
