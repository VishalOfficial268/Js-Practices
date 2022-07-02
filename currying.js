
console.log("currying...");

// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// console.log(add(1)(2)(3)) // statically handled


// function dynamicAddNum(a) {
//     return function (b) {
//         if (b) return (a + b);
//         return a;
//     }
// }

// console.log(dynamicAddNum(1)(2)(3)) // error need to fix




// function add(a) {
//     return function (b) {
//         if (b) return add(a + b);
//         return a;
//     }
// }


// console.log(add(2)(4)(2)(5)(7)()) // working fine and in last we have to call like peranthisis as () like this.
