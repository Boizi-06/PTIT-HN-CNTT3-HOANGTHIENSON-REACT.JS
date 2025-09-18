import 

 { Component } from "react";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  stock: number;
};

type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type State = {
  products: Product[];
  cart: CartItem[];
  showCart: boolean;
};

export default class App extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "IPhone 15", image: "https://via.placeholder.com/150", price: 2000, stock: 5 },
        { id: 2, name: "Samsung S24", image: "https://via.placeholder.com/150", price: 1800, stock: 3 },
        { id: 3, name: "Xiaomi 14", image: "https://via.placeholder.com/150", price: 1200, stock: 10 },
        { id: 4, name: "Oppo Reno 12", image: "https://via.placeholder.com/150", price: 1000, stock: 8 },
        { id: 5, name: "Realme 11", image: "https://via.placeholder.com/150", price: 800, stock: 7 }
      ],
      cart: JSON.parse(localStorage.getItem("cart") || "[]"),
      showCart: false
    };
  }

  saveCart(cart: CartItem[]) {
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  }

  addToCart = (product: Product) => {
    const { cart } = this.state;
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      if (existing.quantity + 1 > product.stock) {
        alert("Số lượng sản phẩm trong kho không đủ");
        return;
      }
      existing.quantity++;
      this.saveCart([...cart]);
    } else {
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1
      };
      this.saveCart([...cart, newItem]);
    }
  };

  toggleCart = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  render() {
    const { products, cart, showCart } = this.state;

    return (
      <div style={{ padding: "20px" }}>
        <h1>Danh sách sản phẩm</h1>
        <button onClick={this.toggleCart}>
          🛒 Giỏ hàng ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginTop: "20px" }}>
          {products.map((p) => (
            <div key={p.id} style={{ border: "1px solid gray", padding: "10px" }}>
              <img src={p.image} alt={p.name} width="100%" />
              <h3>{p.name}</h3>
              <p>Giá: {p.price}$</p>
              <p>Tồn kho: {p.stock}</p>
              <button onClick={() => this.addToCart(p)}>Thêm vào giỏ hàng</button>
            </div>
          ))}
        </div>

        {showCart && (
          <div style={{ border: "2px solid black", marginTop: "20px", padding: "10px" }}>
            <h2>Giỏ hàng</h2>
            {cart.length === 0 ? (
              <p>Giỏ hàng trống</p>
            ) : (
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.name} - SL: {item.quantity} - Giá: {item.price * item.quantity}$
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    );
  }
}
