"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let strValue = "2";
let numValue = 2;
console.log(strValue == numValue); // true
console.log(strValue === numValue); // false
/*
  Giải thích:

  - strValue == numValue:
    So sánh lỏng dùng toán tử `==`, TypeScript (giống JavaScript) sẽ **ép kiểu ngầm**:
    => Chuỗi "2" được ép kiểu thành số 2 trước khi so sánh
    => 2 == 2 => true

  - strValue === numValue:
    So sánh chặt dùng toán tử `===`, sẽ **so sánh cả giá trị và kiểu dữ liệu**
    => "2" là string, 2 là number => khác kiểu => false
*/
//# sourceMappingURL=b4.js.map