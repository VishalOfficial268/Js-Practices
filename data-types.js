// console.log("data-types -----------------------------")
// let nums = 1_00_000;
// console.log(nums);

// let billion = 7.3e9;
// console.log(billion);

// let ex = 1e5;
// console.log(ex)

// let n = 1e-5;
// console.log(n);

// console.log(0xff); //hexa decimal
// console.log(0xfc); //hexa decimal
// console.log(0b11111111) //binary
// console.log(0o377) // octaol


// let num = 255;
// console.log(num.toString(2)) // base 2 means binary
// console.log(num.toString(14)) // base 16 means for hex color code etc.

// let randomNumber = 4.1;
// console.log(Math.floor(randomNumber)); // it condsider towards the lower if there is decimal:

// let randomNum = 4.1;
// console.log(Math.ceil(randomNum)); // it condsider towards the heigher if there is decimal:

// let nums = 1223.2344;
// console.log(Math.random(nums));


// let num = 2333;
// console.log(num.toString(8))

// let numberss = 6.88;
// console.log(Math.round(numberss)); // round up the nearest whole numbers
// console.log(Math.trunc(numberss)) // truncate the all value after the decimals:

// let decimals = 6.78767;
// console.log(decimals.toFixed(3)); //get 3 digit decimals:
// console.log(Math.round(decimals * 100) / 100); // by logic 2 digit
// console.log(Math.round(decimals));
// console.log(typeof decimals.toFixed(8)) // string 

// let infinitys = 1e500;
// console.log(infinitys);
// console.log(0.1 + 0.2); // gives error results:

// let sum = 0.1 + 0.2;
// console.log(typeof (+sum.toFixed(2))) // number
// console.log(+sum.toFixed(2)) // output - 0.3 (because of unary operator)

// console.log(9999999999999999) //by the precision loss , it gives 10000000000000000:

// console.log(isNaN(NaN));
// console.log(isNaN("str"));
// console.log(Math.max(1, 3, 5, 78, 0, -8, -99, 5, 7, 7, 77)); // max
// console.log(Math.min(1, 3, 5, 78, 0, -8, -99, 5, 7, 7, 77)); // min


// console.log(parseInt("100px"));
// console.log(typeof (parseInt("100px"))); // number
// console.log(parseFloat("100px"))
// console.log(typeof (parseFloat("100px")));  // number
// console.log(parseInt("100px200")); //100
// console.log(parseFloat("100px200")); //100
// console.log(parseInt(100.8578345)); //complete numbre and neglect the decimals:
// console.log(parseFloat(44.567567)); //also include the decimals value:


// console.log(randomInteger(1, 5)); // 1
// console.log(randomInteger(1, 5)); // 3
// console.log(randomInteger(1, 5)); // 5

// let str = "Hellow World";
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str.charAt(0)); // char by the index:
// console.log(str.charCodeAt(0)); // gives the code:
// console.log(str.charAt(110)); // char by the index:
// console.log(str[100]); // undefined (if the mentioned position is not found)
// console.log(str.charAt(100)); // '' (if the mentioned position is not found)


//loop over the string ( treat as array):
// for (let arrIndex of str) {
//     console.log(arrIndex);
// }

// // "use strict"
// let newStr = "hello";
// newStr[0] = "b"; //error in strict mode
// console.log(newStr)


// let word = "interface";
// console.log(word.substring(-2), "=====") //back to from it doest not work o:
// console.log(word[0].toUpperCase() + word.substring(1));
// console.log("Iamdoingbest".substring(3)) //doingbest as output


// let str = 'new id is Widget with id';
// console.log(str.indexOf("id", 8));

// function updateVegCollections(vegArray, veggie) {
//     if (vegArray.indexOf(veggie) === -1) {
//         vegArray.push(veggie);
//         console.log("new veggie added in collection");
//         return vegArray;
//     } else {
//         console.log("already exist the veggie");
//         return veggie;
//     }
// }
// let vegArray = ['potato', 'brockli', 'spinitch', 'brinjal'];
// console.log(updateVegCollections(vegArray, "onion"));


//Quest - Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
// function readNumber(data) {
//     if (typeof data == "number") {
//         return data;
//     } else {
//         readNumber(data);  //All wrong:
//     }
// }
// readNumber("adasdas");
//Quest - Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

//includes:
// let str = "I am the developer";
// console.log(str.includes("dev"));
// console.log(str.includes("dev", 12));


//substring, substr, slice methods:
// let str = "stringify";
// console.log(str.slice(0, 4)); //strat, to end : gives the result from the string: and strt from 1 not 0
// console.log(str.slice(0, 1)); // strat from 1 not 0;
// console.log(str.slice(2)) // if 2nd argument the it goes till the end.
// console.log(str.slice(-3, -1)) // last -1 is to leave that particular and but -3 counts fom the last.

//substring:
// let str = "Developer";
// console.log(str.substring(2, 5)); //start and endpoint respectively 2, 5(end);
// console.log(str.substr(2, 12)) // start and length and if the length is exceeded the gives the whole result as from strtpoint:

// let str = "I am the developer...."
// console.log(str.endsWith("developer..."));



// let cityArray = ['gorakhpur', 'lucknow', 'deoria', 'kushinagar'];
// let cityList = [];
// for (let i = 0; i < cityArray.length; i++) {
//     let city = cityArray[i].charAt(0).toUpperCase() + cityArray[i].substring(1);
//     cityList.push(city);
// }
// console.log(cityList);

// function checkSpam(str) {
//     if (str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
// checkSpam("buy ViAgRA now");
// checkSpam("bfree xxxx");
// checkSpam("innocent rabbit");

/*
function turncate(str, maxlength) {
    if (str.length > maxlength) {
        let diff = (maxlength) - str.length;
        str = str.slice(0, -diff)
        str = str + "..";
    }
    console.log(str);
} */


// function turncate(str, maxlength) {
//     if (str.length > maxlength) {
//         str = str.slice(0, - maxlength + 1)
//         str = str + "..";
//     }
//     console.log(str);
// }
// turncate("What I'd like to tell on this topic is:", 20);
// turncate("Hi everyone!", 20);

// function extractCurrencyValue(str) {
//     let val = +str.slice(1);
//     return val;
// } console.log(extractCurrencyValue("$120"));
// console.log("abcdef".substring(1));
// console.log("abcdef".slice(1));
// console.log("abcdef".substr(1));

