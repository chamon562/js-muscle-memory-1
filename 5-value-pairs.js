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
  let newObject = [obj1,obj2]
  // console.log(key)
  if(key === "location"){
    for(key in newObject){
      let objLocations = newObject[key].location
      console.log(objLocations)
    }
  } else if(key === "name"){
    console.log("are you trying to get names?")
  }
  // for(key in newObject){
    
  //   console.log(newObject[key])
  // }
  // console.log(newObject)
  // return newArray
}
const object1 = {name: 'One', location: 'Remote', age: 1};
const object2 = {name: 'Two', location: 'San Francisco'};
// console.log("line 25", valuePair(object1, "location"))
valuePair(object1, object2, "name")
// console.log(valuePair(object1, object2, 'location'))

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
