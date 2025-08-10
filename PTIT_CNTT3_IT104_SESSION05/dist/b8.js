"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getInfo() {
        return `ID: ${this.id} | ${this.title} - Tác giả: ${this.author}`;
    }
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
        console.log("s Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
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
    // 🔍 Tìm kiếm sách theo tên
    findBooksByTitle(keyword) {
        const result = this.books.filter(b => b.getTitle().toLowerCase().includes(keyword.toLowerCase()));
        if (result.length > 0) {
            console.log(` Kết quả tìm kiếm cho từ khóa "${keyword}":`);
            result.forEach(book => console.log(book.getInfo()));
        }
        else {
            console.log(` Không tìm thấy sách nào với từ khóa "${keyword}".`);
        }
    }
}
const book1 = new Book(1, "Lập trình JavaScript", "Nguyễn Văn A");
const book2 = new Book(2, "TypeScript Cơ Bản", "Trần Thị B");
const book3 = new Book(3, "Học ReactJS", "Lê Văn C");
const book4 = new Book(4, "NodeJS Nâng Cao", "Phạm Văn D");
const book5 = new Book(5, "Cấu Trúc Dữ Liệu & Giải Thuật", "Ngô Văn E");
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);
myLibrary.showBooks();
//  Tìm kiếm sách theo tên
console.log("\nTìm sách với từ khóa 'React':");
myLibrary.findBooksByTitle("React");
console.log("\nTìm sách với từ khóa 'Java':");
myLibrary.findBooksByTitle("Java");
//# sourceMappingURL=b8.js.map