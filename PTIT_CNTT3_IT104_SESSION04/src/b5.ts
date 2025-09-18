// 1. Định nghĩa các kiểu dữ liệu
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  department: string;
};

// 2. Kết hợp 2 kiểu trên bằng Intersection Type
type StaffMember = Person & Employee;

// 3. Hàm in thông tin nhân viên
function printStaffInfo(staff: StaffMember): void {
  console.log(`Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
}

// 4. Test hàm với dữ liệu ví dụ
const staff1: StaffMember = {
  name: "Nguyễn Văn A",
  age: 28,
  employeeId: "EMP001",
  department: "Kế toán"
};

printStaffInfo(staff1);
