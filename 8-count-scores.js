/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
a name (string) and a score (number). `countScores(people)` should
return an object that has key-value pairs where each name is a key and
the value is their total score.

Example 1

const ppl = [ 
    {name: "Pete", score: 10},
    {name: "Mike", score : 10},
    {name: "Pete", score: -8},
    {name: "Dexter", score: 12}
];

const countPpl = countScores(ppl);
countPpl; //=> { Pete: 2, Mike: 10, Dexter: 12 }

Example 2

const peeps = [
  {name: "Pete", score: 2},
  {name: "Dexter", score: 2},
  {name: "Mike", score: 2},
  {name: "Dexter", score: 2},
  {name: "Mike", score: 2},
  {name: "Pete", score: 2},
  {name: "Dexter", score: 2}
];
countScores(peeps); //=> { Pete: 4, Mike: 4, Dexter: 6 }
***********************************************************************/

const ppl = [
  { name: "Pete", score: 10 },
  { name: "Mike", score: 10 },
  { name: "Pete", score: -8 },
  { name: "Dexter", score: 12 }
];
const peeps = [
  {name: "Pete", score: 2},
  {name: "Dexter", score: 2},
  {name: "Mike", score: 2},
  {name: "Dexter", score: 2},
  {name: "Mike", score: 2},
  {name: "Pete", score: 2},
  {name: "Dexter", score: 2}
];

// create a a total of each person score  and then put that into an object?
function countScores(people) {
  let newObj = {};
  people.forEach((kv)=>{
    // console.log(kv.name)
    // console.log(newObj[kv.score])
    if(newObj[kv.name]){
      newObj[kv.name] += kv.score
      // console.log(newObj)
    } else {
      newObj[kv.name] = kv.score
    }
  })
  return newObj
}

console.log(countScores(peeps))
const countPpl = countScores(ppl)
console.log(countPpl)

const fruits = [
  { name: "apples", amount: 4 },
  { name: "pears", amount: 6 },
  { name: "oranges", amount: 2 },
  { name: "bananas", amount: 2 },
  { name: "oranges", amount: 5, },
  { name: "pears", amount: 8 },
  { name: "apples", amount: 3 },
  { name: "bananas", amount: 10 },
  {},
  { name: "pears", amount: 7 },
  { name: "apples", amount: 5 },
  { name: "mangos", amount: 1 },
];

const mergeFruits = (fruits)=>{
  // create a new obj to be later populated with new score
  let newBasket = {};
  // use .forEach to loop through fruits
  fruits.forEach((f) =>{
    if(newBasket[f.name]){
      newBasket[f.name] += f.amount
    } else {
      newBasket[f.name] = f.amount
    }
  })
  return newBasket;
}

console.log(mergeFruits(fruits))

const peopleScore = (peoples) =>{
  let objScore = {};
  peoples.forEach((p)=>{
    if(objScore[p.name]){
      objScore[p.name] += p.score;
    } else {
      objScore[p.name] = p.score
    }
  })
  return objScore
}

console.log(peopleScore(peeps))