"use client";

import { AuthProvider } from "@/context/AuthContext";
import { GamificationProvider } from "@/context/GamificationContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <GamificationProvider>{children}</GamificationProvider>
    </AuthProvider>
  );
}
