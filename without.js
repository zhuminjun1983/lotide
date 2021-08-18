// FUNCTION IMPLEMENTATION
let without=function(source,move) {
  for(let k=0;k<source.length;k++) {
    for(let j=0;j<move.length;j++) {
      if(move[j]===source[k]) {
        source.splice(k,1) 
      }  
    }
  }  console.log(source)
} 
const assertArraysEqual = function(a,b) {
    let out
    for (let i = 0; i < b.length; i++) {
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
// TEST CODE
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
