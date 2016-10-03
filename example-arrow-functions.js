// Hey contributors - this file is not needed for this project.
// It is merely here in case you need any help with ES6 arrow functions.
// There are a lot of great examples in this file in case you're still learning the concept!

//start with an array
var names = ['Andrew', 'Julie', 'Jen'];

//without ES6
names.forEach(function (name) {
  console.log('forEach', name);
});

//ES6 Arrow Function
names.forEach((name) => {
  console.log('arrowFunc', name);
});

//ES6: same result as above, just much simpler.
names.forEach((name) => console.log(name));

// With arrow functions, you automatically return
// With anonymous functions: THIS binding
// With arrow functions: take on parents THIS binding

//ES6 new Example
var returnMe = (name) => name + '!';
console.log(returnMe('Brandon'));


var person = {
  name: 'Andrew',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};
person.greet();

//CHALLENGE AREA

//original function
function add (a,b) {
  return a + b;
}
//ES6 v.1
var addStatement = (a, b) => {
  return a + b;
};
//ES6 v.2
var addExpression = (a,b) => a + b;

//calling our functions for testing
console.log(add(1,3));
console.log(add(9,0));
console.log(addStatement(1,3));
console.log(addStatement(9,0));
console.log(addExpression(1,3));
console.log(addExpression(9,0));
