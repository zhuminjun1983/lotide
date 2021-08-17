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
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]) , true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
