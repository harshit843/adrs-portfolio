export default function Products() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Header */}
      <section className="py-20 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Our <span className="text-purple-500">Products</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Digital products designed to solve real-world problems.
        </p>
      </section>

      {/* Products */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-[#111] p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              Learning Management System
            </h3>
            <p className="text-gray-400 text-sm">
              A complete platform for online courses, assessments, and progress tracking.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              E-Commerce Platform
            </h3>
            <p className="text-gray-400 text-sm">
              Scalable e-commerce solution with payments, admin dashboard, and analytics.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              AI Chatbot System
            </h3>
            <p className="text-gray-400 text-sm">
              Smart chatbots for customer support, automation, and engagement.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              Portfolio & Business Websites
            </h3>
            <p className="text-gray-400 text-sm">
              Ready-to-deploy websites for professionals, startups, and businesses.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}