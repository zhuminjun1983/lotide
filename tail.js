// FUNCTION IMPLEMENTATION
let tail = function(arr) {
  if (arr === [] || arr.length === 1) {
    return [];
  }
  let a = arr.slice(1);
  console.log(a);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
