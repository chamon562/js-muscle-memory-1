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
        console.log("line 24 inside if statement",key)
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
    console.log(newArray)
  // return newArray
}
const object1 = { name: 'One', location: 'Remote', age: 1 };
const object2 = { name: 'Two', location: 'San Francisco' };
// console.log("line 25", valuePair(object1, "location"))
// valuePair(object1, object2, "name")
valuePair(object1, object2, 'location')

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(property, object[property]);
// }

// let obj = {
//   key1: "value1",
//   key2: "value2",
//   key3: "value3"
// }



// // using for in - same output as above
// for (let key in obj) {
//   let value = obj[key];
//   console.log(key, value);
