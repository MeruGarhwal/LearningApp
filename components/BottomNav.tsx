"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();
  const isChapter = pathname?.startsWith("/chapter") && pathname !== "/chapter";

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/80 bg-white/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex max-w-lg items-center justify-around px-4 py-3">
        <Link
          href="/chapter"
          className={`flex flex-col items-center gap-1 rounded-xl px-5 py-2 transition-all ${
            pathname === "/chapter" ? "text-blue-600" : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <span className="text-xl">🗺️</span>
          <span className="text-xs font-semibold">Lesson Map</span>
        </Link>
        <Link
          href={isChapter ? `${pathname}#quiz` : "/chapter"}
          className="flex flex-col items-center gap-1 rounded-xl px-5 py-2 text-slate-500 transition-all hover:text-slate-700"
        >
          <span className="text-xl">✓</span>
          <span className="text-xs font-semibold">Quiz</span>
        </Link>
        <Link
          href="/"
          className="flex flex-col items-center gap-1 rounded-xl px-5 py-2 text-slate-500 transition-all hover:text-slate-700"
        >
          <span className="text-xl">⚙️</span>
          <span className="text-xs font-semibold">Home</span>
        </Link>
      </div>
    </nav>
  );
}
