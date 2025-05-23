//Create a function rememberMe(name) that returns a function to greet that name later.

export function rememberMe(name){
    return function greet(){
        return "Hello" + " " + name;
    }
}