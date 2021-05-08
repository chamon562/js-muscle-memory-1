/***********************************************************************
Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

Example:

const ppl = [
  {name: 'Khalid Robinson', age: 22},
  {name: 'Ariel Winter', age: 20},
  {name: 'Post Malone', age: 25},
  {name: 'Willow Smith', age: 17}
];

adults(ppl); // => [ 'Khalid Robinson', 'Post Malone' ]
***********************************************************************/

function adults(people) {
  const newArray = [];
  for (let i = 0; i < people.length; i++) {
    // console.log(ppl[i])
    let pplObj = people[i]
    // console.log(pplObj)
    // for(peeps in pplObj){
    //   console.log(pplObj)
    // }
    console.log(pplObj.age)
    if (pplObj.age >= 18) {
      newArray.push(pplObj.age)
    }

  }
  return newArray
}

const ppl = [
  { name: 'Khalid Robinson', age: 22 },
  { name: 'Ariel Winter', age: 20 },
  { name: 'Post Malone', age: 25 },
  { name: 'Willow Smith', age: 17 }
];

console.log(adults(ppl))