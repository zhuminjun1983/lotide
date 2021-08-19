const middle = function(array) {
  let array_result = []; //Initialize it to empty array
  if (array.length <= 2 && array.length > 0) {
    // For arrays with one or two elements, there is no middle. Return an empty array.
    return array_result;
  } else if (array.length % 2 === 0) {
      // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
      return array_result = [array[(array.length / 2) - 1], array[array.length / 2]];
    } else {
      // For arrays with odd number of elements, an array containing a single middle element should be returned.
      return array_result = array[(array.length - 1) / 2];
    }
};
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4]))// => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
