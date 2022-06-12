// let now = new Date();
// console.log(now); //because of node it does not gives the result but in browser it will give.

// let date = new Date("2017-01-26");
// console.log(date);

// let start = new Date(); // start measuring time

// // do the job
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = new Date(); // end measuring time

// console.log( `The loop took ${end - start} ms` );


// let user = {
//   name: "John",
//   age: 30,

//   toString() {
//     return `{name: "${this.name}", age: ${this.age}}`;
//   }
// };

// console.log(user); // {name: "John", age: 30}



// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null
// };
// console.log(JSON.stringify(student));

// let tobeConvertInObj = '{ "name": "John", "age": 30," isAdmin":  false, "courses": ["html","css","js"], "wife":null }';
// console.log(JSON.parse(tobeConvertInObj));


let user = {
  name: "John Smith",
  age: 35
};

console.log(toJSON(user));
 























