import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar({ theme, setTheme }) {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full backdrop-blur px-10 py-4 flex justify-between items-center z-50"
      style={{
        backgroundColor: "var(--bg-card)",
        color: "var(--text-main)",
      }}
    >
      <h1 className="text-xl font-bold">ADRS</h1>

      <div className="flex items-center gap-6 text-sm">
        <a href="#home" className="hover:opacity-70">Home</a>
        <a href="#about" className="hover:opacity-70">About</a>
        <a href="#projects" className="hover:opacity-70">Projects</a>
        <a href="#contact" className="hover:opacity-70">Contact</a>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-4 p-2 rounded-full transition"
          style={{ backgroundColor: "var(--bg-section)" }}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;