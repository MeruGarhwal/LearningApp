import Navbar from "@/components/Navbar";
import SubjectCategorySelector from "@/components/SubjectCategorySelector";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-57px)]">
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 px-4 py-12 sm:py-16">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-80" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h1 className="animate-fade-in text-3xl font-bold tracking-tight text-white drop-shadow-sm sm:text-4xl">
              Learn with clarity
            </h1>
            <p className="mt-3 animate-slide-up text-base text-blue-100 sm:text-lg">
              Select your subject and category to explore chapters.
            </p>
          </div>
        </section>

        <SubjectCategorySelector />

        <section className="mx-auto max-w-4xl px-4 pb-16 pt-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 text-center shadow-card">
              <span className="text-2xl">📖</span>
              <h3 className="mt-2 font-semibold text-slate-800">Topics</h3>
              <p className="mt-1 text-sm text-slate-600">Clear explanations</p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 text-center shadow-card">
              <span className="text-2xl">✓</span>
              <h3 className="mt-2 font-semibold text-slate-800">Quizzes</h3>
              <p className="mt-1 text-sm text-slate-600">Instant feedback</p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 text-center shadow-card">
              <span className="text-2xl">💬</span>
              <h3 className="mt-2 font-semibold text-slate-800">Ask doubts</h3>
              <p className="mt-1 text-sm text-slate-600">Get help when stuck</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
