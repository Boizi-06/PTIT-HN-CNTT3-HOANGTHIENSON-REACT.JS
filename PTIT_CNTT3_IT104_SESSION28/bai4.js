function displayNumbers(callback, delay) {
  let count = 1;
  setInterval(() => {
    callback(count);
    count++;
  }, delay);
}

// Ví dụ chạy:
displayNumbers((num) => {
  console.log(`Số thứ tự: ${num}`);
}, 1000); // in mỗi 1 giây
