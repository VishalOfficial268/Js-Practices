//Quest : Flatten array of arrays using JavaScript reduce.

// function flatenArray(arr) {
//     let resArr = arr.reduce((result, array) => result.concat(array));
//     return resArr;
// }
// console.log(flatenArray([[1, 2], [3, 4, 5], [8, 4, 9]]));



// Quest : Write a function to generate a random number.

// function genrateRandomNumber(start, end) {
//     return Math.floor(Math.random() * end) + start;
// }
// console.log(genrateRandomNumber(1, 99));

//Quest :  Write a function to add unlimited numbers:
// function addUnlimitedNumberM1(...argsNumb) {
//     return argsNumb.reduce((total, num) => total + num);

// }
// console.log(addUnlimitedNumberM1(1, 2, 3, 4, 5));

// function addUnlimitedNumberM2(...argsNumb2) {
//     let total = 0;
//     for (let i = 0; i < argsNumb2.length; i++) {
//         total += argsNumb2[i];
//     }
//     return total;
// }
// console.log(addUnlimitedNumberM2(1, 2, 3, 4, 5, 6));

//Quest :  Write a function to find the count of a letter in a string.
//Method -1:
// function letterCounter(Str, ch) {
//     let StrArr = Str.toLowerCase().split("");
//     let count = 0;
//     for (let i = 0; i < StrArr.length; i++) {
//         if (StrArr[i] == ch) {
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(letterCounter("exxxxxbbbbitionb", "b"));

//Method -2:
// function letterCounter(string, ch) {
//     let totalOccurence = 0;
//     string = string.toLowerCase();
//     for (let i = 0; i < string.length; i++) {
//         if (string.charAt(i) == ch) {
//             totalOccurence = totalOccurence + 1;
//         }
//     }
//     return totalOccurence;
// }
// console.log(letterCounter("IamtheString", "i"));

//Quest -3 : Write a function to check if a number is Prime.
