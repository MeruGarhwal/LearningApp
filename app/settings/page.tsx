"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { isSoundEnabled, setSoundEnabled } from "@/lib/sound";
import { useGamification } from "@/context/GamificationContext";
import { BADGES } from "@/lib/gamification";

export default function SettingsPage() {
  const [soundOn, setSoundOn] = useState(false);
  const gamification = useGamification();

  useEffect(() => {
    setSoundOn(isSoundEnabled());
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-lg px-4 py-8">
        <h1 className="text-2xl font-bold text-slate-800">Settings</h1>

        <section className="mt-6 space-y-4">
          <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
            <span className="text-slate-700">Sound effects</span>
            <button
              type="button"
              role="switch"
              aria-checked={soundOn}
              onClick={toggleSound}
              className={`relative h-7 w-12 rounded-full transition-colors ${
                soundOn ? "bg-blue-500" : "bg-slate-200"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  soundOn ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>
        </section>

        {gamification && (
          <section className="mt-8">
            <h2 className="text-lg font-semibold text-slate-800">Your progress</h2>
            <div className="mt-3 flex items-center gap-3 rounded-xl border border-slate-200 bg-amber-50/50 p-4">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="font-bold text-slate-800">{gamification.xp} XP</p>
                <p className="text-sm text-slate-600">
                  Level {gamification.level} · {gamification.levelTitle}
                </p>
              </div>
            </div>
            <div className="mt-3">
              <p className="mb-2 text-sm font-medium text-slate-600">Badges</p>
              <div className="flex flex-wrap gap-2">
                {gamification.badges.length === 0 ? (
                  <p className="text-sm text-slate-500">Complete quizzes and activities to earn badges!</p>
                ) : (
                  gamification.badges.map((id) => {
                    const b = BADGES[id];
                    return b ? (
                      <span
                        key={id}
                        className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                        title={b.description}
                      >
                        {b.emoji} {b.name}
                      </span>
                    ) : null;
                  })
                )}
              </div>
            </div>
          </section>
        )}

        <p className="mt-10">
          <Link href="/" className="text-sm font-medium text-blue-600 hover:underline">
            ← Back to home
          </Link>
        </p>
      </main>
    </>
  );
}
