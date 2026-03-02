"use client";

import { useState } from "react";
import { useGamification } from "@/context/GamificationContext";
import type { BadgeId } from "@/lib/gamification";

export interface QuickCheckOption {
  id: string;
  label: string;
  correct?: boolean;
}

interface QuickCheckProps {
  question: string;
  options: QuickCheckOption[];
  revealText: string;
  className?: string;
  badgeId?: BadgeId;
}

export default function QuickCheck({
  question,
  options,
  revealText,
  className = "",
  badgeId = "quick_thinker",
}: QuickCheckProps) {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const gamification = useGamification();

  const correctId = options.find((o) => o.correct)?.id;

  const handleReveal = () => {
    setRevealed(true);
    gamification?.addXP(15);
    gamification?.awardBadge(badgeId);
  };

  return (
    <div
      className={`rounded-2xl border-2 border-violet-200 bg-violet-50/80 p-4 ${className}`}
    >
      <p className="mb-2 flex items-center gap-2 text-sm font-bold text-violet-800">
        <span>💡</span> Quick check (during learning)
      </p>
      <p className="mb-3 font-medium text-slate-800">{question}</p>

      {!revealed ? (
        <>
          <ul className="space-y-2">
            {options.map((opt) => (
              <li key={opt.id}>
                <button
                  type="button"
                  onClick={() => setSelected(opt.id)}
                  className={`w-full rounded-xl border-2 px-4 py-2.5 text-left text-sm transition ${
                    selected === opt.id
                      ? "border-violet-500 bg-violet-100"
                      : "border-slate-200 bg-white hover:border-violet-300"
                  }`}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={handleReveal}
            className="mt-3 w-full rounded-xl bg-violet-500 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-600"
          >
            Reveal answer →
          </button>
        </>
      ) : (
        <div className="animate-[scaleIn_0.4s_ease-out] rounded-xl bg-emerald-100 p-3">
          <p className="text-sm font-semibold text-emerald-800">{revealText}</p>
        </div>
      )}
    </div>
  );
}
