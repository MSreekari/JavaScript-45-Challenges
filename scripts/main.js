import { createCounter } from './challenge1.js';
import { createSecretHolder } from './challenge2.js';
import { rememberMe } from './challenge3.js';

// Challenge 1
console.log("Challenge 1");
const counter = createCounter();
console.log(counter.increment());//1
console.log(counter.increment());//2
console.log(counter.decrement());//1
console.log(counter.increment());//2
console.log(counter.decrement());//1

//Challenge 2 
console.log("Challenge 2");
const secretHolder = createSecretHolder("password");
console.log(secretHolder());

//Challenge 3 
console.log("Challenge 3");
const user = rememberMe("JavaScript");
console.log(user());
