import Link from "next/link";
import Navbar from "@/components/Navbar";
import VideoPlayer from "@/components/VideoPlayer";

interface TopicPageProps {
  params: Promise<{ id: string }>;
}

export default async function TopicDetailPage({ params }: TopicPageProps) {
  const { id } = await params;
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-2xl px-4 py-8 sm:py-10">
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/chapter" className="hover:text-brand-600">
            Chapters
          </Link>
          <span>→</span>
          <Link href="/chapter/class-6/science/components-of-food" className="hover:text-brand-600">
            Components of Food
          </Link>
          <span>→</span>
          <span className="text-slate-700">Topic {id}</span>
        </nav>
        <h1 className="text-2xl font-bold text-slate-800">Topic {id}</h1>
        <p className="mt-1 text-slate-600">Watch and learn.</p>
        <div className="mt-8 space-y-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-card">
            <VideoPlayer title={`Topic ${id}`} topicId={id} />
          </div>
        </div>
        <p className="mt-8">
          <Link
            href="/chapter/class-6/science/components-of-food"
            className="text-sm font-medium text-brand-600 hover:text-brand-700 hover:underline"
          >
            ← Back to chapter
          </Link>
        </p>
      </main>
    </>
  );
}
