//Write a function that stores a secret value and returns a getter but no setter.

export function createSecretHolder(secret){
    function printValue(){
        return secret;
    }
    return printValue;
}
