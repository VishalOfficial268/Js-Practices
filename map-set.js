// console.log("map-set file");
// M A P - S E T

// let map = new Map();
// map.set("index", 0);
// map.set("strings", "Harry Potter");
// map.set(4,"Emma Watson")
// console.log(map);
// console.log(map.size)
// console.log(map.get("strings"));
// console.log(map.get(4));


// let john = {name : "John", job: "Artist"}
// let map = new Map();
// map.set(john, 12222222);
// map.set("item", "New Item")
// console.log(map);
// console.log(map.size);
// console.log(map.get(john))

//
// for(let key of map.keys()) {
//   console.log(key);
// }

// for(let val of map.values()) {
//   console.log(val);
// }

// for(let entry of map.entries()) {
//   console.log(entry)
// }


//buit-in foreach method for map:
// map.forEach((value,key, map) => {
//     console.log("The value of the key(" +key+")" + "is - " + value)
// });

// let Obj = { name: "John", role: "admin", active: true}
// console.log(Object.entries(Obj)) //it makes in array with key value but in the array:

// let Obj = { name: "John", role: "admin", active: true}
// let myMap = new Map(Object.entries(Obj));
// console.log(myMap);
// console.log(myMap.get("name")); //John

// let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4]
// ]);
// console.log(prices.banana); // 1


// let arr = [["fruitsname", "Kiwi"], ["dryfruitsname", "Almond"]]
// let Obj = { name: "John", role: "admin", active: true};
// let checkObj = Object.fromEntries(arr); // It converts 2D array in the single ittrable Object
// console.log(checkObj.dryfruitsname)

// let map = new Map();
// map.set("banana", 1);
// map.set("mango", 2);
// map.set("meat", 4);
//
// let obj = Object.fromEntries(map);
// console.log(obj)

//
// let map = new Map();
// map.set("item1", 101);
// map.set("item2", 202);
// console.log(map);
// console.log(map.has("item1"));
// map.delete("item2");
// console.log(map.has("item2"));
// map.clear()
// console.log(map)


// S E T    M E T H O D S:

// let set = new Set();
// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);

// console.log(set);
// for(let user of set) {
//   console.log(user.name)
// }

// let set = new Set();
// let arr = [1,3,2,4,5,6,7];
// arr.push(2)
// set.add(arr);
// console.log(set)
// 
// let arr = [1,3,2,4,5,6,7,7,7,4,4,3,0,1];
// let set = new Set(arr); // no duplicated value will be entered:
// // console.log(arr);
// let uniqueValues = Array.from(set);
// let sorted = uniqueValues.sort((a, b) => a - b);
// console.log(sorted)


//Quest - Create a function unique(arr) that should return an array with unique items of arr.
// M-1
// function unique(arr) {
//   let set = new Set();
//   for(let val of arr) {
//     set.add(val);
//   }
//   return set;
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log(unique(values));

//M-2
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log(unique(values));

// Quest - Write a function aclean(arr) that returns an array cleaned from anagrams.
//Anagrams - are words that have the same number of same letters, but in different order. ex-(nap - pan, ear - are - era);
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// function aclean(arr) {
//   let map = new Map();
//   for(let word of arr) {
//     let sorted = word.toLowerCase().split("").sort().join("");
//     map.set(sorted, word);
//   }
//   return Array.from(map.values());
// }
// console.log(aclean(arr));


// function aclean(arr) {
//   let map = new Map();
//
//   for (let word of arr) {
//     let sorted = word.toLowerCase().split('').sort().join('');
//     map.set(sorted, word);
//   }
//   return Array.from(map.values());
// }
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log( aclean(arr) );



//W E A K M A P   &    W E A  K S E T

// let john = { name: "John" };
// let array = [ john ];
// john = null;
// console.log(array) // by the refrence it comes in the array
//
// let john = { name: "John" };
// let map = new Map();
// map.set(john, "testing");
// john = null;
// console.log(map) // still comming as the john object:

// let weakmap = new WeakMap();
// let obj = {};
// weakmap.set(obj, "Okay");
// weakmap.set("newKye", "testing");
// console.log(weakmap);

// let john = { name: "John" };

// let map = new Map();
// map.set(john, "testingMap")
// let array = [ john ];

// john = null; // overwrite the reference
// console.log(array)
// console.log(map)


// let user = {name : "john", age: 26}
// let map = new Map();
// let weakMap = new WeakMap();
// map.set(user, "userItemFromMap");
// weakMap.set(user, "userItemFromWeakMap");
// user = null;
// weakMap.set("test","newTest")


// console.log(map);
// console.log(weakMap);








