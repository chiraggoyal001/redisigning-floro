"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface UserProfile {
  phone: string;
  fullName: string;
  isAuthenticated: boolean;
}

interface AuthContextType {
  user: UserProfile | null;
  loginWithPhone: (phone: string, name?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = "floro_auth_user";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY);
      if (stored) {
        setUser(JSON.parse(stored));
      } else {
        // Default authenticated demo subscriber for immediate preview
        const demoUser: UserProfile = {
          phone: "9876543210",
          fullName: "Aarav Sharma",
          isAuthenticated: true,
        };
        setUser(demoUser);
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(demoUser));
      }
    } catch {
      // Fallback
    }
  }, []);

  const loginWithPhone = (phone: string, name = "Devotee") => {
    const profile: UserProfile = {
      phone,
      fullName: name,
      isAuthenticated: true,
    };
    setUser(profile);
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(profile));
    } catch {
      // ignore
    }
  };

  const logout = () => {
    setUser({
      phone: "",
      fullName: "",
      isAuthenticated: false,
    });
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <AuthContext.Provider value={{ user, loginWithPhone, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
