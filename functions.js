const res = require("express/lib/response");

console.log('------------------ s e p r a t o r --------------');

// function show() {
//     let msg = "Hi I am new1";
//     msg = "new1"
//     console.log(msg);
// }
// console.log(msg) //non accessable
// show();


// let m1 = "Hi beautiful"; //diff memory allocations
// function show2() {
//     let m1 = "I am the new 2"; // diff memory allocations
//     console.log(m1)
// }
// console.log(m1)
// show2();

// let m1 = "Hi beautiful"; //diff memory allocations
// function show2() {
//     m1 = "I am new 2"; // diff memory allocations
//     console.log(m1);
//     m1 = "I am new 3"
// }
// console.log(m1);
// show2();
// console.log(m1);

//shadowing the outer variables:
// let username = "John";
// function greetings() {
//     let username = "MS Dhoni" // shadows the outer variable username line -31
//     let message = "hi " + (username ?? "Vishu");
//     console.log(message);
// }
// greetings();
// console.log(username)

// let a = function check() {
//     console.log("I am from check function");
// }
// console.log(check()) // now it will be called only by the variable name 'a':


// function anotherfunction() {
//     return "Dear user ";
// }
// function showMessage(from, text = anotherfunction()) {
//     let greeting = "Hi Good After noon ! ";
//     let greetingMsgs = greeting + text + from;
//     console.log(greetingMsgs);
// }
// showMessage("Vishal")


// function checkAge(age) {
//     if (age >= 18) {
//         return "you are adult";
//     } else {
//         return "Sorry not adult";
//     }
// }
// let ageResult = checkAge(11);
// console.log(ageResult);


// function checkForMovie(age) {
//     if (age < 18) {
//         return false;
//     }
//     console.log("Okay you can access the kids movie");
// }
// let res = checkForMovie(1)
// console.log(res); // false will be as resultant:


// function checkPrime(n) {
//     nextprime: for (let i = 2; i < n; i++) {
//         innerloop: for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextprime;
//         }
//         console.log(i)
//     }
// }
// checkPrime(15);


// let func = function () {
//     console.log("I am being executed");
// }
// let newName = func;
// newName();

// REGULAR FUNCTION VS ARROW FUNCTIONS
// let user1 = {
//     name: "Vishu",
//     myfunction: function () {
//         console.log("Hello " + this.name)
//     }
// }
// let user2 = {
//     name: "Vishu",
//     myfunction: () => {
//         console.log("Hello " + this.name);
//     }
// }

// user1.myfunction(); // regular function
// user2.myfunction(); // arrow function

// let user1 = {
//     show() {
//         console.log(arguments, "I am from the regular functions.");
//     }
// }


// let user2 = {
//     show: () => {
//         console.log(arguments, "I am from arrow functions.")
//     }
// }
// user1.show(1, 2, 3);// regular function // output: {'0': 1, '1': 2, '2': 3}
// user2.show(1, 2, 3); // arrow function // output: arguments is not defined


// regular function is constructible using new keyword:
// let myfunc = function () {
//     console.log(arguments);
// }
// myfunc(1, 2, 5); // simple called as regular function
// new myfunc(7, 8, 0); // constructble called with new keyword

//arrow function is not constrcutble:
// let arrfunc = () => {
//     console.log(arguments);
// }
// arrfunc(8, 9); // called as simple arow function called:
// new arrfunc(0, 9, 3) // called as cunstructable , output: "rrfunc is not a constructor"

//finding this in normal function expression:
// let user = {
//     name: "Aadi",
//     myfunc: function newfun() {
//         console.log("Hi dear, " + this.name);
//     }
// }
// user.myfunc();

// REGULAR FUNCTIONS VS FUNCTION EXPRESSION:

// sayHi(); //regular function //can be access before the initalizations
// function sayHi() {
//     console.log("hi");
// }

// bye(); // function expression and can not be accessable before the initializations:
// let bye = function () {
//     console.log("Okay Bye")
// }

//arrow functions:
// let sum = (n1, n2) => {
//     let results = n1 + n2;
//     return results;
// }
// console.log(sum(2, 8));

//covert the give function in an arrow function:
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agree?",
//     function () { alert("You agreed."); },
//     function () { alert("You canceled the execution."); }
// );

//converted as the arrow functions:
// let ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }
// ask("Do you agree?", () => alert("You are agree."), () => alert("You canceled the execution."))

// J S     S P E C I A L S
// let sumofnumbers = (a, b) => a + b;
// console.log(sumofnumbers(2, 7));