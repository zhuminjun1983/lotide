const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i=0;i<sentence.length;i++) {
    let b =sentence.replace(/ /g,"")
    if (b.includes(sentence[i])) {
         if (results[sentence[i]]) {
                results[sentence[i]] =results[sentence[i]].concat(i)
            } else {
                results[sentence[i]] = [].concat(i);
            }
  }
  }
  return results;
};
console.log(letterPositions("hello"))
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
// TEST CODE
assertArraysEqual(letterPositions("hello").e, [1])
