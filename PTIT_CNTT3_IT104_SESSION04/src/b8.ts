// 1. Định nghĩa các kiểu dữ liệu
type Product = {
  readonly id: string;
  name: string;
  price: number;
};

type OrderItem = {
  product: Product;
  quantity: number;
};

type Order = {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  note?: string; // optional
};

// 2. Hàm tính tổng giá trị đơn hàng
function calculateOrderTotal(order: Order): number {
  return order.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
}

// 3. Hàm in thông tin đơn hàng theo định dạng đẹp
function printOrder(order: Order): void {
  console.log(`Đơn hàng: #${order.orderId}`);
  console.log(`Khách hàng: ${order.customerName}`);
  console.log(`Sản phẩm:`);

  order.items.forEach(item => {
    const productName = item.product.name;
    const quantity = item.quantity;
    const totalPrice = item.product.price * item.quantity;
    console.log(`- ${productName} × ${quantity} → ${totalPrice.toLocaleString()} VND`);
  });

  const total = calculateOrderTotal(order);
  console.log(`Tổng cộng: ${total.toLocaleString()} VND`);

  if (order.note) {
    console.log(`Ghi chú: ${order.note}`);
  }
}

// 4. Test dữ liệu đơn hàng (giống ảnh bạn gửi)
const product1: Product = {
  id: "p001",
  name: "Áo sơ mi",
  price: 250000
};

const product2: Product = {
  id: "p002",
  name: "Quần tây",
  price: 400000
};

const order: Order = {
  orderId: "ORD001",
  customerName: "Nguyễn Văn A",
  items: [
    { product: product1, quantity: 2 }, // 2 x 250,000 = 500,000
    { product: product2, quantity: 1 }  // 1 x 400,000 = 400,000
  ],
  note: "Giao sau 18h"
};

// 5. Gọi hàm in đơn hàng
printOrder(order);
