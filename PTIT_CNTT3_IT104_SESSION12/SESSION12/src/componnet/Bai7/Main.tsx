
import Cart from "./Cart";

export default function Main() {
  // render 12 carts
  const carts = Array.from({ length: 12 }, (_, i) => <Cart key={i} />);
  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        padding: "10px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
        minHeight: "400px",
      }}
    >
      {carts}
    </div>
  );
}
