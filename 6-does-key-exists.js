/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

const obj1 = {company: 'General Assembly', course: 'Software Engineering Immersive'}
doesKeyExist(obj1, 'company'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

function doesKeyExist(obj, key) {

    for (key1 in obj) {
        // key1 gives me key name and obj[key1] gives me the value of the key
        console.log(key1)
        if (key === key1) {
            return true
        } else {
            return false
        }
    }

}

const obj1 = { company: 'General Assembly', course: 'Software Engineering Immersive' }
// console.log(doesKeyExist(obj1, 'company'));
// console.log(doesKeyExist(obj1, 'name'));

let isTrue = (obj1, key) =>{
    for(key1  in obj1){
        console.log(key)
        console.log(key1)
        if(key === key1){
            return true
        } else {
            return false
        }
    }
}
// console.log(isTrue(obj1, "company"))
// console.log(isTrue(obj1, "course"))
console.log(isTrue(obj1, "class"))