// console.log("i am outside the html");
// var answer;
// console.log(answer);

// var let const
// rules for naming a variable
//1) it cannot be a reserved word
//2) it must be meaningful
// let x = "kehinde"
//3) it cannot start with a number 
//  let 1x = "kehinde"
//  //cannot contain most special character
//  let _my_name = kkenny
//  // it is case sensitive 
//  let name = kenny
//  let Name = kenny

// let firstname = "kehinde";
// let lastName = "bil%&&*&*)&^%#(*)(&)_)_+&^%%$#lions\aire";

// console.log(firstname,lastName)

//consts
// const amount = 200;

// console.log(amount)

// PRIMITIVE DATA TYPES
// string 
// boolean
// number
//undefined
// null

// let name = "sajin        o"
// let isApproved = true;
// let age = 40;
// let firstname
// let selectedColor = null

// console.log(typeof(name))
// console.log(typeof(isApproved))
// console.log(typeof(age))
// console.log(typeof(firstname))
// console.log(typeof(selectedColor))

//REFERENCE TYPE

//Object
//Array
//function

//Object
// let person = {
//     name : "sajin o",
//     age : 40,
//     height: 5.5,
// }

// person.name = "ogaga"
// person["name"] = "person pikin"

// console.log(person)

// Array
// a data structure we use to represent a list of items

// let selectedColor = [ 'red', 'blue', 'green', 'purple', 300, null, "bimpe"]
// console.log(selectedColor)


// Function 
// are one of the fundamental building blocks of Javascript. it perform a task and execute or return a value.

// function greet() {
//     //body of function
//     console.log('hello world')
// }

// console.log(greet())
// const name = "bisoi"
// function greet(name) {
//     console.log('hello '  + name)
// }

// greet(name)

// function greet(firstName, lastName) {
//     console.log('hello '  + firstName + ' ' + lastName)
// }

// greet('sajin', "ogaga")

// function add(number) {
//     return number + number
// }

// console.log(add(10))


// function add(a, b , c) {
//     return a + b + c
// }

// console.log(add(66, 100, 60))

// STRING CONCATENATION
// let name = "sajin"
// let age = 40

// archaic method
// console.log("My name  " + name + " i am " + age + " years old")

// Template literals

// console.log(`my name is ${name} and i am ${age} years old`)

// STRING AND PROPERTIES

// let s = "HELLO WORLD"
// let val
// // val = s.length
// val = s.toLowerCase()
// val = s.toUpperCase()
// console.log(val)

// // ARRAY METHODS AND PROPERTIES
// const colors = ['black', 'white', 'red', 'blue']
// colors.push('yellow')
// colors.unshift('grey')
// colors.pop()
// colors.shift()

// var takeWhite = colors.indexOf("white")
// colors.splice(takeWhite, 1)

// console.log(colors)

// ARITHEMETIC OPERATORS
// +, -, /, *, %, **

// console.log(5+5)
// console.log(5-5)
// console.log(5*5)
// console.log(10/5)
// console.log(25%3)
// console.log('5' + 5)
// console.log(5**5)

// let y = 5
// console.log(y)


// object literals
//  const person = {
//      firstName: 'sajin',
//      lastName: 'ogaga',
//      age: 50,
//      hobbies:['music', 'woman', 'hennesy'],
//      address: {
//          street: '230 yaba st',
//          city: 'lagos',
//          state: 'Lagos'
//   }
//  }

//  person.address.city = "abuja"
//  person.hobbies.unshift('shayo')
//  person.hobbies.push('ogidiga')
//  delete(person.hobbies[2])
//  console.table(person)


// const users = [
// {
// name: 'person',
// age: 23,
// email: "p1@gmail.com",
// },
// {
// name: 'person 2',
// age: 31,
// email: "p2@gmail.com",
// },
// {
// name: 'person 3',
// age: 155,
// email: "p3@gmail.com",
// }
// ];

// console.table(users)

//comparison operator
// = assigns a value to a variable
// == compares the value of the variable
// === compares the value and type of the variables
// ! returns the opposite boolean
// != compares the inequality based on value
// ! == negates the value and type of the variables

// AND(&&) OR(||) NOT(!)

// what is a loop?

// for (let i = 0; i < 10; i=i+3) {
// 	console.log(i);
// }

// let i = 0;
// while (i < 10) {
//     console.log(i); i++;
// }

// const number = [0, 1, 3 , 5, 7, 87, 32]

// for (let i = 0; i < number.length; i++) {
//     console.log(number[i])
// }

// conditional statement
// if else

// const color = 'white';

// if (color === "red") {
//     console.log('color is red')
// } else if (color === "green") {
//     console.log('color is green')
// } else if (color === "blue") {
//     console.log('color is blue')
// }   else {
//     console.log('color unknown')
// }

// switch (color) {
// case 'red':
// console.log('color is red');
// break;
// case 'blue':
// console.log('color is blue');
// break;
// default:
// console.log('color is neither red nor blue');
// }

// ternatry operator

// const result = condition
//   ? trueExpression
//   : falseExpression

// let color = 'blue'
// let result = color === 'red' ? 'color is red' : 'color isnt red'
// console.log(result)