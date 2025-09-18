export default function Bai5() {
  return (
    <div className="flex items-center justify-center h-screen bg-sky-100">
      {/* Parent */}
      <div className="relative w-[300px] h-[200px] bg-sky-200 rounded-lg border border-sky-300 p-4">
        <p className="text-sky-800 font-medium">Relative parent</p>

        {/* Child */}
        <div className="absolute bottom-2 left-2 bg-sky-500 text-white font-bold px-4 py-2 rounded-lg shadow">
          Absolute child
        </div>
      </div>
    </div>
  )
}
