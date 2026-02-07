export default function Dashboard() {
  return (
    <div className="min-h-screen pt-28 bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 mb-10">
        <h1 className="text-4xl font-extrabold text-purple-400">
          Dashboard
        </h1>
        <p className="text-gray-400 mt-2">
          Welcome back! Here’s what’s happening today 🚀
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <h3 className="text-lg font-semibold">Projects</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-gradient-to-tr from-pink-600 to-rose-500 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <h3 className="text-lg font-semibold">Clients</h3>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>

        <div className="bg-gradient-to-tr from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <h3 className="text-lg font-semibold">Workshops</h3>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>

        <div className="bg-gradient-to-tr from-orange-500 to-amber-500 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <h3 className="text-lg font-semibold">Growth</h3>
          <p className="text-3xl font-bold mt-2">+32%</p>
        </div>

      </div>

      {/* Activity Section */}
      <div className="max-w-7xl mx-auto px-8 mt-12">
        <div className="bg-black/40 backdrop-blur-lg border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>✅ New user registered</li>
            <li>📦 Product updated</li>
            <li>🎓 Workshop scheduled</li>
            <li>🚀 Portfolio performance improved</li>
          </ul>
        </div>
      </div>

    </div>
  );
}