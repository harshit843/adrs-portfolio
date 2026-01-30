import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built using React & Tailwind.",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "E-Commerce App",
    desc: "Full-stack e-commerce application.",
    link: "https://e-learning-platform-ebon-seven.vercel.app/",
  },
  {
    title: "Company Website",
    desc: "Business website with modern UI.",
    link: "https://adrstechno.com",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-10 py-20"
      style={{ backgroundColor: "var(--bg-section)" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border hover:-translate-y-1 transition block"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--text-muted)",
            }}
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p
              className="mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              {project.desc}
            </p>

            <span className="text-blue-500 font-medium">
              View Project →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Projects;