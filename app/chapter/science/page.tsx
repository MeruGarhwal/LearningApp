import Link from "next/link";
import Navbar from "@/components/Navbar";

const CATEGORIES = [
  {
    id: "physics",
    name: "Physics",
    description: "Magnets, motion, temperature and beyond Earth.",
    href: "/chapter/science/physics",
    icon: "⚛️",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    description: "Matter, reactions and everyday chemistry.",
    href: "/chapter/science/chemistry",
    icon: "🧪",
    comingSoon: true,
  },
  {
    id: "biology",
    name: "Biology",
    description: "Living world, food, nutrients and health.",
    href: "/chapter/science/biology",
    icon: "🌿",
  },
];

export default function SciencePage() {
  return (
    <>
      <Navbar subtitle="Science" />
      <main className="min-h-[calc(100vh-57px)]">
        <section className="mx-auto max-w-3xl px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            Science
          </h1>
          <p className="mt-2 text-slate-600">
            Choose a category to explore chapters and topics.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-20">
          <div className="grid gap-6 sm:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-4xl" aria-hidden>{cat.icon}</span>
                <h2 className="mt-4 text-xl font-semibold text-slate-800">
                  {cat.name}
                </h2>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  {cat.description}
                </p>
                {"comingSoon" in cat && cat.comingSoon ? (
                  <span className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-100 px-5 py-3 text-sm font-medium text-slate-500">
                    Coming soon
                  </span>
                ) : (
                  <Link
                    href={cat.href}
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
                  >
                    Start Learning
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <p className="mx-auto max-w-4xl px-4 pb-10 text-center">
          <Link href="/" className="text-sm font-medium text-blue-600 hover:underline">
            ← Back to subjects
          </Link>
        </p>
      </main>
    </>
  );
}
