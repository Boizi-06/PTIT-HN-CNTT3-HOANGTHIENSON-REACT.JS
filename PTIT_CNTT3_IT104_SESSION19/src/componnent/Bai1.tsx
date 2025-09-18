import React, { useMemo } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type ShoppingCartProps = {
  cartItems: CartItem[];
};

export default function ShoppingCart({ cartItems }: ShoppingCartProps) {
  // Tính tổng giá trị đơn hàng bằng useMemo
  const total = useMemo(() => {
    console.log("Recalculate total...");
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="p-4 border rounded-xl w-[400px]">
      <h2 className="text-xl font-bold mb-3">🛒 Giỏ hàng</h2>
      <ul className="space-y-2">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between border-b pb-1"
          >
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>{(item.price * item.quantity).toLocaleString()}₫</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-lg font-semibold text-right">
        Tổng cộng: {total.toLocaleString()}
      </div>
    </div>
  );
}
