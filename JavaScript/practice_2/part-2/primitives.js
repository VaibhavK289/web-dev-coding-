//Number

let balance = 120;
console.log(typeof(balance));

let anotherBalance = new Number(120);
console.log(anotherBalance);

console.log(typeof balance);
console.log(typeof anotherBalance);

let isActive = true;
let isOnline = new Boolean(true);  // not a recommended way

console.log(isActive);
console.log(isOnline);

// string 

let myString = "Hello";
let myStringOne = 'Helllll0';
let username = 'vaibhav';

let oldGreet = myString + " " + "Vaibhav";
let newGreet = `Hello ${myString}`;
console.log(oldGreet);
console.log(newGreet);

let demoOne = `Hello ${2*2}`;
console.log(demoOne);
