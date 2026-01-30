import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-10 py-20"
      style={{ backgroundColor: "var(--bg-section)" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      <p
        className="max-w-2xl mb-12"
        style={{ color: "var(--text-muted)" }}
      >
        ADRS Techno focuses on delivering high-quality digital products with
        modern UI, smooth animations, and scalable architecture.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {["React", "Tailwind CSS", "Node.js", "UI/UX"].map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border p-4 rounded-lg text-center font-semibold transition"
            style={{
              borderColor: "var(--text-muted)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;