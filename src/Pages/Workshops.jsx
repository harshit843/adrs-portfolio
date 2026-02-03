export default function Workshops() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Header */}
      <section className="py-20 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Our <span className="text-purple-500">Workshops</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Hands-on workshops designed to make you industry-ready.
        </p>
      </section>

      {/* Workshops */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 space-y-6">

          {/* Workshop 1 */}
          <div className="bg-[#111] p-8 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-500 mb-2">
                Full Stack Web Development
              </h3>
              <p className="text-gray-400 text-sm">
                Build real-world applications using React, Node.js, databases, and deployment.
              </p>
            </div>
            <a
              href="mailto:adrstechno@gmail.com?subject=Apply for Full Stack Workshop"
              className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition text-center"
            >
              Apply Now
            </a>
          </div>

          {/* Workshop 2 */}
          <div className="bg-[#111] p-8 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-500 mb-2">
                Python & AI Fundamentals
              </h3>
              <p className="text-gray-400 text-sm">
                Learn Python, machine learning basics, and practical AI use cases.
              </p>
            </div>
            <a
              href="mailto:adrstechno@gmail.com?subject=Apply for Python & AI Workshop"
              className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition text-center"
            >
              Apply Now
            </a>
          </div>

          {/* Workshop 3 */}
          <div className="bg-[#111] p-8 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-500 mb-2">
                Career Readiness Program
              </h3>
              <p className="text-gray-400 text-sm">
                Resume building, interview prep, projects, and placement guidance.
              </p>
            </div>
            <a
              href="mailto:adrstechno@gmail.com?subject=Apply for Career Readiness Program"
              className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition text-center"
            >
              Apply Now
            </a>
          </div>

          {/* Workshop 4 */}
          <div className="bg-[#111] p-8 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-500 mb-2">
                Git, GitHub & Deployment
              </h3>
              <p className="text-gray-400 text-sm">
                Version control, collaboration, and deploying apps to production.
              </p>
            </div>
            <a
              href="mailto:adrstechno@gmail.com?subject=Apply for Git & Deployment Workshop"
              className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition text-center"
            >
              Apply Now
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}