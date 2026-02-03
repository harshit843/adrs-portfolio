export default function Services() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Header */}
      <section className="py-20 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Our <span className="text-purple-500">Services</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We deliver end-to-end digital solutions tailored to your business needs.
        </p>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-[#111] p-8 rounded-2xl hover:border-purple-500 border border-transparent transition">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              Web Development
            </h3>
            <p className="text-gray-400 text-sm">
              Custom websites, dashboards, and scalable web applications using modern frameworks.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl hover:border-purple-500 border border-transparent transition">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              Mobile App Development
            </h3>
            <p className="text-gray-400 text-sm">
              Android and iOS apps focused on performance, usability, and growth.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl hover:border-purple-500 border border-transparent transition">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              AI / ML Solutions
            </h3>
            <p className="text-gray-400 text-sm">
              Intelligent systems, chatbots, automation, and data-driven decision tools.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl hover:border-purple-500 border border-transparent transition">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              Backend Development
            </h3>
            <p className="text-gray-400 text-sm">
              Secure APIs, database design, authentication, and scalable backend systems.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl hover:border-purple-500 border border-transparent transition">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              Cloud & Deployment
            </h3>
            <p className="text-gray-400 text-sm">
              Cloud hosting, CI/CD pipelines, and production-ready deployments.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl hover:border-purple-500 border border-transparent transition">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              Training & Mentorship
            </h3>
            <p className="text-gray-400 text-sm">
              Industry-focused training programs and hands-on mentorship.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}