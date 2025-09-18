// Hàm generic tìm phần tử trong mảng
function findElement<T>(arr: T[], value: T): T | undefined {
    return arr.find(item => item === value);
}

// Ví dụ với mảng số
let numbers = [1, 3, 5, 7, 9];
console.log(findElement(numbers, 5)); // 5
console.log(findElement(numbers, 10)); // undefined

// Ví dụ với mảng chuỗi
let fruits = ["apple", "banana", "orange"];
console.log(findElement(fruits, "banana")); // "banana"
console.log(findElement(fruits, "mango")); // undefined
