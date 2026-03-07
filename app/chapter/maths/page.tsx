import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function MathsPage() {
  return (
    <>
      <Navbar subtitle="Maths" />
      <main className="mx-auto max-w-lg px-4 py-16 text-center">
        <span className="text-6xl" aria-hidden>📐</span>
        <h1 className="mt-4 text-2xl font-bold text-slate-800">Maths</h1>
        <p className="mt-2 text-slate-600">
          Interactive maths lessons are coming soon. Check back later!
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to subjects
        </Link>
      </main>
    </>
  );
}
