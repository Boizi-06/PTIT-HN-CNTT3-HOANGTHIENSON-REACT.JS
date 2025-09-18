
type ColorBoxProps = {
  color: string;
};

export default function ColorBox({ color }: ColorBoxProps) {
  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      {/* Hộp màu */}
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontWeight: "bold",
          marginBottom: "5px",
        }}
      >
        Box
      </div>
      {/* Tên màu */}
      <span>{color}</span>
    </div>
  );
}
