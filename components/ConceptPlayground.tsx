"use client";

import { useState, useCallback } from "react";
import { useGamification } from "@/context/GamificationContext";
import { XP_PER_PLAYGROUND } from "@/lib/gamification";

type PlaygroundType = "force" | "drop";

interface ConceptPlaygroundProps {
  type: PlaygroundType;
  title?: string;
  className?: string;
}

export default function ConceptPlayground({
  type,
  title,
  className = "",
}: ConceptPlaygroundProps) {
  const [played, setPlayed] = useState(false);
  const gamification = useGamification();

  const onPlay = useCallback(() => {
    if (!played) {
      setPlayed(true);
      gamification?.addXP(XP_PER_PLAYGROUND);
      gamification?.awardBadge("explorer");
    }
  }, [played, gamification]);

  if (type === "force") {
    return (
      <ForcePlayground
        title={title ?? "Force & Motion Playground"}
        onPlay={onPlay}
        className={className}
      />
    );
  }

  if (type === "drop") {
    return (
      <DropPlayground
        title={title ?? "Which falls faster?"}
        onPlay={onPlay}
        className={className}
      />
    );
  }

  return null;
}

function ForcePlayground({
  title,
  onPlay,
  className,
}: {
  title: string;
  onPlay: () => void;
  className: string;
}) {
  const [force, setForce] = useState(50);
  const [weight, setWeight] = useState(50);
  const [position, setPosition] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const handleApplyForce = () => {
    const move = Math.round((force / 100) * 20 - (weight / 100) * 8);
    setPosition((p) => Math.max(0, Math.min(200, p + move)));
    setHasMoved(true);
    onPlay();
  };

  return (
    <div
      className={`rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 ${className}`}
    >
      <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-800">
        <span>🧪</span> {title}
      </h3>
      <p className="mb-4 text-sm text-slate-600">
        Change force and weight, then click &quot;Apply force&quot; to see the box move. Kids love sliders!
      </p>

      <div className="mb-4">
        <label className="mb-1 block text-xs font-semibold text-slate-600">
          Force: {force}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={force}
          onChange={(e) => setForce(Number(e.target.value))}
          className="h-2 w-full accent-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="mb-1 block text-xs font-semibold text-slate-600">
          Weight: {weight}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="h-2 w-full accent-amber-500"
        />
      </div>

      <div className="relative mb-4 h-14 rounded-xl bg-slate-200">
        <div
          className="absolute bottom-2 h-10 w-12 rounded-lg bg-blue-500 shadow-md transition-all duration-300"
          style={{ left: `${12 + position}px` }}
        />
      </div>

      <button
        type="button"
        onClick={handleApplyForce}
        className="w-full rounded-xl bg-blue-500 py-2.5 font-semibold text-white shadow transition hover:bg-blue-600"
      >
        Apply force →
      </button>
      {hasMoved && (
        <p className="mt-2 text-center text-xs text-emerald-600">
          ✓ More force → more motion. Heavier weight → less motion.
        </p>
      )}
    </div>
  );
}

function DropPlayground({
  title,
  onPlay,
  className,
}: {
  title: string;
  onPlay: () => void;
  className: string;
}) {
  const [dropped, setDropped] = useState(false);

  const handleDrop = () => {
    setDropped(true);
    onPlay();
  };

  return (
    <div
      className={`rounded-2xl border-2 border-amber-200 bg-gradient-to-b from-amber-50 to-orange-50 p-5 ${className}`}
    >
      <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-slate-800">
        <span>🪨</span> {title}
      </h3>
      <p className="mb-4 text-sm text-slate-600">
        In a vacuum, which falls faster? Tap &quot;Drop&quot; to see!
      </p>

      <div className="mb-4 flex justify-around">
        <div className="text-center">
          <div className="text-4xl">🪶</div>
          <p className="text-xs font-medium text-slate-600">Feather</p>
        </div>
        <div className="text-4xl">vs</div>
        <div className="text-center">
          <div className="text-4xl">🪨</div>
          <p className="text-xs font-medium text-slate-600">Stone</p>
        </div>
      </div>

      {!dropped ? (
        <button
          type="button"
          onClick={handleDrop}
          className="w-full rounded-xl bg-amber-500 py-2.5 font-semibold text-white shadow transition hover:bg-amber-600"
        >
          Drop both
        </button>
      ) : (
        <div className="animate-[fadeIn_0.6s_ease-out] rounded-xl bg-emerald-100 p-3 text-center">
          <p className="font-semibold text-emerald-800">Surprise!</p>
          <p className="mt-1 text-sm text-emerald-700">
            In vacuum, both fall at the same rate. Air resistance slows the feather in air.
          </p>
        </div>
      )}
    </div>
  );
}
