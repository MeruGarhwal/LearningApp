import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-57px)]">
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 px-4 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-80" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl">
              Learn with clarity
            </h1>
            <p className="mt-4 animate-slide-up text-lg text-blue-100 sm:text-xl">
              Simple explanations, quizzes, and practice — made for students. No login required.
            </p>
            <div className="mt-10 animate-slide-up">
              <Link
                href="/chapter"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-blue-700 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl active:scale-[0.98]"
              >
                Explore chapters
                <span className="text-blue-500">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
          <h2 className="text-center text-xl font-semibold text-slate-700">
            What you’ll find here
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div
              className="animate-slide-up rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-card opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl transition-transform hover:scale-110">
                📖
              </div>
              <h3 className="font-semibold text-slate-800">Topics</h3>
              <p className="mt-1 text-sm text-slate-600">
                Bite-sized lessons with clear explanations
              </p>
            </div>
            <div
              className="animate-slide-up rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-card opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-3xl transition-transform hover:scale-110">
                ✓
              </div>
              <h3 className="font-semibold text-slate-800">Quizzes</h3>
              <p className="mt-1 text-sm text-slate-600">
                Check your understanding with instant feedback
              </p>
            </div>
            <div
              className="animate-slide-up rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-card opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-3xl transition-transform hover:scale-110">
                💬
              </div>
              <h3 className="font-semibold text-slate-800">Ask doubts</h3>
              <p className="mt-1 text-sm text-slate-600">
                Get simple answers when you’re stuck
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/chapter" className="btn-primary">
              Start learning
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
