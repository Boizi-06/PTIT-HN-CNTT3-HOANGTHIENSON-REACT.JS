// Hàm generic flatten mảng 2 chiều
function flatten(arr) {
    return arr.reduce((acc, curr) => acc.concat(curr), []);
}
// Ví dụ với số
console.log(flatten([[1, 2], [3, 4], [5, 6]]));
// [1, 2, 3, 4, 5, 6]
// Ví dụ với chuỗi
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));
export {};
// ['apple', 'banana', 'cherry', 'date', 'elderberry']
//# sourceMappingURL=b7.js.map