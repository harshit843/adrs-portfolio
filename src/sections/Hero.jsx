import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center px-10"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I’m <span className="text-blue-500">ADRS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-xl"
          style={{ color: "var(--text-muted)" }}
        >
          I build modern websites and applications with clean UI and smooth
          user experience.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          View My Work
        </motion.a>
      </div>
    </section>
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
  );
}

export default Hero;