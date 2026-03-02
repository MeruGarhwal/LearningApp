"use client";

import { useState } from "react";

interface DoubtBoxProps {
  placeholder?: string;
  onSubmit?: (text: string) => void;
  className?: string;
}

export default function DoubtBox({
  placeholder = "Ask a doubt...",
  onSubmit,
  className = "",
}: DoubtBoxProps) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [answer, setAnswer] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;

    setError(null);
    setAnswer(null);
    setLoading(true);

    try {
      const res = await fetch("/api/ask-doubt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg = data?.error ?? "Something went wrong. Please try again.";
        setError(msg);
        return;
      }

      if (typeof data?.answer === "string") {
        setAnswer(data.answer);
        setValue("");
        onSubmit?.(trimmed);
      } else {
        setError("No answer received. Please try again.");
      }
    } catch {
      setError("Could not reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (error) setError(null);
              if (answer) setAnswer(null);
            }}
            placeholder={placeholder}
            disabled={loading}
            className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 disabled:opacity-60 disabled:bg-slate-50"
          />
          <button
            type="submit"
            disabled={loading || !value.trim()}
            className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-brand-600 transition-colors disabled:opacity-50 disabled:pointer-events-none"
          >
            {loading ? "..." : "Ask"}
          </button>
        </div>
      </form>

      {loading && (
        <p className="mt-2 text-sm text-slate-500">Getting an explanation...</p>
      )}

      {error && (
        <div className="mt-3 rounded-xl border border-rose-200 bg-rose-50 p-3">
          <p className="text-sm text-rose-700">{error}</p>
        </div>
      )}

      {answer && !loading && (
        <div className="mt-3 rounded-xl border border-brand-200 bg-brand-50/80 p-4">
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">Explanation</p>
          <p className="text-sm text-slate-800 whitespace-pre-wrap">{answer}</p>
        </div>
      )}
    </div>
  );
}
