function checkCondition(condition, callback) {
  setTimeout(() => {
    callback(condition);
  }, 1000); // sau 1 giây gọi callback
}

// Hàm hiển thị kết quả
function display(result) {
  console.log("Điều kiện trả về:", result);
}

// Ví dụ chạy:
checkCondition(true, display);
checkCondition(false, display);
