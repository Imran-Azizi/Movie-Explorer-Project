import { useEffect, useState } from "react";

import api from "../api/client";
import Layout from "../components/Layout";

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await api.get("/auth/users/");
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateRole = async (id, role) => {
    await api.patch(`/auth/users/${id}/role/`, { role });
    fetchUsers();
  };

  return (
    <Layout>
      <h1 className="mb-4 text-3xl font-bold">Admin Authorization Panel</h1>
      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3">Email</th>
              <th className="p-3">Username</th>
              <th className="p-3">Role</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.username}</td>
                <td className="p-3 uppercase">{user.role}</td>
                <td className="flex gap-2 p-3">
                  {['user', 'manager', 'admin'].map((role) => (
                    <button
                      key={role}
                      onClick={() => updateRole(user.id, role)}
                      className="rounded bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-700"
                    >
                      {role}
                    </button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default AdminPage;
