// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id == anotherId);

const bigNumber = 3424324234234n


// Reference (Non primitive)

// Array, Objects, Functions

const heros  = ["abc", "xyz", "pqr"];
let myObj = {
    name: "jig",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber)


// Stack (Primitive), Heap (Non-Primitive)

// let myYbname = Ecleva;
myYbname = "jigneshthedeveloper"

console.log(myYbname);


let userOne = {
    email: "user@google.com",
    upi: "user#ecleva"
}

let usertwo = userOne

usertwo.email = "user01@google.com"

console.log(userOne.email);
console.log(usertwo.email);