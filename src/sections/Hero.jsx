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
  );
}

export default Hero;