export default function Careers() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* ===== Header ===== */}
      <section className="py-20 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Careers at <span className="text-purple-500">ADRS Techno</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Join our growing team and build innovative products with cutting-edge technologies.
        </p>
      </section>

      {/* ===== Job Cards ===== */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Job 1 */}
          <div className="bg-[#111] rounded-2xl p-8 border border-transparent hover:border-purple-500 transition">
            <h3 className="text-2xl font-semibold text-purple-500 mb-2">
              Frontend Developer
            </h3>
            <p className="text-gray-400 mb-4">
              React • Tailwind • JavaScript
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Build modern, responsive user interfaces and collaborate with backend teams.
            </p>
            <a
              href="mailto:adrstechno@gmail.com"
              className="inline-block px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
            >
              Apply Now
            </a>
          </div>

          {/* Job 2 */}
          <div className="bg-[#111] rounded-2xl p-8 border border-transparent hover:border-purple-500 transition">
            <h3 className="text-2xl font-semibold text-purple-500 mb-2">
              Backend Developer
            </h3>
            <p className="text-gray-400 mb-4">
              Node.js • Python • Databases
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Design scalable APIs, manage databases, and optimize performance.
            </p>
            <a
              href="mailto:adrstechno@gmail.com"
              className="inline-block px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
            >
              Apply Now
            </a>
          </div>

          {/* Job 3 */}
          <div className="bg-[#111] rounded-2xl p-8 border border-transparent hover:border-purple-500 transition">
            <h3 className="text-2xl font-semibold text-purple-500 mb-2">
              AI / ML Intern
            </h3>
            <p className="text-gray-400 mb-4">
              Python • ML • Data Science
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Work on real-world AI/ML projects and research-driven solutions.
            </p>
            <a
              href="mailto:adrstechno@gmail.com"
              className="inline-block px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
            >
              Apply Now
            </a>
          </div>

          {/* Job 4 */}
          <div className="bg-[#111] rounded-2xl p-8 border border-transparent hover:border-purple-500 transition">
            <h3 className="text-2xl font-semibold text-purple-500 mb-2">
              Workshop Trainer
            </h3>
            <p className="text-gray-400 mb-4">
              Web • AI • Career Training
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Conduct workshops and mentor students & professionals.
            </p>
            <a
              href="mailto:adrstechno@gmail.com"
              className="inline-block px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
            >
              Apply Now
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}