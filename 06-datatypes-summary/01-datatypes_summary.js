// Primitive
// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// Reference (Nonprimitive)
// Array, Objects, Functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol ('123')
console.log(id === anotherId);

const bigNumber = 3456543576654356754n

// Reference (Non primitive)
// Array, Objects, Functions
const hero = ["Hulk", "Iron man", "King kong"];
let myObj = {
        name: "Khan" ,
        age: 22,
    }

const myFunction = function (){

console.log ("Hello world");
}

console.log(typeof(bigNumber));

