// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(a,b) {
    let out
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            out = true
        } else {
            out = false
        }
    } if (out ===true) {
      console.log("Assertion Passed: " + a + " === " + b) 
    }else {
      console.log("Assertion Failed: " + a + " !== " + b)
    }
}

module.exports = assertArraysEqual;

