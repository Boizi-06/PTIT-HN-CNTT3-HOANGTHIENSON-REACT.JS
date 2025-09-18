// Hàm generic đảo ngược mảng
function reverseArray(arr) {
    return arr.slice().reverse(); // slice() để tránh thay đổi mảng gốc
}
// Ví dụ dùng với mảng số
let numbers = [1, 2, 3, 4];
console.log(reverseArray(numbers)); // [4, 3, 2, 1]
// Ví dụ dùng với mảng chuỗi
let strings = ["a", "b", "c"];
console.log(reverseArray(strings)); // ["c", "b", "a"]
// Ví dụ dùng với mảng đối tượng
let objects = [{ name: "Sơn" }, { name: "Hoàng" }];
console.log(reverseArray(objects)); // [{name: "Hoàng"}, {name: "Sơn"}]
export {};
//# sourceMappingURL=b3.js.map