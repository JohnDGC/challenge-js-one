var scanf = require('scanf');

console.log('Can you drive? Please input your age:');
let age = scanf('%d');

if (parseInt(age) == age & age >= 18) {
  console.log("You can drive");
} else console.log("You can't drive");
