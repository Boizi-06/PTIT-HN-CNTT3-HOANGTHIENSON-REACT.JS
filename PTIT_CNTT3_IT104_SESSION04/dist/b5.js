"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 3. Hàm in thông tin nhân viên
function printStaffInfo(staff) {
    console.log(`Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
}
// 4. Test hàm với dữ liệu ví dụ
const staff1 = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán"
};
printStaffInfo(staff1);
//# sourceMappingURL=b5.js.map