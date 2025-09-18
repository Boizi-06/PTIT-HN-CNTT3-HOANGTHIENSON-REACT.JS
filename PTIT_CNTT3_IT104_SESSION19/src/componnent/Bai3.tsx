import React, { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  // Hàm validate
  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Trường này là bắt buộc";
    }

    if (!email.trim()) {
      newErrors.email = "Trường này là bắt buộc";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Email không hợp lệ";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Gửi thành công!");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial, sans-serif" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          📝 Đăng ký thông tin
        </h2>

        {/* Họ tên */}
        <div style={{ marginBottom: "15px" }}>
          <label>Họ tên</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "14px", margin: "5px 0 0" }}>
              ⚠ {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "14px", margin: "5px 0 0" }}>
              ⚠ {errors.email}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={!!errors.name || !!errors.email}
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "6px",
            background: (!!errors.name || !!errors.email) ? "#ccc" : "#007bff",
            color: "#fff",
            fontWeight: "bold",
            cursor: (!!errors.name || !!errors.email) ? "not-allowed" : "pointer",
          }}
        >
          Gửi
        </button>
      </form>
    </div>
  );
}
