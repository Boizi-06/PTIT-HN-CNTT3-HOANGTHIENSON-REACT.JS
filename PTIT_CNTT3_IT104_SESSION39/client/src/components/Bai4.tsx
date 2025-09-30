import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductManager: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "boizi2006");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/ds3tqzms2/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    setImageUrl(data.secure_url);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = "Tên sản phẩm là bắt buộc";
    if (!price) newErrors.price = "Giá sản phẩm là bắt buộc";
    if (!imageUrl) newErrors.imageUrl = "Ảnh sản phẩm là bắt buộc";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddProduct = () => {
    if (!validate()) return;

    const newProduct: Product = {
      id: Date.now(),
      name,
      price: Number(price),
      description,
      imageUrl,
    };

    setProducts([...products, newProduct]);

    // reset form
    setName("");
    setPrice("");
    setDescription("");
    setImageUrl("");
    setErrors({});
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quản lý sản phẩm</h2>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "6px",
          maxWidth: "500px",
        }}
      >
        <div>
          <label>Tên sản phẩm *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              border: errors.name ? "1px solid red" : "1px solid #ccc",
            }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>Giá *</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{
              width: "100%",
              border: errors.price ? "1px solid red" : "1px solid #ccc",
            }}
          />
          {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}
        </div>

        <div>
          <label>Mô tả</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>Ảnh sản phẩm *</label>
          <input type="file" onChange={handleUpload} />
          {imageUrl && (
            <img
              src={imageUrl}
              alt="preview"
              style={{ width: "100px", marginTop: "10px" }}
            />
          )}
          {errors.imageUrl && <p style={{ color: "red" }}>{errors.imageUrl}</p>}
        </div>

        <button onClick={handleAddProduct} style={{ marginTop: "10px" }}>
          Thêm sản phẩm
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "6px",
              width: "200px",
            }}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h4>
              {product.name} - {product.price} đ
            </h4>
            <p>{product.description}</p>
            <button
              onClick={() => handleDelete(product.id)}
              style={{ color: "red" }}
            >
              Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManager;
