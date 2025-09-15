function myFilter(array, valueToFind, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], valueToFind, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

const numbers = [1, 2, 2, 3, 4, 5, 6];

function isMatch(item, value) {
  return item === value;
}

console.log(myFilter(numbers, 2, isMatch));  
console.log(myFilter(numbers, 10, isMatch));  
