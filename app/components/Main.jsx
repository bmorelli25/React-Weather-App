var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <main>
      <Nav/>
      <section className="row">
        <div className="columns medium-6 large-8 small-centered">
          {props.children}
        </div>
      </section>
    </main>
  );
};

module.exports = Main;
