const log = console.log;
/** Basics and Tricky */
//console.log(NaN ** 0); // exceptional case: output = 1

//console.log(null === null);  //null

// console.log(undefined === undefined) //undefined

//console.log(typeof null ) //output: object (But it is js known official error, null is just a special value)

//typeof is a operator not a function

//console.log(typeof 10 + 2) // output number2 // without paranthesis it doesn't consider spaces
//console.log(typeof (10 + 2)) // output number


// let name = "Ilya";
// console.log(`hello ${1}`); // output: hello 1
// console.log(`hello ${"name"}`); // output: hello name
// console.log(`hello ${name}`); // output: hello Ilya

//console.log(typeof ("7" / "2")); //automatically conversted by the type conversion as :Number

//Numeric conversion:
// console.log(Number(undefined));  //output: NaN, type: number 
// console.log(Number(NaN)) //output: NaN, type: number
// console.log(Number(null)) // output: 0, type: number
// console.log(Number(true)) // output: 1, type: number
// console.log(Number(false)) // output: 1, type: number
// console.log(Number("I am string but")) //output: NaN, type: number


//Boolean Conversion:
// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean("hello")); // true
// console.log(Boolean("")); // false
// console.log(Boolean("0")); // true
// console.log(Boolean(" ")); // true because of just the space
// console.log(Boolean(NaN)) // false
// console.log(Boolean(undefined)) // false

//Maths
// console.log(2 ** 3) // exponential powers means that a to the power b
// console.log(64 ** (1 / 2)) //dividing by the 2 means making it as square root
// console.log(512 ** (1 / 3)) //dividing by the 3 means making it as cube root // not exact ans
// console.log(Math.cbrt(64)) // Maths built-in methods


// console.log("1" + 2); //string, output: 12
// console.log(1 + "2"); //string, output: 12
// console.log("1" + 2 + 3) //string, output: 123
// console.log(3 + 2 + "1") //string, output: 51


// console.log(Number(""));
// console.log(Number(" "));

// console.log(typeof (6 - '2'))
// console.log(typeof ('6' / 3))
// console.log(typeof ('8' / '4'))

// let x = 5;
// console.log(+x);
// let y = -2;
// console.log(+y);
// console.log(+true);
// console.log(+"");
// console.log(++x);


// let a = (1 + 2, 3 + 4, 5 + 9)
// console.log(a) //output: 14 beacuse of last expression will be considered.

// for (a = 1, b = 3, c = a * b; a < 10; a++, c++) {
//     console.log(c)
// }


// log("" + 1 + 0); //output 10, type: string
// log("" - 1 + 0) //output: -1, type: number
// log(true + false) //output: 1, type: number
// log(6 / "3") //output: 2, type: number
// log("2" * "3") //output: 6, type: number
// log(4 + 5 + "px") //output: 9px, type: string
// log("$" + 4 + 5) //output: $45, type: string
// log(typeof ("4" - 2)) //output: 2, type: number
// log(typeof ("4px" - 2)) //output: NaN type: number
// log(typeof ("  -9  " + 5)) //output: -9 5 , type: string
// log(typeof ("  -9  " - 5)) //output: -14, type: number
// log(typeof (null + 1)) //output: 1, number
// log(typeof (undefined + 1)) //output: NaN, type: number
// log(" \t \n" - 2) //output: -2, type: number



// console.log('a' > 'b')
// console.log('b' > 'a')
// console.log("2" > "12")
// log(null == undefined);
// log(undefined == null)
// log(undefined === null)

// if (false) {
//     log("I am true statements");
// } else {
//     log("I am false statement")
// }

// if ("0") {
//     log('Hello');
// }

// true || log("not printed");
// false || log("printed");

// log(!!1) // !! (double not ) converts in to the boolean
// log(!!null)
// log(!!0)
// log(!!12)
// log(!!"")
// log(!!"something")
// log(!!undefined)
// log(!!false)
// log(!!NaN)

// console.log(undefined ?? null ?? "tst");
// console.log("." ?? null ?? "tst");

// let height = 0;
// log(height || 100); // incorrect
// log(height ?? 100); // correct

// let x = (1 && null) ?? 3;
// log(x) //output: 3

