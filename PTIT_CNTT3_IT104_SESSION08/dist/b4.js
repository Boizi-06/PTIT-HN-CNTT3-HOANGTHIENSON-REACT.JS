// Hàm mergeObjects dùng generic T và U
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// Ví dụ dùng với 2 object khác kiểu
let person = { name: "Sơn", age: 19 };
let info = { city: "Hà Nội", isStudent: true };
let result = mergeObjects(person, info);
console.log(result);
export {};
// Kết quả: { name: 'Sơn', age: 19, city: 'Hà Nội', isStudent: true }
//# sourceMappingURL=b4.js.map