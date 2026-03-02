"use client";

import { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";

interface ChapterHookProps {
  title: string;
  thinkQuestions: string[];
  videoTitle?: string;
}

export default function ChapterHook({
  title,
  thinkQuestions,
  videoTitle = "Chapter intro",
}: ChapterHookProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="animate-fade-in rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card opacity-0 [animation-fill-mode:forwards]">
      <h2 className="text-xl font-bold text-slate-800">{title}</h2>

      <div className="mt-6">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-600">
          Let&apos;s think
        </p>
        <ul className="space-y-2">
          {thinkQuestions.map((q, i) => (
            <li
              key={i}
              className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-slate-700 transition-colors hover:bg-blue-50/50"
            >
              <span className="text-lg">💭</span>
              <span>{q}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
          Chapter hook
        </p>
        <div
          className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 ring-2 ring-blue-200/50"
          onClick={() => setPlaying(true)}
        >
          {!playing ? (
            <div className="flex aspect-video cursor-pointer flex-col items-center justify-center gap-2 text-blue-700">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-4xl shadow-lg transition-transform hover:scale-110">
                ▶
              </span>
              <span className="text-sm font-semibold">{videoTitle}</span>
            </div>
          ) : (
            <VideoPlayer
              title={videoTitle}
              className="rounded-none"
            />
          )}
        </div>
      </div>
    </section>
  );
}
