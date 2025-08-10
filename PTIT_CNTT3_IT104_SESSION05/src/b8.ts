class Book {
  private id: number;
  private title: string;
  private author: string;

  constructor(id: number, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getInfo(): string {
    return `ID: ${this.id} | ${this.title} - Tác giả: ${this.author}`;
  }

  public updateInfo(title: string, author: string): void {
    this.title = title;
    this.author = author;
  }
}

class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public showBooks(): void {
    if (this.books.length === 0) {
      console.log("Thư viện hiện chưa có sách.");
      return;
    }

    console.log("s Danh sách sách trong thư viện:");
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.getInfo()}`);
    });
  }

  public updateBookById(id: number, newTitle: string, newAuthor: string): void {
    const book = this.books.find(b => b.getId() === id);
    if (book) {
      book.updateInfo(newTitle, newAuthor);
      console.log(` Đã cập nhật thông tin sách có ID: ${id}`);
    } else {
      console.log(` Không tìm thấy sách với ID: ${id}`);
    }
  }

  // 🔍 Tìm kiếm sách theo tên
  public findBooksByTitle(keyword: string): void {
    const result = this.books.filter(b =>
      b.getTitle().toLowerCase().includes(keyword.toLowerCase())
    );

    if (result.length > 0) {
      console.log(` Kết quả tìm kiếm cho từ khóa "${keyword}":`);
      result.forEach(book => console.log(book.getInfo()));
    } else {
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
