/***********************************************************************
Write a function `catBuilder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:

const cat1 = catBuilder('Garfield', 'golden', ['scratching-post', 'yarn']);
cat1; // => { name: 'Garfield', color: 'golden', toys: ['scratching-post', 'yarn'] }

const cat2 = catBuilder('Whiskers', 'rainbow', ['poptarts']);
cat2; // => { name: 'Whiskers', color: 'rainbow', toys: [ 'poptarts' ] }
***********************************************************************/

function catBuilder(name, color, toys) {
    let cat = {
        name: name,
        color: color,
        toys: toys
    }
    return cat
}

const cat1 = catBuilder('Garfield', 'golden', ['scratching-post', 'yarn']);
console.log(cat1)

function dogBuilder(name, color, toy){
    const dog = {
        name: name,
        color: color,
        toy: toy,
    }
    return dog
}

const dog1 = dogBuilder("BobDog", "Cat Fish Grey", ["dog-bone", "digging-dirt"])
console.log(dog1)