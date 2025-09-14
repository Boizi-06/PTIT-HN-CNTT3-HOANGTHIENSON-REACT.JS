export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  { id: "1", name: "Laptop Dell XPS 13", price: 30000000, description: "Laptop cao cấp mỏng nhẹ, hiệu năng mạnh." },
  { id: "2", name: "iPhone 14 Pro", price: 30000000, description: "Điện thoại flagship với camera xuất sắc." },
  { id: "3", name: "Samsung Galaxy S22", price: 25000000, description: "Màn hình đẹp, chụp ảnh đêm ấn tượng." },
  { id: "4", name: "Tai nghe Sony WH-1000XM4", price: 7000000, description: "Tai nghe chống ồn hàng đầu." },
  { id: "5", name: "Apple Watch Series 8", price: 12000000, description: "Đồng hồ thông minh nhiều tính năng." }
];
