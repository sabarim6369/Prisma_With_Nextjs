export default function Dashboard() {
const datas=[
        {
            description:"Learn Next.js App Router",
        },
        {
            description:"Build Todo app UI",
        },
]
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-pink-500 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg">
        <h1 className="font-bold text-3xl mb-6 text-center text-gray-800">Todo App</h1>
        
        <div className="flex gap-2 mb-6 justify-between">
          <input
            type="text"
            placeholder="Add new todo..."
            className="flex-grow border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 transition cursor-pointer">
            Add
          </button>
        </div>
        
        <ul className="space-y-3 max-h-72 overflow-y-auto">
            {
                datas.map((data,index)=>{
                    return (
                      <li
                       key={index}
                        className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm">
                        <span>{data.description}</span>
                        <button className="text-red-500 hover:text-red-700 cursor-pointer">
                          Delete
                        </button>
                      </li>
                    );
                })
            }
        </ul>
      </div>
    </div>
  );
}
