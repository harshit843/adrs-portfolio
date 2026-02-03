export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* ===== Header ===== */}
      <section className="py-20 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Contact <span className="text-purple-500">Us</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Have a project, question, or idea? Let’s talk.
        </p>
      </section>

      {/* ===== Contact Form ===== */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <form className="bg-[#111] p-8 rounded-2xl shadow-lg space-y-6">

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-black border border-gray-700 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-black border border-gray-700 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl bg-black border border-gray-700 focus:outline-none focus:border-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>

    </div>
  );
}