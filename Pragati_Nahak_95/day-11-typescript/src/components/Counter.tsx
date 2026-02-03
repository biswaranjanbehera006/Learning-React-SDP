import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="bg-gray-100 p-6 rounded-xl text-center">
      <p className="text-2xl font-bold">{count}</p>

      <div className="flex gap-4 justify-center mt-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          +
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          -
        </button>
      </div>
    </div>
  )
}

export default Counter
