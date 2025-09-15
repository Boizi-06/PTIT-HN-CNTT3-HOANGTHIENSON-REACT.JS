function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// Ví dụ sử dụng:
const numbers = [1, 2, 3, 4, 5, 6];

myForEach(numbers, (value, index, arr) => {
  console.log(`Vị trí: ${index} | Phần tử: ${value} | Mảng:`, arr);
});
