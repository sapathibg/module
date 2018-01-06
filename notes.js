// module.exports.add = function(a,b)=> {
//    console.log('Adding Note');
// require a+b; // Returning a string
// }

// module.exports.addNote = function (a,b) {
//     console.log('Adding two numbers');
// return a+b; // Returning a string
// }

//global modules......
console.log(module.filename);
console.log(module.id);
console.log(module.parent);
console.log(module.children);

//lodash modules......
const _ = require('lodash');
//reverse method
var array = [1, 2, 3];
console.log('reverse array :',_.reverse(array));  //reverse array

//pullAt method
var array = ['a', 'b', 'c', 'd'];
var pulled = _.pullAt(array, [1, 3]);
console.log(array);  //['a', 'c']
console.log(pulled); //['b', 'd']

//join method
var array = ['scss', 'java', 'nodejs', 'c++'];
console.log(_.join(array, '*')); // converted to'a*b*c'
