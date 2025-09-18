// Lớp Book
class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public stock: number,
        public status: string // "available", "borrowed"...
    ) {}
}

// Lớp Member
class Member {
    public lendedBooks: LendedBook[] = [];
    constructor(
        public id: number,
        public name: string,
        public contact: string,
        public status: string // "active", "blocked"...
    ) {}
}

// Lớp LendedBook
class LendedBook {
    constructor(
        public memberId: number,
        public bookId: number,
        public dueDate: Date
    ) {}
}

// Lớp Library
class Library {
    public books: Book[] = [];
    public members: Member[] = [];

    // Thêm sách vào thư viện
    public addBook(book: Book): void {
        this.books.push(book);
        console.log(` Đã thêm sách: ${book.title} (ID: ${book.id})`);
    }

    // Hiển thị danh sách sách
    public showBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
            return;
        }
        console.log(" Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log(
                `ID: ${book.id}, Tiêu đề: "${book.title}", Tác giả: ${book.author}, Tồn kho: ${book.stock}, Trạng thái: ${book.status}`
            );
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
