class Vehicle {
  public name: string;        // ai cũng truy cập được
  protected year: number;     // chỉ class và class con truy cập được
  private company: string;    // chỉ class này truy cập được
  readonly id: number;        // chỉ gán 1 lần khi tạo

  constructor(id: number, name: string, year: number, company: string) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.company = company;
  }

  // Phương thức in thông tin (để truy cập cả private và protected)
  public displayInfo(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Year: ${this.year}`);
    console.log(`Company: ${this.company}`);
  }
}

// Tạo thực thể
const car = new Vehicle(1, "Toyota Vios", 2022, "Toyota");

// Gọi phương thức để in thông tin
car.displayInfo();

// Thử thay đổi thuộc tính
car.name = "Honda Civic"; // OK - public
// car.year = 2023; //  Lỗi - protected
// car.company = "Honda"; //  Lỗi - private
// car.id = 2; //  Lỗi - readonly

console.log("\nSau khi đổi tên:");
car.displayInfo();
