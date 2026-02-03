export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-purple-500">ADRS Techno</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mb-8">
          We build scalable digital products, deliver smart tech solutions,
          and empower careers through innovation.
        </p>
        <div className="flex gap-4">
          <a
            href="/services"
            className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
          >
            Our Services
          </a>
          <a
            href="/careers"
            className="px-6 py-3 border border-purple-600 rounded-xl hover:bg-purple-600 transition"
          >
            Join Us
          </a>
        </div>
      </section>

      {/* ================= OUR IMPACT ================= */}
      <section className="py-24 bg-black">
        <h2 className="text-center text-4xl font-bold mb-14">
          Our <span className="text-purple-500">Impact</span>
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#111] rounded-2xl p-10 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-purple-500 mb-2">117+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>

          <div className="bg-[#111] rounded-2xl p-10 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-purple-500 mb-2">50+</h3>
            <p className="text-gray-400">Happy Clients</p>
          </div>

          <div className="bg-[#111] rounded-2xl p-10 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-purple-500 mb-2">10+</h3>
            <p className="text-gray-400">Team Members</p>
          </div>

          <div className="bg-[#111] rounded-2xl p-10 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-purple-500 mb-2">2024</h3>
            <p className="text-gray-400">Founded</p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-[#0b0b0b]">
        <h2 className="text-center text-4xl font-bold mb-14">
          Our <span className="text-purple-500">Services</span>
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-[#111] p-8 rounded-2xl text-center border border-transparent hover:border-purple-500 hover:shadow-purple-500/20 hover:shadow-xl transition">
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-3 text-purple-500">
              Web Development
            </h3>
            <p className="text-gray-400 text-sm">
              Modern, fast, and scalable websites using latest technologies.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl text-center border border-transparent hover:border-purple-500 hover:shadow-purple-500/20 hover:shadow-xl transition">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-3 text-purple-500">
              Mobile Apps
            </h3>
            <p className="text-gray-400 text-sm">
              High-performance Android & iOS applications.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl text-center border border-transparent hover:border-purple-500 hover:shadow-purple-500/20 hover:shadow-xl transition">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-3 text-purple-500">
              AI / ML Solutions
            </h3>
            <p className="text-gray-400 text-sm">
              Intelligent systems powered by AI, ML & automation.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl text-center border border-transparent hover:border-purple-500 hover:shadow-purple-500/20 hover:shadow-xl transition">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-3 text-purple-500">
              Training & Workshops
            </h3>
            <p className="text-gray-400 text-sm">
              Industry-ready training and hands-on workshops.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-black">
        <h2 className="text-4xl font-bold mb-6">
          Ready to <span className="text-purple-500">Work With Us?</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Let’s build something impactful together.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
        >
          Contact Us
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0b0b0b] py-10 text-center">
        <h3 className="text-xl font-bold text-purple-500 mb-2">
          ADRS Techno
        </h3>
        <p className="text-gray-400 mb-2">
          adrstechno@gmail.com | +91 XXXXX XXXXX
        </p>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} ADRS Techno. All rights reserved.
        </p>
      </footer>

    </div>
  );
}