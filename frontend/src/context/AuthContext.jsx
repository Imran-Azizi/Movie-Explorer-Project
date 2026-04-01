import { createContext, useContext, useEffect, useMemo, useState } from "react";

import api from "../api/client";
import { isTokenExpired } from "../utils/jwt";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    const { data } = await api.get("/auth/me/");
    setUser(data);
  };

  useEffect(() => {
    const bootstrap = async () => {
      const access = localStorage.getItem("accessToken");
      const refresh = localStorage.getItem("refreshToken");

      if (!access || !refresh) {
        setLoading(false);
        return;
      }

      try {
        if (isTokenExpired(access)) {
          const { data } = await api.post("/auth/refresh/", { refresh });
          localStorage.setItem("accessToken", data.access);
        }
        await fetchProfile();
      } catch {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      } finally {
        setLoading(false);
      }
    };

    bootstrap();
  }, []);

  const login = async (email, password) => {
    const { data } = await api.post("/auth/login/", { email, password });
    localStorage.setItem("accessToken", data.access);
    localStorage.setItem("refreshToken", data.refresh);
    await fetchProfile();
  };

  const register = async (payload) => {
    await api.post("/auth/register/", payload);
  };

  const logout = async () => {
    const refresh = localStorage.getItem("refreshToken");
    if (refresh) {
      await api.post("/auth/logout/", { refresh }).catch(() => null);
    }
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, loading, login, logout, register }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
};
