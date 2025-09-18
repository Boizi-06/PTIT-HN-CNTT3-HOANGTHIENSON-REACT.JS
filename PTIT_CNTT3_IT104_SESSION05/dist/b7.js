"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    // Lấy ID (vì id là private)
    getId() {
        return this.id;
    }
    // Lấy thông tin sách
    getInfo() {
        return `ID: ${this.id} | ${this.title} - Tác giả: ${this.author}`;
    }
    // Cập nhật thông tin sách
    updateInfo(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện hiện chưa có sách.");
            return;
        }
        console.log(" Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
    // Sửa sách theo id
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(` Đã cập nhật thông tin sách có ID: ${id}`);
        }
        else {
            console.log(` Không tìm thấy sách với ID: ${id}`);
        }
    }
}
// Tạo 5 sách
const book1 = new Book(1, "Lập trình JavaScript", "Nguyễn Văn A");
const book2 = new Book(2, "TypeScript Cơ Bản", "Trần Thị B");
const book3 = new Book(3, "Học ReactJS", "Lê Văn C");
const book4 = new Book(4, "NodeJS Nâng Cao", "Phạm Văn D");
const book5 = new Book(5, "Cấu Trúc Dữ Liệu & Giải Thuật", "Ngô Văn E");
// Tạo thư viện
const myLibrary = new Library();
// Thêm sách vào thư viện
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);
// Xem danh sách ban đầu
myLibrary.showBooks();
// Sửa thông tin sách có ID = 3
myLibrary.updateBookById(3, "ReactJS Toàn Tập", "Lê Văn Cập Nhật");
// Xem danh sách sau khi sửa
console.log("\n Sau khi sửa:");
myLibrary.showBooks();
//# sourceMappingURL=b7.js.map