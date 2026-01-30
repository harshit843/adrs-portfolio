import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-transparent px-10 py-20 flex items-center"
    >
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-xl mb-10"
        >
          Feel free to reach out for projects, collaboration, or opportunities.
        </motion.p>

        <div className="flex flex-col gap-6 text-lg">
          {/* GitHub */}
          <a
            href="https://github.com/adrstechno"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-blue-400 transition"
          >
            <FaGithub size={24} />
            <span>github.com/adrstechno</span>
          </a>

          {/* Email */}
          <a
            href="support@adrstechno.com"
            className="flex items-center gap-4 hover:text-blue-400 transition"
          >
            <FaEnvelope size={24} />
            <span>support@adrstechno.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:++91 9076927464"
            className="flex items-center gap-4 hover:text-blue-400 transition"
          >
            <FaPhone size={22} />
            <span>+91 9076927464</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;