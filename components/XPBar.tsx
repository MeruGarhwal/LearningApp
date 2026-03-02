"use client";

import { useGamification } from "@/context/GamificationContext";

export default function XPBar() {
  const ctx = useGamification();
  if (!ctx) return null;

  const { xp, level, levelTitle, xpInLevel, xpForNextLevel } = ctx;
  const percent = Math.min(100, (xpInLevel / xpForNextLevel) * 100);

  return (
    <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-1.5">
      <span className="text-sm font-bold text-amber-600" title="XP">
        ⭐ {xp}
      </span>
      <div className="h-2 w-16 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-xs font-semibold text-slate-600" title={levelTitle}>
        Lv.{level}
      </span>
    </div>
  );
}
