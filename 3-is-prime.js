/***************************************************************************
Define a function `isPrime(number)` that returns `true` if `number` is prime.
Otherwise, false. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(10); // => false
isPrime(11); // => true
isPrime(9); // => false
isPrime(2017); // => true
***************************************************************************/

function isPrime(number) {
    for(let i = 2; i < number; i++){
        console.log(i)
        if(number % i === 0){
            return false
        }
    }
    return number > 1
}

console.log(isPrime(4))
console.log(isPrime(2))

function primeIt(num){
    for(let i = 2; i < num; i++ ){
        if(num % i  === 0){
            return false
        }
    }
    return num > 1
}

console.log(primeIt(5))

function primeTime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return num > 1
}

console.log(primeTime(9))

let primeNumber = (num) =>{
    for(let i = 2; i < num; i ++){
        if(num % i === 0){
            return false
        }
    }
    return num > 1
}

console.log(primeNumber(6))

let primePrime = (num) =>{
    for(let i = 2; i < num; i++){
        if(num % 1 === 0){
            return false
        }
    }
    console.log(num > 1)
}

console.log(primePrime(9))