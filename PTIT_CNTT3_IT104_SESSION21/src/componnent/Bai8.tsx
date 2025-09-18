export default function Bai8() {
  return (
    <div className="flex flex-col gap-6 p-4">
      {/* Hình 1.1: Các phần tử nằm bên trái */}
      <div className="flex justify-start border rounded-lg p-2">
        <Box num="01" />
        <Box num="02" />
        <Box num="03" />
      </div>

      {/* Hình 1.2: Các phần tử nằm bên phải */}
      <div className="flex justify-end border rounded-lg p-2">
        <Box num="01" />
        <Box num="02" />
        <Box num="03" />
      </div>

      {/* Hình 1.3: Các phần tử nằm ở giữa */}
      <div className="flex justify-center border rounded-lg p-2">
        <Box num="01" />
        <Box num="02" />
        <Box num="03" />
      </div>

      {/* Hình 1.4: Các phần tử giãn ra hai bên */}
      <div className="flex justify-between border rounded-lg p-2">
        <Box num="01" />
        <Box num="02" />
        <Box num="03" />
      </div>

      {/* Hình 1.5: Các phần tử giãn đều 2 bên */}
      <div className="flex justify-around border rounded-lg p-2">
        <Box num="01" />
        <Box num="02" />
        <Box num="03" />
      </div>

      {/* Hình 1.6: Các phần tử giữa đều */}
      <div className="flex justify-evenly border rounded-lg p-2">
        <Box num="01" />
        <Box num="02" />
        <Box num="03" />
      </div>
    </div>
  )
}

function Box({ num }: { num: string }) {
  return (
    <div className="w-12 h-12 bg-blue-500 text-white font-bold flex items-center justify-center rounded-md m-1">
      {num}
    </div>
  )
}
