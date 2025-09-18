export interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string; // hoặc Date nếu bạn parse
}

export async function getAllProduct(): Promise<Product[]> {
  try {
    const response = await fetch("http://localhost:3000/product");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch product failed:", error);
    return [];
  }
}
