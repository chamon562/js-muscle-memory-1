/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:

const object1 = {name: 'One', location: 'Remote', age: 1};
const object2 = {name: 'Two', location: 'San Francisco'};

valuePair(object1, object2, 'location'); // => [ 'Remote', 'San Francisco' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  let newArray = [];
  let newObject = [obj1, obj2]
  console.log(key)
    for (key1 in newObject) {
      let objLocations = newObject[key1].location
      let objNames = newObject[key1].name
      if(key === "name"){
        console.log(objNames)
        // console.log("line 24 inside if statement",key)
        newArray.push(objNames)
      } else if(key === "location")
      newArray.push(objLocations)
      // console.log(objLocations)
      // console.log(objNames)
      // if(key1 === key){
      //   newArray.push(objLocations)
      // } else{
      // }
    }
    return newArray
  // return newArray
}
const object1 = { name: 'One', location: 'Remote', age: 1 };
const object2 = { name: 'Two', location: 'San Francisco' };
// console.log("line 25", valuePair(object1, "location"))
// valuePair(object1, object2, "name")
// console.log(valuePair(object1, object2, 'location'))
console.log(valuePair(object1, object2, 'name'))

const getValue = (person1, person2, key) =>{
  // first createa  new array to have new values pushed into to return
  let newArray = [];
  let allPersonObj = [person1, person2]
  console.log(allPersonObj)
  console.log(key)
  for(key1 in allPersonObj){
    let peopleNames = allPersonObj[key1].name
    let peopleLocations = allPersonObj[key1].location
    let peopleAge = allPersonObj[key1].age
    console.log(peopleNames)
    if(key === "name"){
      newArray.push(peopleNames)
    } else if(key === "location"){
      newArray.push(peopleLocations)
    } else if ( key === "age"){
      newArray.push(peopleAge)
    }
  }
  return newArray
}

const person1 = {name: "Jim", location: "Funky Town", age: 45}
const person2 = {name: "Barny", location: "Spider Town", age: 7}

// console.log(getValue(person1, person2, "name"))
console.log(getValue(person1, person2, "location"))
// console.log(getValue(person1, person2, "age"))