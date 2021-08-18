let flatten = function(arr) {
    let Arr = arr.flat()
    return Arr
}
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(a,b) {
    let out
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            out = true
        } else {
            out = false
        }
    } if (out === true) {
        console.log("Assertion Passed: " + a + " === " + b)
    } else {
        console.log("Assertion Failed: " + a + " !== " + b)
    }
}
// TEST CODE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])

// FUNCTION IMPLEMENTATION
const eqArrays = function(a,b) {
    let out
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            out = true
        } else {
            out = false
        }
    } return out
}
const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log("Assertion Passed");
    } else {
        console.log("Assertion Failed");
    }
};

// TEST CODE
assertEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true);
