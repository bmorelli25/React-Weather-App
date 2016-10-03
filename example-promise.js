// Hey contributors - this file is not needed for this project.
// It is merely here in case you need any help with promises.
// There are a lot of great examples in this file in case you're still learning the concept!

function getTempCallback (location, callback) {
  callback(undefined, 78); //success case
  callback('City not found'); //error case
}
//callback function responsible for error and success
getTempCallback('Portland', function(err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      resolve(79); //if things go well
      reject('City Not Found'); //if error
    }, 1000);
  });
};

getTempPromise ('Portland').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
});

//CHALENGE AREA

function addPromise (a,b) {
  return new Promise(function (resolve, reject) {
    if (typeof a !== 'number') {
      reject (a + ' is not a number');
    } else if (typeof b !== 'number'){
      reject(b + ' is not a number');
    } else {
      resolve (a+b);
    }
  });
}

addPromise (1,2).then(function (sum) {
  console.log('The sum is: ', sum);
}, function (err) {
  console.log('Error: ', err);
});

addPromise (1,'hello').then(function (sum) {
  console.log('The sum is: ', sum);
}, function (err) {
  console.log('Error: ', err);
});
