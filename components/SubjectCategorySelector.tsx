"use client";

import { useState } from "react";
import Link from "next/link";

const SUBJECTS = [{ id: "science", name: "Science", icon: "🔬" }];

const CATEGORIES = [
  { id: "physics", name: "Physics", icon: "⚛️", desc: "Magnets, motion, temperature & beyond" },
  { id: "chemistry", name: "Chemistry", icon: "🧪", desc: "Coming soon" },
  { id: "biology", name: "Biology", icon: "🌿", desc: "Living world, food & health" },
];

export default function SubjectCategorySelector() {
  const [subject, setSubject] = useState<string | null>("science");
  const [category, setCategory] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
      <h2 className="text-center text-xl font-semibold text-slate-700">
        Choose your subject
      </h2>
      <div className="mt-6 flex justify-center gap-3">
        {SUBJECTS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => {
              setSubject(s.id);
              setCategory(null);
            }}
            className={`flex items-center gap-2 rounded-2xl border-2 px-6 py-3.5 text-base font-semibold transition-all ${
              subject === s.id
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
            }`}
          >
            <span className="text-2xl">{s.icon}</span>
            {s.name}
          </button>
        ))}
      </div>

      {subject && (
        <>
          <h2 className="mt-10 text-center text-xl font-semibold text-slate-700">
            Now pick a category
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                className={`rounded-2xl border-2 p-5 text-left transition-all ${
                  category === c.id
                    ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/30"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span className="text-3xl">{c.icon}</span>
                <p className="mt-2 font-semibold text-slate-800">{c.name}</p>
                <p className="mt-1 text-sm text-slate-500">{c.desc}</p>
              </button>
            ))}
          </div>

          {category && (
            <div className="mt-10 flex justify-center">
              <Link
                href={`/chapter/science/${category}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl active:scale-[0.98]"
              >
                Explore chapters
                <span>→</span>
              </Link>
            </div>
          )}
        </>
      )}
    </section>
  );
}
