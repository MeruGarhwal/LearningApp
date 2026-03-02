"use client";

import { useState } from "react";

interface ConceptCardProps {
  title: string;
  summary: string;
  detail: string;
  emoji?: string;
  className?: string;
}

export default function ConceptCard({
  title,
  summary,
  detail,
  emoji = "📌",
  className = "",
}: ConceptCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`rounded-2xl border-2 border-slate-200 bg-white p-4 shadow-card transition-all hover:border-blue-200 ${className}`}
    >
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="flex w-full items-start gap-3 text-left"
      >
        <span className="text-2xl">{emoji}</span>
        <div className="flex-1">
          <h4 className="font-semibold text-slate-800">{title}</h4>
          <p className="mt-0.5 text-sm text-slate-600">{summary}</p>
          {expanded && (
            <p className="mt-2 animate-fade-in text-sm text-slate-700">
              {detail}
            </p>
          )}
        </div>
        <span className="text-slate-400">{expanded ? "▲" : "▼"}</span>
      </button>
    </div>
  );
}
