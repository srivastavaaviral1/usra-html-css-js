// alert("Instructor")

//Data types // number, string, boolean
//not a number
//not a sentence
// has to be a single word
// not collection of special characters
// if you want to inclide number, alwys use it after alphabets
// just 2 special characters are allowed ==== $ and _

// var numberOfStudents = 0

//PRIMITIVE DATA TYPES
// number, string, boolean, undefined, null

//NON PRIMITIVE DATA TYPES
//Object


//STORE ALL INFO OF AAKASH
// var studentInfo = {
//     name: "Aakash",
//     age: 83,
//     isHeAStudent: false,
//     studentFavNumbers: [1,3,4,21,32,56],
//     privateInfo: [false, "asdas"],
// }

// console.log(studentInfo)


// //arrays
// var primeNumbers = [
//     1,
//     "aviral",
//     true,
//     null, 
//     {
//     name: "Aakash",
//     age: 83,
//     isHeAStudent: false,
//     studentFavNumbers: [1,3,4,21,32,56],
//     },
//     {
//     hasGirlfriend: false
//     },
//     [218123,1243,534,54,67]
// ]
// console.log(typeof(primeNumbers))


// var x = null;
// console.log(x)

// console.log(typeof(numberOfStudents))
// numberOfStudents = "aviral"
// console.log(typeof(numberOfStudents))

// numberOfStudents = false
// console.log(typeof(numberOfStudents))
// console.log(numberOfStudents)

// var numberOfStudents = null;
// console.log(typeof(numberOfStudents))
// console.log(numberOfStudents)


// 1,2,3,4,65,7,100,5999.47236
// "Aviral", "Instroust of ns"
// true/false

// console.log(x)
// typescript
// js is a loosely typed language


//MIX AND MATCH DIFFERENT PRIMITIVE DATA TYPES

// var x = 1;
// var y = "2";

// var result = "$" + 4 + 5;

/// Number(x)
// Number(y)
/// Number(x) -  Number(y)

// console.log(result) // NaN
// console.log(typeof(result))


// var name = 43;


// var name = 65


// x = 231

///////// let const

// let name = 45;
// let name = 323


// const name1 = "aviral"

// name1 = "treww"

// var x = 5;

// var x = 10

// x = "aviral"

// var y = 10;

// var y = "aviral"

// y = 15


// let name = 5;

// let name1 = 5;

// // x = "aviral"


// const x = 5;

// // const x = 10
// x = 6;
// // const x = 10;


//Functionss

// DRY ===> DON'T REPEAT YOURSELF

// var name1 = "aviral"

// var name2 = "newton"

// var result = name1 + name2

// ------------------------------

// var name3 = "Surbhi"
// var name4 = "newton"

// var result1 = name3+ name4
// ------------------------------//
//Functions are first class in javascript
//FUNCTION DECLARATIONS
// addTwoStrings()
// function addTwoStrings(x) {
//     console.log('Hi my name is' + x)
// }

// addTwoStrings()


// console.log(addTwoStrings)

// addTwoStrings("aviral")
// addTwoStrings("debasis")

// console.log("hi aviral")
// typeof(result)
// alert("aviral")

//FUNCTION EXPRESSIONS
// var calculateString;
// calculateString()
//  var calculateString = function (x) {
//      console.log('Hi my name is' + x)
//  };



// function calculateString (fn1) {
//     // console.log(qwertyuiop);
//     // qwertyuiop();
//     // console.log(fn1)
//     return fn1
//     // console.log('Hi my name is')
// } 

// function name2() {
//     console.log("aviral")
// }
// name2()

// calculateString(name2)

// calculateString(name2) //???

// console.log(result)
// result()
// calculateString(name2)()




// calculateString("aviral")


//arrow function
//IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSION




//SCOPE

// var x = "aviral" // global scope

// function name() {
//     alert()
//     if(true) {
//         console.log(x)
//     }
// }


// name()

// alert() // globally scoped

// console.log(console.log("hgasdjkaghs"))

// what is the scope of var?
// var scope is global WRONGGGG
// var scope is functional?????



// var name1 = "aviral" 
// console.log(window.name1)


// function name1() {
//     if(true) {
//         let animalName = "elephant"
//     }
//     console.log(animalName) // elephant
// }


// console.log(animalName)// elephant
// name1()


//VAR
//you can redeclare
//you can redefine 
// VAR is functional scope
//var is hoisted


//let
//you can't redeclare
// you can redefine
// let is block scope
// let is not hoisted

//const
//you can't redeclare
// you can't redefine
// const is block scope
//const is not hoisted

// alert("aviral")
// var student = "Nitin"

// console.log(student)
// console.log(window.student)

// var animal ="elephant"
// console.log(animal)

// prompt('Enter your name')


//EXECTUION CONTEXT
// var student = "Nilesh"
// const student = "0"
// function getName() {
//     const student = "Nimisha";
//         function getNumber() {
//             const student = "Sneha"
//             console.log(student)   //??
//         }
//    getNumber()
// }

// getName()


//EXECTUION CONTEXT
// Hoisting ===> 
// console.log(a)

// let a = "aviral";

// console.log(a)


// console.log(student) //??error
// console.log(student + animal)
// function getName() {
//     // var student = "Nimisha";
//         function getNumber() {
//             // var student = "Sneha"
//             // console.log(student)   //??
//         }
//    getNumber()
// }

// getName()
// let student;
// console.log(animal)

// var animal = "elephant"

// console.log(student)
// console.log(animal)

// x()
// function x() {
//     console.log('Hi i am function declaration')
// }
// x()

// var y;
// // y()
// y = function () {
//     console.log('Hi i am function expression')
// }
// y();

// loops and conditions
// for(let i =0 ; i<10; i++) {
//     console.log(i)
// }



//OPERATORS
// + , - * / 

//ASSIGNMENT OPERATOR
// let x = 1


//compariosn operator
// == compares values
// === compares values as well as data type
// !=
// >, < , >=, <=
// (10>5) ? (3>2) ? console.log("this") : console.log("sdajkh") : consoe.log("no")
// false <= true

//logocal operator
// &&, ||

//searches for first false condition
// return the last condition
// 5<2 && 3>1 && console.log("aviral")

//searches for first true condition
// return the last one
// ||
// (5>10) && console.log("yess")



// ---------------------------------------new cLASS
// var x;
// var y;
// var getSum;
// console.log(x)
// console.log(b)
// x = 10;
// y =20;

// getSum = function() {
//     console.log(x+y)
// }

//100lines
// getSum(); // undefined

// IIFE === immediately invoked function expression
// var num1 = 10;
// var num2 = 20;

// var result = (function(x,y) {
//    return x+y
// }(num1,num2))


// console.log(result)


// var student  = "Nilesh";


// 2 things
//1. variable intialization; var name;
///2. variable assignment; name = 13;

// let student = "Nilesh"

// function getAnswer() {
//     console.log(student) //?? error
//     student = "Shivani";
//     console.log(student) //?? "Shivani";
// }
// getAnswer()
// getAnswer()
// console.log(sameer)
// let student2; //Temporal dead zone
// console.log(student2) //?? error
// student2 = "Shivani";
// (function() {
//     var student;
//     console.log(student) //undeined
//     student = "NILESH";
//     console.log(student) // Nilesh
// }())


// let car1 = "Tesla";

// (function() {
//     car3 = "volvo"
//     console.log(car3);  //1
//     var car2 = "Creta"
//     car2 ="audi"
//     console.log(car1) //2
// }())

// // console.log(car2) //3
// console.log(car3) //4
// // var car1 ="bmw"

// // animal = "elephant"

// console.log(abc)
// let abc = 10

//??

// Number("23aviral") ==== > ?

// =========================dom(Document object modal) mainpulation===================

// JS FIDDLE CODE LINK ====> https://jsfiddle.net/srivastavaaviral1/hxuon4qm/132/

//Select any element // function predefined
//add any new elemt 
//edit any elemet
//delete any element

// document.title = "Aviral's website"

//select elementby id

// let quote = "Aviral's  friend said something"


//getElementsByTagName
//getElementsByClassName
//getElementById
//querySelector
//querySelectorAll


// document.getElementById("main-header").style.color = "red"
// header.style.color = "red"

// let li = document.querySelectorAll(".list-group-item")
// console.log(li[0])

// let student = {
//     name: "aviral"
// } 
// let x1 = {} 
// console.log(x1)

// let x = new Object()
// console.log(x)
// let student = {
//     name: "aviral",
//     age: 21,
//     getName() {
//         console.log("aviral")
//     },
//     "get age": false,
//     physicalFeature: 10,
// }


// student ? student.physicalFeature? console.log(student.physicalFeature.hairColor): null : null


// student && student.physicalFeature && console.log(student.physicalFeature.hairColor)

//OPTIONAL CHAINING
// console.log(student.physicalFeature.hairColor)

// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))

// console.log(student)
// console.log(student["get age"])
// console.log(student.name)
// console.log(student.age)
// console.log(student.physicalFeatures.hairColor)
// student.getName()

// student.isNewtonSchoolStudent = true;
//pass by referance and pass by value
// console.log(student)

// delete(student.physicalFeatures.hairColor)
// console.log(student)

// let stduent = "Tauseef"

// console.log(stduent);

// student = "Sameer"
// console.log(student)




// let str1 = "aviral"

// str1 =====> x
// str2 ======> y
// let str2 = str1;

// console.log('1.', str1)
// console.log('2.',str2)

// str1 = ""

// console.log('3.',str1)
// console.log('4.',str2)


// obj1 ========> x <======== obj2
//Pass by referance
// let obj1 = {
//     name: "surbhi"
// }

// let obj2 = obj1;

// console.log('1.', obj1)
// console.log('2.',obj2)

// obj1.name = "nilesh"

// obj1 = {
//     name: "nilesh"
// }

// console.log('3.',obj1)
// console.log('4.',obj2)


// can my variable name be var get stduent