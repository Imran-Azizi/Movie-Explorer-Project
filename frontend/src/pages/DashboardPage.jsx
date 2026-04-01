import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <h1 className="mb-4 text-3xl font-bold">Dashboard</h1>
      <p className="mb-8 text-slate-600">Authentication is secured with JWT and role-based authorization.</p>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="font-semibold">Profile</h2>
          <p className="mt-2 text-sm text-slate-600">{user.first_name} {user.last_name}</p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="font-semibold">Email</h2>
          <p className="mt-2 text-sm text-slate-600">{user.email}</p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="font-semibold">Role</h2>
          <p className="mt-2 text-sm uppercase text-slate-600">{user.role}</p>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
