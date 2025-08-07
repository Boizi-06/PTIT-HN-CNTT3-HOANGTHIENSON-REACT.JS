function handleUnionType(value: string | number): void {
  if (typeof value === "string") {
    const length = value.length;
    console.log(`${length} ký tự`);
  } else if (typeof value === "number") {
    if (value % 2 === 0) {
      console.log("Đây là số chẵn");
    } else {
      console.log("Đây là số lẻ");
    }
  } else {
    console.log("Kiểu dữ liệu không hợp lệ");
  }
}

// 🧪 Test hàm
handleUnionType("demo123"); // Output: 7 ký tự
handleUnionType(10);        // Output: Đây là số chẵn
handleUnionType(7);         // Output: Đây là số lẻ

