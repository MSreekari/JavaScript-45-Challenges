import { createCounter } from './challenge1.js';

// Challenge 1
console.log("Challenge 1");
const counter = createCounter();
console.log(counter.increment());//1
console.log(counter.increment());//2
console.log(counter.decrement());//1
console.log(counter.increment());//2
console.log(counter.decrement());//1

