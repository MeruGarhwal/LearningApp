"use client";

import Link from "next/link";
import ProgressRing from "@/components/ProgressRing";

interface NavbarProps {
  progress?: number;
  subtitle?: string;
}

export default function Navbar({ progress = 0, subtitle }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-soft">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-blue-600 transition-colors hover:text-blue-700"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md">
            ✦
          </span>
          <span>
            Concept Clarity
            {subtitle && (
              <span className="ml-1 block text-xs font-normal text-slate-500">
                {subtitle}
              </span>
            )}
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/chapter"
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
          >
            Lesson Map
          </Link>
          <div className="flex items-center justify-center">
            <ProgressRing value={progress} size={40} strokeWidth={3} />
          </div>
        </div>
      </div>
    </nav>
  );
}
