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
        let end = i;
        let evenNum = end % 2

        console.log(end)
        console.log(evenNum)
        if(evenNum === 1){
            // evenNum is the result of after end %2 
            // want the index so pushed end because that is now i
            // console.log(newArray.push(evenNum))
            // console.log(newArray.push(end))
            newArray.push(end)
        }else {
            console.log("null")
        }
        // newArray.push(evenNum)

        // console.log(evenNum)
        // console.log(end)
    }
    return newArray
   
}
console.log(oddRange(13));
console.log(oddRange(20))
// console.log(1 % 2)