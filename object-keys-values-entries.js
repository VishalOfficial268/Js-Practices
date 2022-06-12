// let user = {
//   name: "John",
//   age: 30
// };

// console.log(Object.keys(user)) // return array as all keys
// console.log(Object.values(user)) // return array as all values
// console.log(Object.entries(user)) // return array as  sub array all values

// console.log(object.fromEntries(user))

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   // convert prices to array, map each key/value pair into another pair
//   // and then fromEntries gives back the object
//   Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// );
// console.log(doublePrices.meat);

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// console.log(sumSalaries(salaries)); // 650

// function sumSalaries(salaries) {
//   let total = 0;
//   for(let val of Object.values(salaries)) {
//     total += val;
//   }
//   return total;
// }


let user = {
  name: 'John',
  age: 30
};

console.log( count(user) ); // 2

function count(user) {
  return Object.keys(user).length;
}

 
