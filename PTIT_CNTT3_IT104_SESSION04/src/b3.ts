
// Định nghĩa interface Student
interface Student {
  name: string;
  age: number;
  email: string;
}

// Hàm in thông tin sinh viên
function introduceStudent(student: Student): void {
  console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}

// Tạo đối tượng sinh viên
const student1: Student = {
  name: "Nguyễn Văn A",
  age: 20,
  email: "vana@example.com"
};

// Gọi hàm để in thông tin
introduceStudent(student1);
