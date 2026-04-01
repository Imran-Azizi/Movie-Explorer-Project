import { Link } from "react-router-dom";

const ForbiddenPage = () => (
  <div className="mx-auto mt-20 max-w-md rounded-lg bg-white p-6 text-center shadow">
    <h1 className="text-2xl font-bold text-rose-600">403 Forbidden</h1>
    <p className="mt-3 text-slate-600">You do not have sufficient permissions to access this route.</p>
    <Link to="/" className="mt-5 inline-block rounded bg-indigo-600 px-4 py-2 text-white">Go Home</Link>
  </div>
);

export default ForbiddenPage;
