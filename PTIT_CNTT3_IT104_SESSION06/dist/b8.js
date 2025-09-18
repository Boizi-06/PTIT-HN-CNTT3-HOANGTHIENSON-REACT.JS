"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Lớp Book
class Book {
    constructor(id, title, author, stock, status // "available", "borrowed"...
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
// Lớp Member
class Member {
    constructor(id, name, contact, status // "active", "blocked"...
    ) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
        this.lendedBooks = [];
    }
}
// Lớp LendedBook
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
// Lớp Library
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    // Thêm sách vào thư viện
    addBook(book) {
        this.books.push(book);
        console.log(` Đã thêm sách: ${book.title} (ID: ${book.id})`);
    }
    // Hiển thị danh sách sách
    showBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
            return;
        }
        console.log(" Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log(`ID: ${book.id}, Tiêu đề: "${book.title}", Tác giả: ${book.author}, Tồn kho: ${book.stock}, Trạng thái: ${book.status}`);
        });
    }
}
// --- Tạo thực thể Library ---
const myLibrary = new Library();
// --- Tạo các sách ---
const book1 = new Book(1, "Lập Trình JavaScript", "Nguyễn Văn A", 5, "available");
const book2 = new Book(2, "Học TypeScript Cơ Bản", "Trần Văn B", 3, "available");
const book3 = new Book(3, "Node.js Nâng Cao", "Lê Thị C", 2, "available");
// --- Thêm sách vào thư viện ---
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
// --- Xem danh sách sách ---
myLibrary.showBooks();
//# sourceMappingURL=b8.js.map