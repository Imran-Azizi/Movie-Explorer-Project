import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <nav className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <Link to="/" className="text-lg font-bold">
            Auth Portal
          </Link>
          {user && (
            <div className="flex items-center gap-4 text-sm">
              <span>{user.email}</span>
              <span className="rounded-full bg-indigo-600 px-3 py-1 uppercase">{user.role}</span>
              <button
                onClick={onLogout}
                className="rounded-md bg-rose-500 px-3 py-1 font-medium hover:bg-rose-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
      <main className="mx-auto max-w-6xl p-4">{children}</main>
    </div>
  );
};

export default Layout;
