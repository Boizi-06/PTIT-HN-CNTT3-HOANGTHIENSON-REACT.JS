"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    // Trả về thông tin sách
    getInfo() {
        return `${this.title} - Tác giả: ${this.author}`;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    // Thêm sách vào thư viện
    addBook(book) {
        this.books.push(book);
    }
    // Xem danh sách sách
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
}
// Tạo 5 sách
const book1 = new Book("Lập trình JavaScript", "Nguyễn Văn A");
const book2 = new Book("TypeScript Cơ Bản", "Trần Thị B");
const book3 = new Book("Học ReactJS", "Lê Văn C");
const book4 = new Book("NodeJS Nâng Cao", "Phạm Văn D");
const book5 = new Book("Cấu Trúc Dữ Liệu & Giải Thuật", "Ngô Văn E");
// Tạo thư viện
const myLibrary = new Library();
// Thêm sách vào thư viện
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);
// Xem danh sách
myLibrary.showBooks();
//# sourceMappingURL=b6.js.map