import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export default function ProductManager() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "boizi2006");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    setImageUrl(data.secure_url);
  };

  const handleAddProduct = () => {
    if (!name || !price || !imageUrl) {
      alert("Vui lòng nhập đủ thông tin!");
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      name,
      price,
      description,
      imageUrl,
    };

    setProducts([...products, newProduct]);

    // reset form
    setName("");
    setPrice(0);
    setDescription("");
    setImageUrl("");
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <h2>Quản lý sản phẩm</h2>
      <div style={{ border: "1px solid #ddd", padding: 20, borderRadius: 8 }}>
        <div>
          <label>Tên sản phẩm *</label>
          <input
            type="text"
            placeholder="Nhập tên sản phẩm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ display: "block", width: "100%", marginBottom: 10 }}
          />
        </div>
        <div>
          <label>Giá *</label>
          <input
            type="number"
            placeholder="Nhập giá sản phẩm"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            style={{ display: "block", width: "100%", marginBottom: 10 }}
          />
        </div>
        <div>
          <label>Mô tả</label>
          <textarea
            placeholder="Nhập mô tả sản phẩm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ display: "block", width: "100%", marginBottom: 10 }}
          />
        </div>
        <div>
          <label>Ảnh sản phẩm *</label>
          <input type="file" onChange={handleImageUpload} />
          {imageUrl && (
            <img
              src={imageUrl}
              alt="preview"
              style={{ width: 100, marginTop: 10 }}
            />
          )}
        </div>
        <button onClick={handleAddProduct} style={{ marginTop: 10 }}>
          Thêm sản phẩm
        </button>
      </div>

      <div
        style={{ marginTop: 20, display: "flex", gap: 20, flexWrap: "wrap" }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 10,
              width: 200,
            }}
          >
            <img
              src={p.imageUrl}
              alt={p.name}
              style={{ width: "100%", borderRadius: 5 }}
            />
            <h4>
              {p.name} - {p.price} đ
            </h4>
            <p>{p.description}</p>
            <button
              onClick={() => handleDelete(p.id)}
              style={{ color: "red", marginTop: 10 }}
            >
              Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
