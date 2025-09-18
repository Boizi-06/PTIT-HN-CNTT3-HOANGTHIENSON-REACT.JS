// 1. Định nghĩa kiểu dữ liệu Product
type Product = {
  name: string;
  originalPrice: number;
  discountedPrice: number;
  category: string;
};

// 2. Hàm in thông tin sản phẩm
function printProductInfo(product: Product): void {
  console.log(`Tên: ${product.name}`);
  console.log(`Giá gốc: ${product.originalPrice.toLocaleString()} VND`);
  console.log(`Giá sau giảm: ${product.discountedPrice.toLocaleString()} VND`);
  console.log(`Danh mục: ${product.category}`);
}

// 3. Tạo sản phẩm và test hàm
const product1: Product = {
  name: "Áo sơ mi",
  originalPrice: 300000,
  discountedPrice: 240000,
  category: "Thời trang nam"
};

printProductInfo(product1);

