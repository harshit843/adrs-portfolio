import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      signup(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form className="bg-gray-900 p-8 rounded-xl w-96 border border-gray-700" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-purple-500 mb-6 text-center">
          Sign Up
        </h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <input
          className="w-full mb-4 p-2 rounded bg-black border border-gray-700 text-white"
          placeholder="Email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-4 p-2 rounded bg-black border border-gray-700 text-white"
          placeholder="Password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
          Create Account
        </button>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}