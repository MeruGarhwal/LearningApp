"use client";

import { useEffect } from "react";
import { useGamification } from "@/context/GamificationContext";
import { BADGES } from "@/lib/gamification";
import { playSuccess } from "@/lib/sound";

export default function BadgeToast() {
  const ctx = useGamification();
  const badgeId = ctx?.lastEarnedBadge;

  useEffect(() => {
    if (!badgeId) return;
    playSuccess();
    const t = setTimeout(() => ctx?.clearLastEarnedBadge(), 4000);
    return () => clearTimeout(t);
  }, [badgeId, ctx]);

  if (!badgeId) return null;

  const badge = BADGES[badgeId];
  if (!badge) return null;

  return (
    <div
      className="fixed bottom-20 left-4 right-4 z-50 animate-[slideUp_0.4s_ease-out] rounded-2xl border-2 border-amber-300 bg-amber-50 p-4 shadow-lg sm:left-auto sm:right-6 sm:max-w-sm"
      role="alert"
    >
      <p className="text-center text-sm font-medium text-amber-800">
        Badge earned!
      </p>
      <p className="mt-1 flex items-center justify-center gap-2 text-lg font-bold text-slate-800">
        <span>{badge.emoji}</span>
        {badge.name}
      </p>
      <p className="mt-0.5 text-center text-xs text-slate-600">
        {badge.description}
      </p>
    </div>
  );
}
