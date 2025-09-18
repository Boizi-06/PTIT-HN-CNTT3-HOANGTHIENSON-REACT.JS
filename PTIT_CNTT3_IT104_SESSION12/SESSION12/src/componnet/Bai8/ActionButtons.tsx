

type ActionButtonsProps = {
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function ActionButtons({ onEdit, onDelete }: ActionButtonsProps) {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <button
        onClick={onEdit}
        style={{
          backgroundColor: "#333",
          color: "white",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Sửa
      </button>
      <button
        onClick={onDelete}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Xóa
      </button>
    </div>
  );
}
