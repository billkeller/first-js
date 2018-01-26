// alerts are annoying, let's use console.log
console.log('Welcome');
/*
This will now log to your console
*/

// Create a function that updates a DOM element
function change(){
	// function body. Where it all goes down.
	document.getElementById('foo').innerHTML = 'Welcome';
}

// Basic data types in javascript
var name = 'Lucille'; // Store a string in a var
var numberOfWidgets = 10; // number
var isCodingCool = true; // boolean
console.log(name); // log the value of a var to the console

// store an array in a var
var characters = [50, true, 'Lucille', 'Michael Bluth', 'Tobias', 10, 2];
console.log(characters[0]);

/*
Create some variables, store some data in them,
output them to the console.
*/
// Multi-dimensional array
var meat = ['ham', 'bologna', 'turkey'];
var fruit = ['oranges', 'apples', 'grapes'];
var food = [meat, fruit];
console.log(food[1][0]); // logs 'oranges' to the console

// var food = [['ham', 'bolgna', 'turkey'], ['oranges']]; // could also be written like this

// Object:
var user = {
	firstName: 'Lucille',
	age: 40,
	lastName: 'Bluth',
	hasHair: true,
	'has-feet': true
};
// access properties of our user obj using dot notation
console.log(user.firstName); // log 'Lucille'
// we can also access properties on objs using bracket notation
console.log(user['firstName']); // log 'Lucille'
console.log(user['has-feet']); // NEED to use square bracket

// two vars, each containing a #
var num1 = 100;
var num2 = 50;
console.log('the result is: ' + (num1 - num2)); // outputs 50 to the console
console.log('my num1 is ' + num1 + ' That is my number!!');

var string1 = 'Bill';
var string2 = 'Keller';
alert(string1 + ' ' + string2);
