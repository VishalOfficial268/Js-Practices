//QUEST - 1 Write a JavaScript function that reverse a number.
//M-1
// let n = 12345;
// function reverseNum(n) {
//     n = n + "";
//     let output = n.split("").reverse().join("");
//     // console.log(typeof (output));
//     return output;
// }
// console.log(reverseNum(12345));

//M-2:
// function revreseNum(n) {
//     let arr = n.toString().split("");
//     for (let i = arr.length; i > 0; i--) {
//         console.log(parseInt(i), typeof (i));
//     }
// }
// revreseNum(12345);

//QUEST -2: Write a JavaScript function that checks whether a passed string is palindrome or not? 
// function checkPalindrome(str) {
//     let arr = str.split("");
//     for (let i = 0; i < arr.length; i++) {
//         let palindromeCase = false;
//         if (arr[1] == arr[arr.length - 1]) {
//             console.log("kk")
//         }
//         console.log(arr[i])
//     }
// }
// checkPalindrome("madam");

// Write a JavaScript function that checks whether a passed string is palindrome or not? 

// function check_Palindrome(str_entry) {
//     // Change the string into lower case and remove  all non-alphanumeric characters
//     var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
//     var ccount = 0;
//     // Check whether the string is empty or not
//     if (cstr === "") {
//         console.log("Nothing found!");
//         return false;
//     }
//     // Check if the length of the string is even or odd 
//     if ((cstr.length) % 2 === 0) {
//         ccount = (cstr.length) / 2;
//     } else {
//         // If the length of the string is 1 then it becomes a palindrome
//         if (cstr.length === 1) {
//             console.log("Entry is a palindrome.");
//             return true;
//         } else {
//             // If the length of the string is odd ignore middle character
//             ccount = (cstr.length - 1) / 2;
//         }
//     }
//     // Loop through to check the first character to the last character and then move next
//     for (var x = 0; x < ccount; x++) {
//         // Compare characters and drop them if they do not match 
//         if (cstr[x] != cstr.slice(-1 - x)[0]) {
//             console.log("Entry is not a palindrome...");
//             return false;
//         }
//     }
//     console.log("The entry is a palindrome.");
//     return true;
// }
// check_Palindrome('aman');
// check_Palindrome('madam');
// check_Palindrome('nurses run');
// check_Palindrome('fox');

// QUEST -3: Write a JavaScript function that generates all combinations of a string.
// function allCombinations(str) {
//     let arr = str.split("");
//     let strConverted = "";
//     for (let i = 0; i < arr.length; i++) {
//         strConverted.charCodeAt(i) + ',';
//         for (let j = 0; j <= i; j++) {
//             strConverted += arr[j];
//         }
//     }
//     console.log(strConverted);
// }
// allCombinations("dog");

//Quest -4: Write a JavaScript function that returns a passed string with letters in alphabetical order.
// function alphabeticalOrder(str) {
//     let arrStr = str.toLowerCase().split("");
//     let reverseStr = arrStr.sort().join('');
//     console.log(reverseStr)
// }
// alphabeticalOrder("webmaster");

//QUEST -5: Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// function capFirstLater(str) {
//     let arr = str.split(" ");
//     let finalStr = "";
//     for (let i = 0; i < arr.length; i++) {
//         finalStr += " " + arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     console.log(finalStr);
// }
// capFirstLater("i am vishal");

//QUEST -6:  Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// function findLongestWord(str) {
//     let longestWord;
//     let longestLength = 0;
//     let arr = str.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//         let currentLength = arr[i].split("").length;
//         if (currentLength > longestLength) {
//             longestLength = currentLength;
//             longestWord = arr[i];
//         }
//     }
//     console.log(longestWord);
// }
// findLongestWord("The coding is very funny things and I am so much enjoying it.");

//QUEST - // convert the the given string in to the binary data:
// let mystr = "Hello World"; //given string:
// let Binary_output = 0;
// for (var i = 0; i < mystr.length; i++) {
//     Binary_output += mystr[i].charCodeAt(0).toString(2) + " ";
// }
// console.log(Binary_output);
//

//QUEST -7  Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
//Method -1:
// function findVowel(str) {
//     let strArr = str.toLowerCase().split("");
//     let vowelsArr = [];
//     for (let i = 0; i < strArr.length; i++) {
//         if (strArr[i] == "a" || strArr[i] == "e" || strArr[i] == "i" || strArr[i] == "o" || strArr[i] == "u") {
//             vowelsArr.push(strArr[i]);
//         } else {
//             continue;
//         }
//     }
//     console.log(vowelsArr.length)
// }
// findVowel("HiIam");

//Method -2:
// function findVowel(str) {
//     let getStr = str.toLowerCase();
//     let actualVowel = 'aeiou';
//     let totalNumberOfVowel = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (actualVowel.indexOf(getStr[i]) != -1) {
//             totalNumberOfVowel += 1;
//         }
//     }
//     console.log(totalNumberOfVowel);
// }
// findVowel("hiabcei");


//QUEST -8: Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// function findPrimeNumber(n) {
//     let output = "";
//     if (n === 1) {
//         return false;
//     } else if (n === 2) {
//         return true;
//     } else {
//         for (let i = 2; i < n; i++) {
//             if (n % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }
// console.log(findPrimeNumber(27));


//QUEST -9: Write a JavaScript function which accepts an argument and returns the type.
// function checkDatatype(data) {
//     return typeof data;
// }
// console.log(checkDatatype("sds"));

//QUEST -10: Write a JavaScript function which returns the n rows by n columns identity matrix.
// function matrix(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i === j) {
//                 console.log('0');
//             } else {
//                 console.log('1');
//             }
//         }
//         console.log('------------------');
//     }
// }
// matrix(4);


//QUEST -13:  Write a JavaScript function as factorial.
// function factorialOutput(n) {
//     let output = 1;
//     if (n === 0) {
//         console.log(1);
//     }
//     if (n === 1) {
//         console.log(0);
//     }
//     if (n > 1) {
//         for (let i = n; i > 0; i--) {
//             output *= i;
//         }
//     }
//     console.log(output);
// }
// factorialOutput(5);

//find the first lowest and greatest number from the array:
// function findLowestAndGreatestNumber(arr) {
//     let lowest = 1;
//     let greatest = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (lowest > arr[i]) {
//             lowest = arr[i];
//         }
//         if (greatest < arr[i]) {
//             greatest = arr[i];
//         }
//     }
//     console.log("The lowest - " + lowest);
//     console.log("The greatest - " + greatest);
// }
// findLowestAndGreatestNumber([1, 2, 3, 4, 5]);

//QUEST -15: Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
// function myfunction(b, n) {
//     let output = 1;
//     for (let i = 1; i <= n; i++) {
//         output *= b;
//     }
//     console.log(output);
// }
// myfunction(2, 3);
