import { useState} from "react";
import type { ChangeEvent } from "react";
export default function InputCheck() {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="p-4">
        <h3>kiem tra do dai chuoi</h3>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Nhập chuỗi..."
        className="border rounded p-2"
      />
      {value.length > 5 && (
        <p className="text-red-500 mt-2">Chuỗi nhập vào dài hơn 5 ký tự!</p>
      )}
    </div>
  );
}
