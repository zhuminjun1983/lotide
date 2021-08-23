// FUNCTION IMPLEMENTATION
let tail = function(arr) {
  if (arr === [] || arr.length === 1) {
    return [];
  }
  let a = arr.slice(1);
  console.log(a);
};

const assertEqual = require('./assertEqual');
module.exports = tail;


