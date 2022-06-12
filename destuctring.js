// let [a, b, c] = "abc"; //because of ittrable it is possible.
// console.log(a);
// console.log(b);
// console.log(c);



// let [firstname, , , title] = ["Vishal", 2,4," Gupta"];
// console.log(firstname + title);

// console.log("John Smith".split(' '));


//swaping variable:

// let [guest, admin] = ["Jane", "Pete"];
// console.log(guest);
// console.log(admin);

// [guest, admin] = [admin, guest]; // swaping
// console.log(guest);
// console.log(admin);


//A R R A Y   D I S T U C T R I N G:


// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(name1);
// console.log(name2);
// console.log(rest);


// let [guest = "newUser", admin = "unknown"] = ["Vishal"];
// console.log(guest);
// console.log(admin);




//O B J E C T  D I S T U C T R I N G:

// let {user, admin} = { user: "Vishal", admin: "Joravar" }
// console.log(user);
// console.log(admin);


// let obj = {
// 	username : "vishu04",
// 	email:"vishalofficial268@gmail.com",
// 	isadmin : false
// }

// let { username, email, isadmin } = obj;
// console.log(username);
// console.log(isadmin);
// console.log(email);




// let obj = {
// 	username : "vishu04",
// 	email:"vishalofficial268@gmail.com",
// 	isadmin : false
// }

// let {username, ...restObj} = obj;
// console.log(restObj);


// let {username , email, isadmin } =  { username : "vishu04", email:"vishalofficial268@gmail.com", isadmin : true }
// console.log(username);
// console.log(email);
// console.log(isadmin);



// let {username , email: em, isadmin: adm } =  { username : "vishu04", email:"vishalofficial268@gmail.com", isadmin : true }
// console.log(username);
// console.log(em); // em is going to be treat as new variable.
// console.log(adm); // adm is going to be treat as new variable.
	

	// function showMenu({
	//     title = "Menu",
	//     width = 100,
	//     height = 200
	// } = {}) {
	//     console.log(`${title} ${width} ${height}`);
	// }

	// showMenu();

	// let { props : varName = "default", ...rest} = { props : "new propserty", age:25, upcommingEvents: "New Release 2.0"};
	// // console.log(props); //if props is already but instead of using that u have used a new variable then the new variable will be accessable.
	// console.log(varName);
	// console.log(rest);



//Quest - Create the function topSalary(salaries) that returns the name of the top-paid person. 
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };


// function topSalary(salaries) {
// 	if(salaries == undefined || salaries == null) {
// 		return null;
// 	} else {
// 		let highSalaryPerson = {};
// 		let highestKey;
// 		let highestValue;
// 		let highSalary = 0;
// 		for(let [key, value] of Object.entries(salaries)) {
// 			if(highSalary < value) {
// 				highSalary = value;
// 				highestKey = key;
// 				highestValue = value;
// 			}
// 		}
// 		highSalaryPerson[highestKey] = highestValue;
// 		return highSalaryPerson;
// 	}
// }

// console.log(topSalary(salaries));















