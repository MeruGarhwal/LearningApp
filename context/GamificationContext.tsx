"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  addBadge as addBadgeStorage,
  getStoredXP,
  setStoredXP,
  getStoredBadges,
  XP_PER_QUIZ,
  XP_PER_TOPIC_VIEW,
  XP_PER_PLAYGROUND,
  XP_LEVEL_STEP,
  getLevelFromXP,
  type BadgeId,
} from "@/lib/gamification";

type GamificationContextType = {
  xp: number;
  level: number;
  levelTitle: string;
  xpInLevel: number;
  xpForNextLevel: number;
  badges: BadgeId[];
  addXP: (amount: number, source?: string) => void;
  awardBadge: (id: BadgeId) => boolean;
  lastEarnedBadge: BadgeId | null;
  clearLastEarnedBadge: () => void;
};

const GamificationContext = createContext<GamificationContextType | null>(null);

const XP_LEVEL_STEP = 200;

export function GamificationProvider({ children }: { children: React.ReactNode }) {
  const [xp, setXp] = useState(0);
  const [badges, setBadges] = useState<BadgeId[]>([]);
  const [lastEarnedBadge, setLastEarnedBadge] = useState<BadgeId | null>(null);

  useEffect(() => {
    setXp(getStoredXP());
    setBadges(getStoredBadges());
  }, []);

  const addXP = useCallback((amount: number) => {
    setXp((prev) => {
      const next = prev + amount;
      setStoredXP(next);
      return next;
    });
  }, []);

  const awardBadge = useCallback((id: BadgeId) => {
    const earned = addBadgeStorage(id);
    if (earned) {
      setBadges(getStoredBadges());
      setLastEarnedBadge(id);
    }
    return earned;
  }, []);

  const clearLastEarnedBadge = useCallback(() => setLastEarnedBadge(null), []);

  const { level, title: levelTitle, xpInLevel } = getLevelFromXP(xp);
  const xpForNextLevel = XP_LEVEL_STEP; // 200

  const value: GamificationContextType = {
    xp,
    level,
    levelTitle,
    xpInLevel,
    xpForNextLevel,
    badges,
    addXP,
    awardBadge,
    lastEarnedBadge,
    clearLastEarnedBadge,
  };

  return (
    <GamificationContext.Provider value={value}>
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const ctx = useContext(GamificationContext);
  return ctx;
}

export { XP_PER_QUIZ, XP_PER_TOPIC_VIEW, XP_PER_PLAYGROUND };
