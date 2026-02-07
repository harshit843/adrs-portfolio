import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-xl w-96 border border-gray-700"
      >
        <h2 className="text-2xl font-bold text-purple-500 mb-6 text-center">
          Sign In
        </h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <input
          className="w-full mb-4 p-2 rounded bg-black border border-gray-700 text-white"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-4 p-2 rounded bg-black border border-gray-700 text-white"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
          Login
        </button>

        <div className="flex justify-between mt-4 text-sm text-gray-400">
          <Link to="/signup">Create account</Link>
          <Link to="/forgot">Forgot password?</Link>
        </div>
      </form>
    </div>
  );
}