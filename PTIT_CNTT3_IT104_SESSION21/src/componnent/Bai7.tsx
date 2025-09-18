export default function Bai7() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 9 }, (_, i) => (
          <div
            key={i}
            className="w-40 h-16 flex items-center justify-center bg-[rgb(217,70,239)] rounded-xl text-white font-bold shadow"
          >
            {`0${i + 1}`}
          </div>
        ))}
      </div>
    </div>
  )
}
