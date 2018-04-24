// ----- FOREACH ------

// var colors = [ 'blue', 'green', 'red' ];

// call forEach on the array and pass in an anonymous function (the iterator function) that will perform it's code on each item of the array
// colors.forEach(function(color) {
// 	console.log(color);
// });

// Create an array of numbers
// var numbers = [ 1, 2, 3, 4, 5 ];

// Create a variable to hold the sum
// var sum = 0;

// Loop over the array, incrementing the sum variable
// It's very common to name the array in plural and use the singular for the argument of the function
// numbers.forEach(function(number) {
// 	sum += number;
// });

// Print the sum variable value
// console.log(sum);


// Can also pull the function out of the forEach statement and declare it above with other vars, then pass it in like so:
// var numbers = [ 1, 2, 3, 4, 5 ];
// var sum = 0;
// function adder(number){
// 	sum += number;
// };

// numbers.forEach(adder);

// console.log(sum);


// function handlePosts() {
// 	var posts = [
// 		{ id: 23, title: 'Daily JS News' },
//     	{ id: 52, title: 'Code Refactor City' },
//     	{ id: 105, title: 'The Brightest Ruby' }
//     ];

//    	posts.forEach(function(post){
//    		savePost(post);
//    	});
// };

// var images = [
//  	{ height: 10, width: 30 },
//  	{ height: 20, width: 90 },
//  	{ height: 54, width: 32 }
// ];

// var areas = [];

// images.forEach(function(image) {
//     areas.push(image.height*image.width)
// })

// console.log(areas);


// -------- MAP ------- 
// var numbers = [ 1, 2, 3 ];

// var doubled = numbers.map(function(number){
// 	return number * 2;
// });

// console.log(doubled);


// var unicorns = [
// 	{ color: "pink", power: "invisibility"},
// 	{ color: "purple", power: "flight"}
// ];

// This is referred to as a "pluck" because we're plucking a property value from an array of objects
// var powers = unicorns.map(function(unicorn) {
// 	return unicorn.power;
// });

// console.log(powers)


// Using map, create a new array that contains the height property of each object. Assign this new array to the variable height. Be sure to use the return keyword in the function!
// var images = [
//  	{ height: '34px', width: '39px' },
//  	{ height: '54px', width: '19px' },
//  	{ height: '83px', width: '75px' },
// ];

// var heights = images.map(function(image){
// 	return image.height;
// });

// console.log(heights);


// Using map, create a new array that contains the distance/time value from each trip. The new array should contain the distance/time value, assigned to the variable speeds:

// var trips = [
// 	{ distance: 34, time: 10 },
// 	{ distance: 90, time: 50 },
// 	{ distance: 59, time: 25 }
// ];

// var speeds = trips.map(function(trip) {
// 	return trip.distance/trip.time;
// });

// console.log(speeds);


// Implement a pluck function. Pluck should accept an array and a string representing a property name and return an array containing that property from each object.

// var paints = [ {color: "red"}, {color: "blue"}, {color: "pink"} ];
// function pluck(array, property) {
//     return paints.map(function(paint) {
//     	return paint.color;
//     })
// }

// console.log(pluck(paints, paints['color']));


// ------- FILTER -------

// var products = [
// 	{ name: 'cucumber', type: 'vegetable'},
// 	{ name: 'banana', type: 'fruit'},
// 	{ name: 'celery', type: 'vegetable'},
// 	{ name: 'orange', type: 'fruit'}
// ];

// var filteredProducts = [];

// Using a for loop
// for ( var i = 0; i < products.length; i++) {
// 	if (products[i].type === 'vegetable') {
// 		filteredProducts.push(products[i].name);
// 	}
// }

// console.log(filteredProducts); // ['cucumber', 'celery']


// Using .filter
// var filteredProducts = products.filter(function(product){
// 	return product.type === 'fruit';
// });

// console.log(filteredProducts);


// var products = [
// 	{ name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
// 	{ name: 'banana', type: 'fruit', quantity: 0, price: 15 },
// 	{ name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
// 	{ name: 'orange', type: 'fruit', quantity: 3, price: 5 }
// ];

// Type is 'fruit', quantity is greater than 0, price is less than 10

// var availProducts = products.filter(function(product){
// 	return product.type === 'fruit' 
// 		&& product.quantity > 0 
// 		&& product.price < 10
// });

// console.log(availProducts);


// var post = { id: 4, title: 'New Post'};

// var comments = [
// 	{ postId: 4, content: 'awesome post'},
// 	{ postId: 3, content: 'it was okay'},
// 	{ postId: 4, content: 'neat'}
// ];

// function commentsForPost(post, comments) {
// 	return comments.filter(function(comment) {
// 		return comment.postId === post.id;
// 	});
// }

// var newArray = commentsForPost(post, comments);

// console.log(newArray)


// Create a new array that only contains numbers greater than 50
// var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

// var filteredNumbers = numbers.filter(function(number) {
// 	return number > 50;
// });

// console.log(filteredNumbers)


// Filter the array of users, returning only those users with admin level access.

// var users = [
//  { id: 1, admin: true },  
//  { id: 2, admin: false },
//  { id: 3, admin: false },
//  { id: 4, admin: false },
//  { id: 5, admin: true },
// ];

// var filteredUsers = users.filter(function(user) {
//   return user.admin === true;  
// });

// console.log(filteredUsers)


// function reject(array, iteratorFunction) {
//   return array.filter(item => !iteratorFunction(item)) //loop thru each item in array and run function on it
// }


// ------ FIND ------

// var users = [
// 	{ name: 'Lisa'},
// 	{ name: 'Sheila'},
// 	{ name: 'Mom'}
// ];

// var find = users.find(function(user){
// 	return user.name === 'Sheila';
// });

// console.log(find)

 
// var posts = [
// 	{ id: 1, title: 'New post' },
// 	{ id: 2, title: 'Old post' }
// ];

// var comment = { postId: 2, content: 'Great post!' };

// function postForComment(posts, comment) {
// 	return posts.find(function(post) {
// 		return post.id === comment.postId;
// 	});
// }

// var commentedPost = postForComment(posts, comment);

// console.log(commentedPost)


// Find and return the user who is an admin and assign it to the variable admin
// var users = [
//   { id: 1, admin: false },
//   { id: 2, admin: false },
//   { id: 3, admin: true }
// ];

// var admin = users.find(function(user) {
// 	return user.admin === true;
// });

// console.log(admin)


// Find the account with the balance of 12 and assign it to the variable account
// var accounts = [
//   { balance: -10 },
//   { balance: 12 },
//   { balance: 0 }
// ];

// var account = accounts.find(function(account) {
// 	return account.balance === 12;
// });

// console.log(account);


// Find a ladder who's height is 20'
// var ladders = [
// 	{ id: 1, height: 200 },
// 	{ id: 2, height: 10 },
// 	{ id: 3, height: 88 },
// 	{ id: 4, height: 20 },
// 	{ id: 5, height: 100 },
// ];

// function findWhere(array, criteria) {
// 	return array.find(function(item) {
// 		return item.height === criteria.height;
// 	});
// }
// console.log(findWhere(ladders, {height: 20}));


// ------ EVERY and SUM -----

// var computers = [
// 	{ name: 'Apple', ram: 24 },
// 	{ name: 'Lenovo', ram: 4 },
// 	{ name: 'Compaq', ram: 32 }
// ];

// var resultAll = computers.every(function(computer) {
// 	return computer.ram > 16;
// });

// console.log(resultAll); // returns false

// var resultSome = computers.some(function(computer) {
// 	return computer.ram > 16;
// });

// console.log(resultSome); // returns true


// var names = [
// 	"Lisa",
// 	"Mom",
// 	"Sheila"
// ];

// var allNames = names.every(function(name) {
// 	return name.length > 4;
// });

// console.log(allNames);

// var someNames = names.some(function(name) {
// 	return name.length > 4;
// });

// console.log(someNames);


// function Field(value) {
// 	this.value = value;
// }

// Field.prototype.validate = function() {
// 	return this.value.length > 0;
// }

// var username = new Field("PrincessUnicorn");
// var password = new Field("myPassword");
// var birthdate = new Field("6/13/1977");

// var fields = [username, password, birthdate];

// var formIsValid = fields.every(function(field) {
// 	return field.validate();
// })

// console.log(formIsValid);

// if (formIsValid) {
// 	// Allow user to submit
// } else {
// 	// Show error message
// }


// Return true if every user has submitted a request form
// var users = [
//   { id: 21, hasSubmitted: true },
//   { id: 62, hasSubmitted: false },
//   { id: 4, hasSubmitted: true }
// ];

// var hasSubmitted = users.every(function(user) {
// 	return user.hasSubmitted === true;
// });

// console.log(hasSubmitted);


// Assign the boolean true to the variable inProgress if any network request has a status of pending
// var requests = [
//   { url: '/photos', status: 'complete' },
//   { url: '/albums', status: 'pending' },
//   { url: '/users', status: 'failed' }
// ];

// var inProgress = requests.some(function(request) {
// 	return request.status === "pending";
// });

// console.log(inProgress);


// ------- REDUCE -----

// var numbers = [ 10, 20, 30 ];

// var addNum = numbers.reduce(function(sum, number) {
// 	return sum + number;
// }, 0);

// // initial value of sum is 0 (2nd argument of reduce function after iterator function), then as each iteration happens, it's replaced by sum + number, and number is replaced with the next number in the array

// // So first iteration, sum = 0 and num = 10. 2nd iteration, sum is now 10 and number is 20. 3rd iteration, sum is now 30 and number is 30. Sum finally ends up as 60.

// console.log(addNum);


// var primaryColors = [
// 	{ color: 'red' },
// 	{ color: 'yellow' },
// 	{ color: 'blue' }
// ];

// var colorArray = primaryColors.reduce(function(previous, primaryColor) {
// 	previous.push(primaryColor.color);
// 	return previous;
// }, []);

// console.log(colorArray);


// Given a string of parens, return a boolean if the parens are balanced or not

function balancedParens(string) {
	// First return string as an array
	return !string.split("").reduce(function(previous, char) {
		if (char === "(") { return ++previous; }
		if (char === ")") { return --previous; }
		return previous
	// Everytime we see an open parens, we'll increase the counter by one. Everytime we see a closed paren, we'll decrease the counter by one. If the result is NOT zero, return a false.
	}, 0);
}

var test1 = balancedParens("((()))");

var test2 = balancedParens("(()))");

var test3 = balancedParens("(((ksdlkjlsfd)))");

console.log(test1, test2, test3);