/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/
// googled the difference between .map and .forEach
// forEach() — executes a provided function once for each array element.
// map() — creates a new array with the results of calling a provided function on every element in the calling array.
function tripler(array) {
    // loop through array
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i])
        // maybe can use forEach or map and multiply 3 to each integer in the array
        let newArray = array.map((num) => {
            // find a way to multiply each integer in the array by 3
            return num * 3;
        });
        console.log(newArray)
        return newArray;
        console.log("line 19🐯",  newArray)
        console.log(array)
    }
    return array;


}

console.log(tripler([1, 2, 3]));

// more practice had to use google to find this answer but took it apart to make it work for the way I
// initially thought I had to do it while looping through it. 
// the big issue was changing .forEach to .map

// this version creates a function that makes a variable 
// that takes the array and uses .map and returns new made up variable num 
// inside .map and multiplied it by 3
function triple(array){
    let multiMapArray = array.map((num) =>{
        return num * 3;
    })
    return multiMapArray;
}

console.log(triple([2,4, 6]));

let trippleThat = (array) =>{
    // loop through array
    for(let i = 0; i < array.length; i ++){
        let mapAndMult = array.map((num) =>{
            return num * 3;
        });
        return mapAndMult
    }
    return array
}

console.log(trippleThat([4, 1, 7]))

let multiplyByThree = (array) =>{
    let mapIt = array.map((num) =>{
        // console.log(num *3)
        return num * 3
    })
    // console.log(mapIt)
    return mapIt
}

console.log(multiplyByThree([8,8,8]))

let arrayMultiply = (array) => {
    for(let i = 0; i < array.length; i ++){
        let newNumbers = array.map((num) =>{
            return num * 3
        })
        return newNumbers
        // console.log(newNumbers)
    }
    return array
}
console.log(arrayMultiply([4, 4, 4]))