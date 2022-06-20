// console.log("objects");
// let descriptor = Object.getOwnPropertyDescriptor({ name: "vishal" }, 'name');
// let descriptor2 = Object.getOwnPropertyDescriptor({}, ''); //undefined
// console.log(JSON.stringify(descriptor, null, 2));

// let obj = {
//     name: "Vishal",
//     age: 27,
//     job: "software-engineer",
//     active: true
// }
// let discriptor1 = Object.getOwnPropertyDescriptor(obj, null, 2);
// console.log(discriptor1)


//c creating all the discription values as falsy:

// let user1 = {};
// let user2 = { age: 26 }
// Object.defineProperty(user1, 'age', { value: 27 });

// let disc = Object.getOwnPropertyDescriptor(user1, 'age');
// console.log(JSON.stringify(disc, null, 2));
// console.log(JSON.stringify(Object.getOwnPropertyDescriptor(user2, 'age'), null, 2));


// let user = { name: "ggggg" }
// Object.defineProperty(user, 'name', { writable: false, enumerable: false, configurable: false });
// let disc1 = Object.getOwnPropertyDescriptor(user, 'name');
// user.name = "Ajnabi" // no error in normal mode 
// console.log(JSON.stringify(disc1, null, 3));


// let user = { name: "sunil", age: 25 };
// let d = Object.getOwnPropertyDescriptor(user, 'name');
// console.log(JSON.stringify(d, null, 2));
// user = Object.defineProperty(user, 'name', { writable: false });
// user.name = "R N Ajnabi";
// console.log(user)
// for (let item in user) {
//     console.log(user[item]);
// }


// let disc = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(JSON.stringify(disc, null, 2));


// let user = {
//     name: "John"
// };

// Object.defineProperty(user, "name", {
//     writable: false,
//     configurable: false
// });

// // won't be able to change user.name or its flags
// // all this won't work:
// user.name = "Pete";
// delete user.name;
// console.log(user);



// let user = {
//     firstname: "Vishu",
//     lastname: "Gupta",
//     get fullname() {
//         return this.firstname + " " + this.lastname
//     },
// }
// console.log(user.fullname);


// "use strict"
// let user = {
//     firstname: "Vishu",
//     lastname: "Gupta",
//     get fullname() {
//         return this.firstname + " " + this.lastname
//     },
// }
// user.fullname = "Vishal Gupta"
// console.log(user.fullname); //while using the stric mode it will gives the error:


// let user = {
//     firstname: "Vishu",
//     lastname: "Gupta",
//     get fullname() { //getter
//         return this.firstname + " " + this.lastname
//     },
//     set fullname(val) { //setter
//         [this.firstname, this.lastname] = val.split(" ")
//     }
// }
// user.fullname = "Alex Cooper"
// console.log(user.fullname);


