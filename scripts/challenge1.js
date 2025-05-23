//Create a createCounter function that returns an increment and decrement function.
// This is a simple counter function that can increment and decrement a count.
// It uses closures to maintain the state of the count variable.
// The createCounter function returns an object with two methods: increment and decrement.
// The increment method increases the count by 1 and returns the new count.
// The decrement method decreases the count by 1 and returns the new count.
// The count variable is private to the createCounter function and cannot be accessed directly from outside. 

export function createCounter(){
    let count = 0;
    function increment(){
        return ++count;
    }
    function decrement(){
        return --count;
    }
    return {
        increment,
        decrement
    };
}
