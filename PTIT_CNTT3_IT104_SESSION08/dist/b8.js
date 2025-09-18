// Hàm generic cập nhật một phần đối tượng
function partialUpdate(obj, updates) {
    return Object.assign(Object.assign({}, obj), updates);
}
// Ví dụ 
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { age: 31 }));
//  Ví dụ 
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { name: 'Bob', job: 'Designer' }));
export {};
//# sourceMappingURL=b8.js.map