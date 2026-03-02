"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  type User,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import type { UserProfile, UserRole } from "@/lib/types";

interface AuthState {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;
}

interface AuthContextValue extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (
    email: string,
    password: string,
    name: string,
    role: UserRole,
    linkedStudentId?: string
  ) => Promise<void>;
  signOut: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

async function getProfile(uid: string): Promise<UserProfile | null> {
  if (!db) return null;
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data() as UserProfile) : null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    profile: null,
    loading: true,
    error: null,
  });

  const clearError = useCallback(() => setState((s) => ({ ...s, error: null })), []);

  const signIn = useCallback(
    async (email: string, password: string) => {
      if (!auth) throw new Error("Firebase Auth not initialized");
      setState((s) => ({ ...s, error: null }));
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Sign in failed";
        setState((s) => ({ ...s, error: message }));
        throw err;
      }
    },
    []
  );

  const signUp = useCallback(
    async (
      email: string,
      password: string,
      name: string,
      role: UserRole,
      linkedStudentId?: string
    ) => {
      if (!auth || !db) throw new Error("Firebase not initialized");
      setState((s) => ({ ...s, error: null }));
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      const profile: UserProfile = {
        uid: user.uid,
        name,
        email: user.email ?? email,
        role,
        ...(role === "parent" && linkedStudentId ? { linkedStudentId } : {}),
      };
      await setDoc(doc(db, "users", user.uid), profile);
    },
    []
  );

  const signOut = useCallback(async () => {
    if (!auth) return;
    await firebaseSignOut(auth);
    setState({ user: null, profile: null, loading: false, error: null });
  }, []);

  useEffect(() => {
    if (!auth) {
      setState((s) => ({ ...s, loading: false }));
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setState({ user: null, profile: null, loading: false, error: null });
        return;
      }
      const profile = await getProfile(user.uid);
      setState({
        user,
        profile,
        loading: false,
        error: null,
      });
    });
    return () => unsubscribe();
  }, []);

  const value: AuthContextValue = {
    ...state,
    signIn,
    signUp,
    signOut,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
