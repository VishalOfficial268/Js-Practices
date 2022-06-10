// let user = {
//     name: "Vishu",
//     age: 50
// }
// user.profession = "software developer";
// user["new challange"] = "learn js deep";

// console.log(user["age"])
// console.log(user);
// console.log(user["new challange"]);

//check if the key exists in the object or not:
// let user = {
//     job: "enginner",
//     ctc: "1LPA",
//     name: "Aditya",
//     "Nae is": "test"
// }

// console.log(user.blablabla === undefined);
// console.log("blablabla" in user);
// console.log("ctc" in user);
// console.log("Nae is" in user);

//for in loop for the Object:
// let user = {
//     name: "John",
//     age: 30,
//     "double string key": true,
//     isAdmin: true
// };

// for (let key in user) {
//     console.log(key) //print only all key:
// }

// for (let key in user) {
//     console.log(user[key]) // prints the value of the object:
// }


// let phone_codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     "1": "USA"
// };

// for (countryCode in phone_codes) {
//     console.log(countryCode)
// }

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// function isEmpty(obj) {
//     for (let key in obj) {
//         if (key) return true;
//     }
//     return false;
// }
// console.log(isEmpty({}));

//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// function sumOfSalaries(salaries) {
//     let total = 0;
//     for (let price in salaries) {
//         total += salaries[price];
//     }
//     return total;
// }
// console.log(sumOfSalaries(salaries));

// let user = {
//     name: "Pete"
// }
// let admin = user;
// admin.name = "John"
// console.log(user.name);

//same object if they have same refrence
// let a = {};
// let b = a;
// console.log(a === b);
// console.log(b === a);

//diffrent objects
// let a = {};
// let b = {};
// console.log(a == b);

//object clone by assign method:
// let obj = {
//     name: "Vishu",
//     role: "software engineer"
// }
// let permisionObj = {
//     canView: true,
//     canEdit: true,
//     caDelete: false
// }
// let user = {
//     IsAdmin: true
// }

// let finalObject = Object.assign(user, obj, permisionObj); // asign method:
// console.log(finalObject);


//simple clonig:
// let user = {
//     name: "John",
//     age: 30,
//     admin: true
// };
// let clone = Object.assign({}, user);
// console.log(clone);

//nested object cloning:
// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };
// let clone2 = Object.assign({}, user);
// console.log(clone2);


// O B J E C T    M E T H O D      T H I S:

// user = {
//     sayHi: function () { // writing way 1
//         console.log("Hello");
//     }
// };

// user = {
//     sayHi() { // writing way 2
//         console.log("Hello");
//     }
// };
// user.sayHi();


// let user = {
//     name: "John",
//     age: 30,
//     sayHi() {
//         console.log(this.name);
//         console.log(this.age);
//     }
// };
// user.sayHi();



// let user = {
//     name: "John",
//     age: 30,
//     sayHi() {
//         console.log(this); // represents the current object as 'user'
//     }
// };
// user.sayHi();


// let user = {
//     name: "John",
//     age: 30,
//     sayHi: () => {
//         console.log(this); // represents global Object 'this' in arrow function
//     }
// };
// user.sayHi();

// function sayHi() {
//     console.log(this.name);
// }
// sayHi() // gives undefined


// let user = { name: "John" };
// let admin = { name: "Admin" };
// function sayHi() {
//     console.log(this.name);
// }
// user.f = sayHi;
// admin.f = sayHi
// user.f();
// admin.f();
// admin['f']();

// function accessThis() {
//     console.log(this); //non-strict mode : gives global object as window object:
// }
// accessThis();

// "use strict" //stric mode
// function accessThis() {
//     console.log(this); //strict mode : gives undefined:
// }
// accessThis();


// let accessThis = () => {
//     console.log(this); //gives global object:
// }
// accessThis();

// let user = { name: "abhimanyu", role: "Mahabharat" }
// let accessAnotherThis = () => {
//     console.log(this); //gives global object:
// }
// user.getThisMethod = accessAnotherThis;
// let accessThis = user.getThisMethod;
// accessThis();


// let user = {
//     name: "Abhimanyu",
//     role: "Mahabharat",
//     say() {
//         let arrow = () => { console.log(this.role) } // here this is taken from the sayHi function
//         arrow();
//     }
// }
// user.say();


// let user = {
//     name: "Abhimanyu",
//     role: "Mahabharat",
//     self() {
//         let arrow = () => { console.log(this.role) } // here this is taken from the sayHi function
//         arrow();
//     }
// }
// user.self();


// What is the result of accessing its ref? Why?
// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// }
// let user = makeUser();
// console.log(user.ref.name);

// "use strict"
// function access_this() {
//     return this;
// }
// console.log(access_this());


//C O N S T R U C T O R   O P E R A T O R   N E W:
// function User(name) {
//     this.name = name;
//     this.isAdmin = true;
// }
// let anotherUser = new User("John");

// console.log(anotherUser.name); // John
// console.log(anotherUser.isAdmin); // true


// O P T I O N A L     C H A I N I N G:
// let user = {};
// console.log(user?.address?.street); //undefined"

// let user = { address: "Mongo Park Nark Da Badshah!!" };
// console.log(user?.address?.street);
// console.log(user?.address?.street);

// let key = "firstName";
// let user1 = {
//     firstName: "John"
// };
// let user2 = null;

// console.log(user1?.[key]); // John
// console.log(user2?.[key]); // undefined


// let user = { address: "Jangal Ranni Sohas Kuvari", street: "Mahaveer chhapra" }
// delete user?.address
// console.log(user);

// let user = {
//     name: "John Doe",
//     getName: function () {
//         console.log(this.name);
//     }
// }
// user?.getName?.(); //checking if exist then call the function:

// S Y M B O L:
// let user = {
//     fullname: "Vishal Vishu"
// }
// let id = Symbol("id");
// user[id] = 998877;
// console.log(user[id]); // access method if symbol
// console.log(user.id) // not be accessed normally

//symbol
// let id = Symbol("id");
// let user = {
//     fullname: "aadivishu",
//     [id]: 88776677
// }
// console.log(user[id]) //as symbol

// let id = Symbol("id");
// let user = {
//     fullname: "aadivishu",
//     ["id"]: 88776677
// }
// console.log(user["id"]); // not symbol

// let id = Symbol("id");
// let user = {
//     fullname: "aadivishu",
//     [id]: 88776677,
//     city: "Gorakhpur"
// }
// let cloneObject = Object.assign({}, user); //cloning the user object: //Object.assign also copy or clone the sybol property
// console.log(user[id]);
// console.log(cloneObject[id]);
// console.log(cloneObject["city"]);


// let sym1 = Symbol.for("name");
// let sym2 = Symbol.for("id");
// console.log(Symbol.keyFor(sym1)); //gives symbol key name as "name"
// console.log(Symbol.keyFor(sym2)); //gives symbol key name as "id"

// let globalSymbol = Symbol.for("GlobalOutput");
// let localSymbol = Symbol("LocalSymbol");

// console.log(Symbol.keyFor(globalSymbol)); //globa; symbol's key will be accessed.
// console.log(Symbol.keyFor(localSymbol)); //local symbol's key will not be accessed.
// console.log(localSymbol.description); //description is available.


// O B J E C T    T O    P R I M I T I V E    C O N V E R S I O N