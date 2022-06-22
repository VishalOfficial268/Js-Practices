// console.log("prototype....");

// let animal = {
//     eat: "Yes Eats"
// }

// let rabbit = { jump: true };
// rabbit.__proto__ = animal;

// console.log(rabbit.eat);






// let animal = {
//     eats: true,
//     walk() {
//         return "Yes this anmail also walks."
//     }
// }

// let mice = {
//     runfast: true,
//     __proto__: animal
// }

// console.log(mice.walk()) // accessing from prototype:



// let animal = {
//     eats: true,
//     laugh: true,
//     walk() { /** code will be also dynamic from another objects */ }
// }

// let zebra = {
//     looks: "black white sign",
//     laugh: false,
//     __proto__: animal
// }

// zebra.walk = function () {
//     return "Yes Zebra also can walk and run."
// }
// console.log(zebra.walk());


// let user = {
//     name: "Aadi",
//     subname: "Vishu",
//     get fullname() {
//         return this.name + " " + this.subname;
//     },
//     set fullname(val) {
//         [this.name, this.subname] = val.split(" ");
//     }
// }


// let admin = {
//     isAdmin: true,
//     __proto__: user
// }

// admin.fullname = "Alex Mathom";
// console.log(admin);



// let animal = {
//     eats: true,
//     babies: "New Born"
// }

// let rabbit = {
//     isCute: true,
//     __proto__: animal
// }

// console.log(rabbit);
// console.log(Object.keys(rabbit));

// for (let key in rabbit) {
//     console.log(key) // while itterating it gives all keys and values but its own
// }


// for (let f in rabbit) {
//     if (rabbit.hasOwnProperty(f)) {
//         console.log(f);
//     } else {
//         console.log("Sorry")
//     }
// }


// let head = {
//     glasses: 1
// };

// let table = {
//     pen: 3,
//     __proto__: head
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };

// let pockets = {
//     money: 2000,
//     __proto__: bed
// };


// console.log(pockets.pen);
// console.log(bed.glasses);
// console.log(table.money);




// function Rabbit(name) {
//     this.name = name;
//     console.log(name);
// }
// let rabbit = new Rabbit("White Rabbit");
// let rabbit2 = new rabbit.constructor("Black Rabbit");
// let rabbit2 = new Rabbit.prototype.constructor("Black Rabbitsss");
// let rabbit2 = Rabbit.prototype.constructor("Black Rabbitsss");


// function Rabbit() { }
// // Rabbit.prototype = { jumps: true };

// let rabbit = new Rabbit();
// console.log(new rabbit.constructor === Rabbit); // false
// console.log(rabbit.constructor == Rabbit); // false

// let arr = ["mouce", "mice"]
// console.log(arr.__proto__)


// P r o t o t y  p e     m e t h o d  s,     o b j e c t s    w i t h  o u t   __proto__

// let animal = { eats: true }
// let rabbit = Object.create(animal);
// console.log(rabbit.eats);
// console.log(Object.getPrototypeOf(animal));
// console.log(Object.setPrototypeOf(animal, {}));

// let animal = {
//     eats: true
// };

// let rabbit = Object.create(animal, {
//     jumps: {
//         value: true
//     }
// });
// console.log(rabbit.jumps)

// let user = {
//     name: "Aadi04",
//     active: true,
//     jobrole: "software engineer"
// }

// console.log(Object.getOwnPropertySymbols(user)); //return array
// console.log(Object.getOwnPropertyNames(user)); //return array
// console.log(Reflect.ownKeys(user)); //return array
// console.log(user.hasOwnProperty("active")) //return boolean