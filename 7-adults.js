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
  { name: 'Willow Smith', age: 18 },
  { name: 'Joe Jangle', age: 19 },
  { name: 'Todd Harris', age: 17 },
  { name: 'Jim Jimbo', age: 16 },
  { name: 'Mutt Buncher', age: 12 },
  { name: 'Glass Beak', age: 7 },
];

// lets get the names of all those over age 18 

let pplNames = (people) => {
  let newFolks = []
  for (keys in people) {
    if (people[keys].age >= 18) {
      newFolks.push(people[keys].name)
      newFolks.push(people[keys].age)
    }
  }
  return newFolks
}

// console.log(adults(ppl))

console.log(pplNames(ppl))