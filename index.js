// // example of writing a external js doc

// // let message;
// // message = 'Hello';
// // // or

// // let mesage = 'hemlo';

// // alert(mesage);
// // alert(message);
// // now adding more vriables

// // let user = 'john', age = 25, mesage = 'unga bunga' ;
// //  alert(user), alert (age), alert(mesage);
// // // end

// // new snippet

// // let message;

// // message = 'Hello!';

// // message = 'World!'; // value changed

// // alert(message);
// // end

// // new

// // let hello = 'Hello world!';

// // let message;

// // // copy 'Hello world' from hello into message
// // message = hello;

// // // now two variables hold the same data
// // alert(hello); // Hello world!
// // alert(message); // Hello world!

// // A variable should be declared only once. A repeated declaration of the same variable is an error:
// // uncomment the previous two snippets you will remember.

// // variable naming syntax

// let userName;
// let test123;
// // valid variable names

// // special cases
// let $ =1;
// let _ =2;

// alert ($+_);
// // variable naming syntax for special cases

// // let 1a; // cannot start with a digit

// // let my-name; // hyphens '-' aren't allowed in the name

// // Conts

// const string = "The revolution will not be televised.";
// console.log(string);

// // strings can not be variables, mostly because they are fixed within double quotes

// const badString = string;
// console.log(badString)

// alert(badString)

// //  works perfectly fine

// // Inside a template , we can also wrap js variable or expression inside ${}. and the reuslt
// // be same

// const name = "Chris";
// const greetings = `Hello, ${name}`;
// alert(greetings);
// // this is exactly where backticks are used when using a expression within another

// // Arrays
// let selectedColor= ['red', 'blue'];
// selectedColor[2]= 'orange';
// console.log(selectedColor)


// let selectedColor= ['red', 'blue'];
// selectedColor[3]= 345;
// console.log(selectedColor)

// function kyaBathHai(nam) {
//     console.log('hello ',nam);

// }
// kyaBathHai('dheeraj');

function sayHello(){
    for (var i=1; i<5; i++){
        console.log(i);
    }
    console.log(i)
    //  this is returned in broswer becaus ein the last iteration of the loop i=5
    // also because this function call is made out of the loop it is printed anyway
}
sayHello();

function sayHi(){
    for (let i =0; i<5;i++){
        console.log(i);
    }
    console.log(i);
    // this is not processed and throws an error becaus let key word is used
    // let key word is function specific whereas var was not 
    // therefore let was introduced as a part of ES6 in 2015

    //  in simple words
    /*
    var -> function
    let -> block
     */
}

sayHi();

// const is a object
const person ={
    names   : 'mosh',
    walk    : function() {}, // if we have a function within an object in OOP terms we call it, method
    // therefore walk here is an object.
    // there are two main way to declaer a method. First one is by the method we have defined walk method
    talk(){}
    // talk is another way of declaring a method.
    // you simply name the function and put closed brackets after the name. this is taken an a method by defalut.
    // and enclose curly braces after that. to define it as a method, following it's actual syntax.
}