// 	R E C U R S I O N   A N D   S T A C K

// function pow(x, n) {
// 	let result = 1; // basics
// 	for(let i = 0; i < n; i++) {
// 		result *= x;
// 	}
// 	console.log(result);
// }
// pow(2, 3)


// //by recursion:
// function pow2(x, n) {
// 	if(n == 1) {
// 		return x;
// 	} else {
// 		return x * pow2(x, n - 1);
// 	}
// }
// console.log(pow2(1, 4));

//adding n bumbers by recursion:
// function addNumbers(n) {
// 	if(n == 1) return n;
// 	else return n + addNumbers(n - 1);
// }
// console.log(addNumbers(10));


// reverse number as loop by recursion:
// function loop(n) {
// 	if(n == 1) {
// 		return n;
// 	} else {
// 		console.log(n - 1);
// 		loop(n - 1);
// 	}
// }
// loop(10);



//Quest: Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n
// function sumTo(n) {
// 	if(n == 1) {
// 		return n;
// 	} else {
// 		return n + sumTo(n - 1);
// 	}
// }
// console.log(sumTo(100));


//Quest - We can write a definition of factorial:
// function factorial(n) {
// 	return n ? n * factorial(n - 1) : 1
// }
// console.log(factorial(5));



//Quest - write a function for the fibinacci numbers eg. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// console.log( fib(10) ); // 2
// console.log( fib(7) ); // 13


//V A R I A B L E    S C O P E     C L O U S E R S
// {
//     const type = "A";
//     console.log(type)
// }

//     const type = "B";
//     console.log(type)




// for (let i = 0; i < 3; i++) {
//   // the variable i is only visible inside this for
//   console.log(i); // 0, then 1, then 2
// }

// console.log(i) // not defined


// for(var i =0; i < 3; i++) {
//     console.log(i)
// }
// console.log(i)  // var as for global it accessable.



// function sayHiBye(firstName, lastName) {

//   // helper nested function to use below
//   function getFullName() {
//     return firstName + " " + lastName;
//   }

//   console.log( "Hello, " + getFullName() );
//   console.log( "Bye, " + getFullName() );

// }

// sayHiBye("Vishal", "Gupta");


// let phrase = "Hello !"

// function greeting(name) {
//     return phrase + " " + name;
// }
// console.log(greeting("Vishal"));

// let functExp = (name) => {
//     return phrase + " " + name
// }
// console.log(functExp("Vishu"))



// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log("________________________________________")
// console.log(counter2());
// console.log(counter2());
// console.log(counter1());


// let phrase = "Hello";
// if (true) {
//   let user = "John";
//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }

// sayHi();  // in normal it is accessable but in strict mode it will give error:



// function mainSum(a) {
//     return function subFunction(b) {
//         return a + b;
//     }
// }

// console.log(mainSum(4)(5));






// call(x);
// function call(x) {
//     console.log(x);
// }
// let x = 5;  //cannot access before the initialization.



// let x = 1;
// function func() {
//   console.log(x); // ReferenceError: Cannot access 'x' before initialization
//   let x = 2;
// }
// func();


// var x = 1;
// function func() {
//   console.log(x); // it will give undefined:
//     var x = 2; 
// }
// func();


// Range from 3 to 6

// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6


// S E T T I M E O U T   & S E T I N T E R V A L
// function settimeWala(phrase, name, greet) {
//   console.log(phrase + " " + name + " ! " + greet)
// }

// let timerId = setTimeout(settimeWala, 1000, "Hi", "Aadi", "You are awesome...");
// console.log(timerId);

// setTimeout(() => {
//   console.log(111111);
// }, 2000)

// let timerID = setTimeout(() => {
//   console.log("It will never happen because of 1 sec delay");
// }, 1000);
// console.log(timerID);
// clearTimeout(timerID); // will clearc this.
// console.log(timerID)
