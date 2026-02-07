import { useState } from "react";
import { Link } from "react-router-dom";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 p-8 rounded-xl w-96 border border-gray-700">
        <h2 className="text-2xl font-bold text-purple-500 mb-6 text-center">
          Reset Password
        </h2>

        {sent ? (
          <p className="text-green-500 text-center">
            Reset link sent to your email 📧
          </p>
        ) : (
          <>
            <input
              className="w-full mb-4 p-2 rounded bg-black border border-gray-700 text-white"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={() => setSent(true)}
              className="w-full bg-purple-500 text-white py-2 rounded"
            >
              Send Reset Link
            </button>
          </>
        )}

        <Link to="/login" className="block text-center text-gray-400 mt-4 text-sm">
          Back to login
        </Link>
      </div>
    </div>
  );
}