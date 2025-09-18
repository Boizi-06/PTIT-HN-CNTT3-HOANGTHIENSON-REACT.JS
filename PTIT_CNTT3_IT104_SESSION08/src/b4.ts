// Hàm mergeObjects dùng generic T và U
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Ví dụ dùng với 2 object khác kiểu
let person = { name: "Sơn", age: 19 };
let info = { city: "Hà Nội", isStudent: true };

let result = mergeObjects(person, info);

console.log(result);
// Kết quả: { name: 'Sơn', age: 19, city: 'Hà Nội', isStudent: true }
