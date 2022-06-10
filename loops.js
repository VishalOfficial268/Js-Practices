//While loops:
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }


// let i = 5;
// while (i != 0) {
//     console.log(i);
//     i--;
// }

// do while loops
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i <= 0);


//for loops:
// for (let i = 0; i < 20; i++) {
//     if (i == 15) {
//         console.log(" I am breaking the loops");
//         break; // if  ondition matched the loop will be breaked:
//     }
//     console.log(i);
// }

// for (let i = 0; i < 20; i++) {
//     if (i % 2 == 0) continue;
//     console.log(i);
// }

// for (let i = 0; i < 20; i++) {
//     if (i % 2 != 0 || i == 0) continue;
//     console.log(i)
// }

//nested loops:
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(i);
//         console.log(j);
//     }
// }

//break the loop via lables:
// outer: for (let i = 0; i <= 3; i++) {
//     inner: for (let j = 0; j <= 4; j++) {
//         if (i == 1) break outer;
//         if (j == 3) break inner;
//         console.log(i);
//     }
// }

// let i = 5;
// while (i) {
//     console.log(i--);
// }

// let i = 0;
// while (++i < 5) console.log(i);

// let j = 0;
// console.log("----------------- s e p r a t o r -------------------")
// while (j++ < 5) console.log(j)

// for (let i = 0; i < 5; ++i) console.log(i);

// for (let i = 0; i < 5; i++) console.log(i);


// find the even numbers between 0 -10:
// for (let even = 2; even <= 10; even++) {
//     if (even % 2 != 0) continue;
//     console.log(even);
// }

// console.log("---------------------- s e p r a t o r -----------------------------");

// find the odd numbers between 0 -10:
// for (let odd = 2; odd <= 10; odd++) {
//     if (odd == 1) console.log(odd)
//     if (odd % 2 == 0) continue;
//     console.log(odd);
// }

// function repeatable(nTimes) {
//     do {
//         nTimes = prompt("please provide the number", 0); //in browser only applicable:
//     } while (nTimes <= 100 && nTimes) {
//         console.log("please enter more than 100")
//     }
// }
// repeatable(1);

// for (let i = 1; i < 20; i++) {
//     if (i % 2 == 0) continue;
//     console.log(i);
// }

// for (let i = 0; i < 20; i++) {
//     if (i % 2 != 0) continue;
//     console.log(i)
// }


