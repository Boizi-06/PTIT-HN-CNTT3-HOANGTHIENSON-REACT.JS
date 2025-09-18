// Hàm generic tìm phần tử đầu tiên chia hết cho 2
function findFirstEven(arr) {
    return arr.find(item => item % 2 === 0);
}
// Ví dụ
let numbers = [1, 3, 7, 10, 15];
console.log(findFirstEven(numbers)); // 10
let moreNumbers = [1, 3, 5];
console.log(findFirstEven(moreNumbers)); // undefined
export {};
//# sourceMappingURL=b5.js.map