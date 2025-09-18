"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Hàm in thông tin sinh viên
function introduceStudent(student) {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}
// Tạo đối tượng sinh viên
const student1 = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "vana@example.com"
};
// Gọi hàm để in thông tin
introduceStudent(student1);
//# sourceMappingURL=b3.js.map