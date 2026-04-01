import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
  });
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(form);
      navigate("/login");
    } catch {
      setError("Registration failed. Please validate all fields.");
    }
  };

  return (
    <div className="mx-auto mt-12 max-w-lg rounded-lg bg-white p-6 shadow">
      <h1 className="mb-4 text-2xl font-semibold">Create account</h1>
      <form onSubmit={submit} className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <input className="rounded border p-2" placeholder="First name" value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })} />
        <input className="rounded border p-2" placeholder="Last name" value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })} />
        <input className="rounded border p-2 md:col-span-2" placeholder="Username" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
        <input className="rounded border p-2 md:col-span-2" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="rounded border p-2 md:col-span-2" type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        {error && <p className="text-sm text-rose-600 md:col-span-2">{error}</p>}
        <button className="rounded bg-indigo-600 p-2 font-medium text-white hover:bg-indigo-700 md:col-span-2">Register</button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account? <Link to="/login" className="text-indigo-600">Sign in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
