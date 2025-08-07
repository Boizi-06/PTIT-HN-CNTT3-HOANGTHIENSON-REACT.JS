"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Hàm in thông tin sản phẩm
function printProductInfo(product) {
    console.log(`Tên: ${product.name}`);
    console.log(`Giá gốc: ${product.originalPrice.toLocaleString()} VND`);
    console.log(`Giá sau giảm: ${product.discountedPrice.toLocaleString()} VND`);
    console.log(`Danh mục: ${product.category}`);
}
// 3. Tạo sản phẩm và test hàm
const product1 = {
    name: "Áo sơ mi",
    originalPrice: 300000,
    discountedPrice: 240000,
    category: "Thời trang nam"
};
printProductInfo(product1);
//# sourceMappingURL=b6.js.map