function task1(next) {
  setTimeout(() => {
    console.log("Task 1 được thực thi");
    next();
  }, 1000); // 1 giây
}

function task2(next) {
  setTimeout(() => {
    console.log("Task 2 được thực thi");
    next();
  }, 1500); // 1.5 giây
}

function task3() {
  setTimeout(() => {
    console.log("Task 3 được thực thi! Hoàn thành");
  }, 2000); // 2 giây
}

// Gọi tuần tự
task1(() => {
  task2(() => {
    task3();
  });
});
