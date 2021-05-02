/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array) {
    // loop through array
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i])
        let newArray = array.map((num) => {
            return num * 3;
        });
        console.log(newArray)
        return newArray;
        console.log("line 19🐯",  newArray)
        console.log(array)
    }
    return array
    // find a way to multiply each integer in the array by 3
    // maybe can use forEach or map and multiply 3 to each integer in the array


}

console.log(tripler([1, 2, 3]))


