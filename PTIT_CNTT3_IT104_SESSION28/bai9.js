function myMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}


const numbers = [1, 2, 3, 4, 5, 6];

const doubled = myMap(numbers, (value) => value * 2);
console.log(doubled); 