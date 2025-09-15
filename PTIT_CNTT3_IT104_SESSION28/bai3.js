function processArray(arr, callback) {
  arr.forEach((value, index) => {
    setTimeout(() => {
      callback(value);
    }, (index + 1) * 1000); // mỗi phần tử chờ thêm 1 giây
  });
}

// Ví dụ chạy:
processArray([1, 2, 3, 4, 5], (num) => {
  console.log(`Phần tử thứ: ${num}`);
});
