/** B A S I C     O F     C L A S S E S */

// class User {
//     name = "Vishal"
//     sayHi() {
//         console.log(`Hello ${this.name}`);
//     }
// }
// new User().sayHi();


// class User {
//     name = "Vishu"
// }

// let user = new User;
// console.log(user.name); // found the values
// console.log(user.prototype.name);  //undefined


// class User {
//     constructor(name) { this.name = name; }
//     sayHi() { console.log(this.name); }
// }

// // proof: User is a function
// console.log(typeof User); // function


// class User {
//     name = "Vishal"
//     sayHi() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// new User().sayHi();
// console.log(User.prototype.name); //undefined


// class Button {
//     constructor(value) {
//         this.value = value
//     }

//     click() {
//         console.log(this.value);
//     }
// }

// let button = new Button("Events Button");
// console.log(button.click());
// console.log(setTimeout(button.click, 1000)); // gives undefined because of lossing 'this'.
// console.log(setTimeout(() => { button.click() }, 1000)); //gives correct as expected

/** ------------------------------------------------------------------------------------- */
// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.balance = balance;
//     this.accountNumber = Date.now();


//     this.deposit = function (ammount) {
//         this.balance += ammount;
//     }


//     this.withdraw = (ammount) => {
//         this.balance -= ammount
//     }
// }

// let VishalAccount = new BankAccount("Vishal Gupta", 2000);
// let AlianaAccount = new BankAccount("Aliana Gupta");
// console.log(VishalAccount);
// console.log(AlianaAccount);



/** C L A S S    I N H E R I T A N C E */

// //creating the main class:
// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }


//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} runs with the speed ${this.speed}`);
//     }

//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} stands still`);
//     }
// }

// let animal = new Animal("My animal");
// animal.run(10);
// animal.stop();


// //extending the class with parent class:
// class Rabbit extends Animal {
//     hid() {
//         console.log(`${this.name} hides.`)
//     }
// }

// let rabbit = new Rabbit("My Rabbit");
// rabbit.run(5); // accessing from animal constructor
// rabbit.stop(); // accessing from animal constructor
// rabbit.hid(); // accessing from rabbit constructor


// class User {
//     sayHi() {
//         console.log("Hi I am just testing without constructor")
//     }
// }

// new User().sayHi();



// //Main
// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.speed = 0;
//     }

//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} is running at this ${this.speed}`);
//     }

//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} now stopped.`);
//     }
// }

// // extending method:
// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} now hide somewhere.`);
//     }

//     stop() {
//         super.stop(); // from animal:
//         this.hide()
//     }
// }

// let rabbit = new Rabbit("Black Rabbit");
// rabbit.run(10);
// rabbit.stop();


// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.speed = 0;
//     }
// }

// class Rabbit extends Animal {
//     constructor(name, earLength) { // its rabbits constructor
//         super(name)
//         this.earLength = earLength;
//     }
// }

// let rabbit = new Rabbit("MyRabbit", 20);
// console.log(rabbit.name);
// console.log(rabbit.earLength);

// class Animal {
//     name = "Animal";
//     constructor() {
//         console.log(this.name)
//     }
// }

// class Rabbit extends Animal {
//     name = "Rabbit";
// }

// new Animal(); // output as animal : correct
// new Rabbit();// output as animal : in-correct


// class Animal {
//     showName() {
//         console.log("From Animal");
//     }

//     constructor() {
//         this.showName();
//     }
// }

// class Rabbit extends Animal {
//     showName() {
//         console.log("From Rabbit");
//     }
// }


// new Animal();
// new Rabbit();


// S T A T I C     P R O P E R T I E S   A N D    M E T H O D S: