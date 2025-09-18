// Hàm generic cập nhật một phần đối tượng
function partialUpdate<T>(obj: T, updates: Partial<T>): T {
    return { ...obj, ...updates };
}

// Ví dụ 
console.log(
    partialUpdate(
        { name: 'Alice', age: 30, job: 'Developer' },
        { age: 31 }
    )
);

//  Ví dụ 
console.log(
    partialUpdate(
        { name: 'Alice', age: 30, job: 'Developer' },
        { name: 'Bob', job: 'Designer' }
    )
);

