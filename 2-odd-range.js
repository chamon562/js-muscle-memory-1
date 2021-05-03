/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

// I am thinking looping through array
// use if conditional using the mod sign % because even numbers have no remainder
// but if it does return the array that has a remainder 
function oddRange(end) {
    let newArray = [];
    for (let i = 1; i <= end; i++) {
        let end = i
        newArray.push(end)
        // return i;
        console.log(end)
    }
    console.log(newArray)
}
oddRange(13);

