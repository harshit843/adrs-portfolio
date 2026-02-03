export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-purple-500 mb-3">
            ADRS Techno
          </h3>
          <p className="text-gray-400 text-sm">
            Building innovative digital solutions and empowering careers through technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-purple-400">Home</a></li>
            <li><a href="/services" className="hover:text-purple-400">Services</a></li>
            <li><a href="/gallery" className="hover:text-purple-400">Gallery</a></li>
            <li><a href="/careers" className="hover:text-purple-400">Careers</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-gray-400 text-sm mb-2">
            📧 support@adrstechno.com
          </p>
          <p className="text-gray-400 text-sm mb-4">
            📞 +91 9076927464
          </p>

          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#" className="hover:text-purple-500">🌐</a>
            <a href="#" className="hover:text-purple-500">💼</a>
            <a href="#" className="hover:text-purple-500">🐙</a>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} ADRS Techno. All rights reserved.
      </div>
    </footer>
  );
}