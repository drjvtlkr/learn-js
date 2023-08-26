// example of writing a external js doc

// let message;
// message = 'Hello';
// // or

// let mesage = 'hemlo';

// alert(mesage);
// alert(message);
// now adding more vriables

// let user = 'john', age = 25, mesage = 'unga bunga' ;
//  alert(user), alert (age), alert(mesage);
// // end

// new snippet

// let message;

// message = 'Hello!';

// message = 'World!'; // value changed

// alert(message);
// end

// new

// let hello = 'Hello world!';

// let message;

// // copy 'Hello world' from hello into message
// message = hello;

// // now two variables hold the same data
// alert(hello); // Hello world!
// alert(message); // Hello world!

// A variable should be declared only once. A repeated declaration of the same variable is an error:
// uncomment the previous two snippets you will remember.

// variable naming syntax

let userName;
let test123;
// valid variable names

// special cases
let $ =1;
let _ =2;

alert ($+_);
// variable naming syntax for special cases

// let 1a; // cannot start with a digit

// let my-name; // hyphens '-' aren't allowed in the name

// Conts

const string = "The revolution will not be televised.";
console.log(string);

// strings can not be variables, mostly because they are fixed within double quotes

const badString = string;
console.log(badString)

alert(badString)

//  works perfectly fine

// Inside a template , we can also wrap js variable or expression inside ${}. and the reuslt
// be same

const name = "Chris";
const greetings = `Hello, ${name}`;
alert(greetings);
// this is exactly where backticks are used when using a expression within another

