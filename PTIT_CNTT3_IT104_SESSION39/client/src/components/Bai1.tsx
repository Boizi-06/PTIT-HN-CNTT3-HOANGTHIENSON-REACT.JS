import React, { useState } from "react";

export const Bai1: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleUpload = async () => {
    if (!file) {
      alert("Hãy chọn 1 ảnh!");
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "boizi2006"); // preset unsigned bạn đã tạo

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dnjubw5ta/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();
      console.log("Upload result:", result);
      setImageUrl(result.secure_url);
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Upload 1 ảnh lên Cloudinary</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <button onClick={handleUpload}>Upload</button>

      {imageUrl && (
        <div style={{ marginTop: "20px" }}>
          <p>Ảnh đã upload:</p>
          <img src={imageUrl} alt="uploaded" width="250" />
        </div>
      )}
    </div>
  );
};
