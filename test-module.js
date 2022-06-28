// 📁 sayHi.js
export function sayHi(user) {
    console.log(`Hello, ${user}!`);
}

export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
    constructor(name) {
        this.name = name;
    }
}


function addTwoNumbers(x, y) {
    return x + y;
}

function multiplyTowNumbers(x, y) {
    return x * y;
}

export { addTwoNumbers, multiplyTowNumbers }

export default function defaultFunctins(name) {
    let welcomeGreet = "Hi, Dear User" + name;
    return welcomeGreet;
}