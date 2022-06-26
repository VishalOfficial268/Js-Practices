// console.log('error handling....');

// if there is no error then the catch block will not be executed.
// try {
//     console.log('Start of try runs');
//     console.log('End of try runs');
// } catch (err) {
//     console.log('Catch is ignored, because there are no errors');
// }

// try {
//     console.log("I am from try block");
//     asbdbasd;
//     console.log("SJSJDASDSJD")
// } catch (error) {
//     console.log(error.toString())
//     console.log("error has occured")
// }



// try {
//     setTimeout(() => {
//         noSuchVariable; // script will die here
//     }, 1000);
// } catch (err) {
//     console.log("won't work");
// }



// setTimeout(() => {
//     try {
//         noSuchvaribale
//     } catch (error) {
//         console.log("Finally The error got....lol")
//     }
// }, 1000);


// try {
//     timeout
// } catch (error) {
//     console.log(error.name); // error object property name
//     console.log(error.message);  // error object property message
// }

// try {
//     hasdasdad;
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack), "----";
//     console.log(error)
// }

// try {
//     sdjkfsdjbsd
// } catch {
//     // no error handling no message will be provided:
// }

// let json = "{bad  json}"
// try {
//     let user = JSON.parse(json);
//     console.log(user)
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message)
// }



// let json = '{ "age": 30 }'; // incomplete data

// try {

//     let user = JSON.parse(json); // <-- no errors
//     alert(user.name); // no name!

// } catch (err) {
//     console.log("doesn't execute");
// }

// let error = new Error("things happense like siyyappe");
// // console.log(error);
// console.log(error.name);
// console.log(error.message);


// try {
//     JSON.parse('{bad json type0_0}')
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }


// let json = '{"age": 27}';
// try {
//     let user = JSON.parse(json);
//     if (!user.name) {
//         throw new SyntaxError("Incompleted Dtaa, name peroperty not found.");
//     }
// } catch (error) {
//     console.log(error.name);
//     console.log("Error Message: ", error.message);
// }

// let json = '{ "age": 30 }';
// try {
//     user = JSON.parse(json)
// } catch (error) {
//     console.log("JSON Error - ", error)
// } // It will show on the browser

// try {
//     let sum = 8 + 5;
//     console.log(sum)
// } catch (error) {
//     console.log(error.message)
// } finally {
//     console.log("Budyy! I am from finlly block...");
// }


// try {
//     lalalala;
//     console.log(lalalala)
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// } finally {
//     console.log("Budyy! I am from finlly block...")
// }


// function func() {
//     // start doing something that needs completion (like measurements)
//     try {
//         return 1;
//     } finally {
//         // complete that thing even if all dies:
//         console.log("Finally Wala called.") //finally first call in case of returning something:
//     }
// }

// console.log(func());


//C U S T O M   E R R O R   E X T E N D I N G   E R R O R S

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError"
//     }
// }

// function test() {
//     throw new ValidationError("Whoops!!");
// }

// try {
//     test();
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }


class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomValidationError"
    }
}


function readUser(json) {
    let user = JSON.parse(json);
    if (!user.age) {
        throw new ValidationError("No Field: age");
    }
    if (!user.name) {
        throw new ValidationError("No Field: name");
    }
    return user;
}

try {
    let user = readUser('{"age": 27}')
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("Invalid Data: " + error.message);
    } else if (error instanceof SyntaxError) {
        console.log("JSON Syntax Error: " + error.message);
    } else {
        console.log(error.message);
        throw error;
    }
}