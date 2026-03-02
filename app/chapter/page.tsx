import Link from "next/link";
import Navbar from "@/components/Navbar";

const PHYSICS_CHAPTERS = [
  { slug: "exploring-magnets", name: "Exploring Magnets", pageRange: "03–34" },
  { slug: "measurement-of-length-and-motion", name: "Measurement of Length and Motion", pageRange: "35–67" },
  { slug: "temperature-and-its-measurement", name: "Temperature and Its Measurement", pageRange: "68–101" },
  { slug: "beyond-earth", name: "Beyond Earth", pageRange: "102–134" },
];

export default function ChapterPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-2xl px-4 py-8 sm:py-10">
        <h1 className="animate-fade-in text-2xl font-bold text-slate-800 sm:text-3xl">
          Lesson Map
        </h1>
        <p className="mt-1 animate-fade-in text-slate-600" style={{ animationDelay: "0.1s" }}>
          Science: Physics, Chemistry & Biology. Pick a chapter to start.
        </p>

        {/* Physics */}
        <section className="mt-8">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-800">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-sm font-bold text-white shadow-md">
              1
            </span>
            Physics
          </h2>
          <ul className="space-y-3">
            {PHYSICS_CHAPTERS.map((ch, i) => (
              <li
                key={ch.slug}
                className="animate-slide-up opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: `${0.15 + i * 0.08}s` }}
              >
                <Link
                  href={`/chapter/science/physics/${ch.slug}`}
                  className="card-interactive block"
                >
                  <span className="mb-1 inline-flex rounded-lg bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                    Ch. {i + 1} · Pages {ch.pageRange}
                  </span>
                  <p className="mt-2 font-semibold text-slate-800">
                    {ch.name}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                    Open
                    <span>→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Chemistry */}
        <section className="mt-10">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-800">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-sm font-bold text-amber-700">
              2
            </span>
            Chemistry
          </h2>
          <div className="rounded-2xl border border-slate-200/80 border-dashed bg-slate-50/80 p-6 text-center">
            <p className="text-sm text-slate-500">Chapters coming soon.</p>
          </div>
        </section>

        {/* Biology */}
        <section className="mt-10">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-800">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-sm font-bold text-emerald-700">
              3
            </span>
            Biology
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/chapter/class-6/science/components-of-food"
                className="card-interactive block"
              >
                <span className="mb-1 inline-flex rounded-lg bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                  Class 6
                </span>
                <p className="mt-2 font-semibold text-slate-800">
                  Components of Food
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  7 topics — nutrients, balanced diet, deficiency diseases
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                  Open
                  <span>→</span>
                </span>
              </Link>
            </li>
          </ul>
        </section>

        <p className="mt-10">
          <Link
            href="/"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
          >
            ← Back to home
          </Link>
        </p>
      </main>
    </>
  );
}
