"use client";

import axiosInstance from "@/lib/axios";
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";



type User = {
  _id: string;
  name: string;
  displayName?: string;
  email: string;
  photo: string;
  role: string;
  createdAt?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const getCurrentUser = async () => {
    try {
      const { data } = await axiosInstance.get("/auth/me");

      setUser(data.user);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  getCurrentUser();
}, []);

const logout = async () => {
  try {
    await axiosInstance.post("/auth/logout");

    setUser(null);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}