export default function Gallery() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* ===== Header ===== */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Our <span className="text-purple-500">Gallery</span>
        </h1>
        <p className="text-gray-400">
          Moments from our projects, workshops, and team activities
        </p>
      </section>

      {/* ===== Gallery Grid ===== */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Card */}
          <div className="overflow-hidden rounded-2xl bg-[#111] hover:scale-105 transition">
            <div className="h-56 bg-gray-800 flex items-center justify-center text-gray-500">
              Image 1
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#111] hover:scale-105 transition">
            <div className="h-56 bg-gray-800 flex items-center justify-center text-gray-500">
              Image 2
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#111] hover:scale-105 transition">
            <div className="h-56 bg-gray-800 flex items-center justify-center text-gray-500">
              Image 3
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#111] hover:scale-105 transition">
            <div className="h-56 bg-gray-800 flex items-center justify-center text-gray-500">
              Image 4
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#111] hover:scale-105 transition">
            <div className="h-56 bg-gray-800 flex items-center justify-center text-gray-500">
              Image 5
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#111] hover:scale-105 transition">
            <div className="h-56 bg-gray-800 flex items-center justify-center text-gray-500">
              Image 6
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}