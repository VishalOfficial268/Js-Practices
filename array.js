// let fruits = ["Apple", "Orange", "Kiwi"];
// console.log(fruits[fruits.length - 1]);
// console.log(fruits.at(-1)); //Kiwi
// console.log(fruits.at(-3)); //Apple
// console.log(fruits.at(0)) //Apple

//Pop method:
// let fruits = ["Apple", "Orange", "Kiwi"];
// let popped = fruits.pop(); //remove the last element and aftect the main array also
// console.log(popped, fruits);

//Push method:
// let fruits = ["Apple", "Orange", "Kiwi"];
// fruits.push("New Fruits");
// console.log(fruits); // last element will be added as pushed element

//shift method:
// let fruits = ["Apple", "Orange", "Kiwi"];
// fruits.shift(); // it will remove from the 0th index in the array
// fruits.shift("Orange"); // if it finds the element start to till the query it will remove
// console.log(fruits);

// let fruits = ["Apple", "Orange", "Kiwi"];
// let arr = fruits;
// arr.push("New Eatable fruits")
// console.log(fruits); // even modified arr but also affected fruits because of refrence

// let arr = [1, 3, 7];
// let obj = {}
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

// best suitable loop for arrays
// let fruits = ["Apple", "Orange", "Kiwi", "Pomgranate"];
// for (let i in fruits) {
//     console.log(i) //print only indexes
//     console.log(fruits[i]); // print evry fruits 
//     //finally not recomemnded
// }

// for (fruit of fruits) {
//     console.log(fruit) // recomemnded for array
// }

// for (let i = 0; i < fruits.length; i++) {
//     console.log(i) //print only indexes:
//     console.log(fruits[i]); //print the fruit one by one 
//     //very basic of the loop:
// }

//multi-dimentional array:
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(matrix[1][1]); //calling the nested array

// let arr = [1, 4, 3, 5];
// console.log(arr.toString()) //it implements automatically comma(,) seprated

//array comparision:
// console.log([] === []) // false in(double equals aslo)
// console.log([1] === [1]) // false in(double equals aslo)
// console.log([1, 2, 4] === [1, 2, 4]) // false in(double equals aslo)

// let arr1 = [];
// let arr2 = [];
// console.log(arr1 == arr2); //false

// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length - 1) / 2)] = "Classics"
// styles.shift();
// styles.unshift("Rap", "Reggae");
// console.log(styles);


// let arr = ['a', 'b'];
// arr.push(function () { console.log(this) });
// console.log(arr) // it will print the new array:
// console.log(arr[2]());


//splice methods:
// let arr = ["I", "am", "student"];
// let removed = arr.splice(1, 2, "will", "be", "a", "good", "engineer");
// console.log(removed) // gives the removed elements
// console.log(arr); // gives the modifed array

// let arr = ["t", "e", "s", "t"];
// console.log(arr.splice(1));
// console.log(arr.slice(1));

// let arr1 = [1, 2];
// let arr2 = [3, 4, 5]
// let arr3 = [6, 7, 8, 9, 10]
// let arrSum = arr1 + arr2;
// console.log(arrSum); //wrong as expected:
// console.log(arr1.concat(arr2)); //join two array:
// console.log(arr1.concat(arr2, arr3)) // multiple array also can be joined:


// let arr = [1, 2];
// let arrayLike = {
//     0: "something",
//     1: "else",
//     [Symbol.isConcatSpreadable]: true, //if this available
//     length: 2
// };
// console.log(arr.concat(arrayLike));

// let arr = ['I', 'will', 'be', 'a', 'good', 'engineer'];
// console.log(arr)
// arr.forEach((el, index, arry) => {
//     console.log(index + " - " + el);
//     console.log(arry);
// });


// let users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Pete" },
//     { id: 3, name: "Mary" }
// ];

// console.log(users)
// users.forEach(el => {
//     if (el.id == 2) {
//         console.log(el);
//     }
// })

// users.find((item, index, array) => {
//     console.log(item.id == 1);
// });


//filter methods:
// let users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Pete" },
//     { id: 3, name: "Mary" }
// ];

// let filteredArray = users.filter((item, index, array) => {
//     if (item.id < 3) return item;
// });
// let someUsers = users.filter(item => item.id < 3);
// console.log(filteredArray);
// console.log(someUsers);

// console.log("ItemSongs".length)


//map method:
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log(Array.isArray(lengths));
// console.log(lengths);



//sort method:
// let arr = [1, 2, 15];
// let sorted = arr.sort();
// console.log(sorted) //it prefer to convert based on the string case
// console.log(arr);


// let arr = [1, 3, 4, 8, 0, 6, 11, 2, 15];
// let sorted = arr.sort();
// console.log(arr); //it prefer to convert based on the string case

// for handling the case of numeric we have to handle via a callback function
// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
// console.log(arr.sort(compareNumeric)) // used by the call back:
// console.log(arr.sort((a, b) => { return (a > b) })); //no improvements
// console.log(arr.sort((a, b) => a - b)); // as expected 1,2,3 n so on.

// let countries = ['Österreich', 'Andorra', 'Vietnam'];
// console.log(countries.sort((a, b) => a > b))// incorrect
// console.log(countries.sort((a, b) => a.localeCompare(b))); //correct
// console.log(countries.sort((a, b) => a > b ? 1 : -1)); // incorrect


// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);


// let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
// console.log(arr);

// let str = "test";
// console.log(str.split("")); // 't', 'e', 's', 't'
// console.log(str.split("").join('; '));


// reduce methods:
// let arr = [1, 2, 3, 4, 5];
// let additionOfNumebrs = arr.reduce((a, b) => (a + b), 0);
// let result = arr.reduce((sum, current) => sum + current, 0);
// let additionOfNumebrs = arr.reduce((sum, current) => sum + current, 0); // 0 is as accumulator.
// let multiplicationOfNumbers = arr.reduce((multi, current) => multi * current, 1); // 1 is as accumulator.
// console.log(multiplicationOfNumbers);


// Quest - Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// function camelize(str) {
//     let camelCase = [];

// }

// camelize("ruby-rails-dynamic");

//Quest - Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// let arr = [5, 3, 8, 1];
// let filtered = [];
// function filterRange(arr, a, b) {
//     for (let val of arr) {
//         if (val >= a && val <= b) {
//             filtered.push(val);
//         }
//     }
// }

// filterRange(arr, 1, 4);
// console.log(filtered); // 3, 1
// console.log(arr); // 5, 3, 8, 1


// let arr = [5, 2, 1, -10, 8];
// let res = arr.sort((a, b) => b - a);
// console.log(res);

// let arr = ["HTML", "JavaScript", "CSS"];
// console.log(arr.slice().sort());

//Quest - Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = function (users) {
//     let mappedUser = [];
//     for (let user of users) {
//         let Obj = {};
//         Obj.fullName = user.name + " " + user.surname;
//         Obj.id = user.id;
//         mappedUser.push(Obj);
//     }
//     return mappedUser;
// }
// console.log(usersMapped(users));


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];
// let names = [];
// for (let item of users) {
//     names.push(item.name)
// }
// console.log(names);


// let names2 = users.map((item) => item.name);
// console.log(names2);

//Quest - Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
// function sortByAge(users) {
//     let sorted = users.sort((a, b) => a.age - b.age);
//     console.log(sorted);
// }
// sortByAge(users);

//Quest - Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// let arr = [1, 2, 3];
// function shuffle(array) {
//     return array.sort(() => Math.random() - 0.5)
// }
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));

//Quest - Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
// let arr = [john, pete, mary];

//M-1
// function getAverageAge(arr) {
//     let totalAge = 0;
//     for (let item of arr) {
//         totalAge += item.age;
//     }
//     return totalAge / arr.length;
// }
// console.log(getAverageAge(arr));

//M-2
// let averageAge = arr.reduce((init, user) => init + user.age, 0) / arr.length;
// console.log(averageAge);


//Quest - Create a function unique(arr) that should return an array with unique items of arr.
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// function unique(arr) {
//     let sortedArr = [];
//     for (item of arr) {
//         if (!sortedArr.includes(item)) {
//             sortedArr.push(item);
//         }
//     }
//     return sortedArr;
// }
// console.log(unique(strings)); // Hare, Krishna, :-O


//Quest - Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
// let users = [
//     { id: 'john', name: "John Smith", age: 20 },
//     { id: 'ann', name: "Ann Smith", age: 24 },
//     { id: 'pete', name: "Pete Peterson", age: 31 },
// ];
// function groupById(users) {
//     let obj = {};
//     for (let item of users) {
//         obj[item.id] = item;
//     }
//     return obj;
// }
// let usersById = groupById(users);
// console.log(usersById);




// I T E R A B L E S
// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
// };
// arrayLike = Array.from(arrayLike);
// console.log(arrayLike)

// let str = "Strings";
// console.log(Array.from(str)) //will be converted as array

// let user1 = { id: 'john', name: "John Smith", age: 20, length: 3 };
// console.log(Array.from(user1)) // by length, still can not be convertable into array


// for (let ar of arrayLike) {
//     console.log(ar)
// }


// let map = new Map();

// map.set('1', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1');
// console.log(map)
// console.log(24+6)


















