const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
// FUNCTION IMPLEMENTATION
const findKeyByValue=function(a,v) { 
  for(let i=0;i<Object.keys(a).length;i++)
  if(Object.values(a)[i]===v) {
 
    return (Object.keys(a)[i])
  } 
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
