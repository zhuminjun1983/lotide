const countLetters = function(letters) {
    const results = {}
    for (const letter of letters) {
        let b =letters.replace(/ /g,"")
        if (b.includes(letter)) {
            if (results[letter]) {
                results[letter] += 1
            } else {
                results[letter] = 1;
            }
        }
    }console.log(results)
    return results
}
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual = expected) {
        console.log("Assertion Passed: " + actual + " === " + expected);
    } else {
        console.log("Assertion Failed: " + actual + " !== " + expected);
    }
};
// TEST CODE
assertEqual(countLetters("lighthouse in the house"), {
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1,
})
