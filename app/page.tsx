import Link from "next/link";
import Navbar from "@/components/Navbar";

const SUBJECTS = [
  {
    id: "science",
    name: "Science",
    description: "Master the fundamentals of science with interactive lessons.",
    href: "/chapter/science",
    icon: "🔬",
    available: true,
  },
  {
    id: "maths",
    name: "Maths",
    description: "Master the fundamentals of maths with interactive lessons.",
    href: "/chapter/maths",
    icon: "📐",
    available: false,
  },
  {
    id: "english",
    name: "English",
    description: "Master the fundamentals of english with interactive lessons.",
    href: "/chapter/english",
    icon: "📖",
    available: false,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-57px)]">
        <section className="mx-auto max-w-3xl px-4 py-16 sm:py-24 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Welcome to Your Learning Adventure
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Choose a subject to start exploring interactive chapters and master your school curriculum.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-20">
          <div className="grid gap-6 sm:grid-cols-3">
            {SUBJECTS.map((subject) => (
              <div
                key={subject.id}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-4xl" aria-hidden>{subject.icon}</span>
                <h2 className="mt-4 text-xl font-semibold text-slate-800">
                  {subject.name}
                </h2>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  {subject.description}
                </p>
                {subject.available ? (
                  <Link
                    href={subject.href}
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
                  >
                    Start Learning
                  </Link>
                ) : (
                  <Link
                    href={subject.href}
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-100 px-5 py-3 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-200"
                  >
                    Coming soon
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
