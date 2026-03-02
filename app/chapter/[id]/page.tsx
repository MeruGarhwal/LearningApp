import Link from "next/link";
import Navbar from "@/components/Navbar";
import VideoPlayer from "@/components/VideoPlayer";
import Quiz from "@/components/Quiz";
import DoubtBox from "@/components/DoubtBox";
import type { QuizQuestion } from "@/lib/types";

const SAMPLE_QUIZ: QuizQuestion[] = [
  {
    id: "q1",
    question: "What is the main concept in this chapter?",
    options: [
      { id: "a", label: "Option A", correct: false },
      { id: "b", label: "Option B", correct: true },
      { id: "c", label: "Option C", correct: false },
    ],
    explanation: "Option B is the correct answer for this chapter.",
  },
  {
    id: "q2",
    question: "Which statement is true?",
    options: [
      { id: "a", label: "First choice", correct: false },
      { id: "b", label: "Second choice", correct: true },
      { id: "c", label: "Third choice", correct: false },
    ],
    explanation: "The second choice is correct.",
  },
  {
    id: "q3",
    question: "Select the best answer.",
    options: [
      { id: "a", label: "A", correct: false },
      { id: "b", label: "B", correct: true },
      { id: "c", label: "C", correct: false },
    ],
    explanation: "B is the best answer.",
  },
  {
    id: "q4",
    question: "Which option completes the sentence correctly?",
    options: [
      { id: "a", label: "Option 1", correct: false },
      { id: "b", label: "Option 2", correct: true },
      { id: "c", label: "Option 3", correct: false },
    ],
    explanation: "Option 2 completes it correctly.",
  },
  {
    id: "q5",
    question: "What does this chapter emphasise?",
    options: [
      { id: "a", label: "Concept A", correct: false },
      { id: "b", label: "Concept B", correct: true },
      { id: "c", label: "Concept C", correct: false },
    ],
    explanation: "The chapter emphasises Concept B.",
  },
];

interface ChapterPageProps {
  params: Promise<{ id: string }>;
}

export default async function ChapterDetailPage({ params }: ChapterPageProps) {
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
          <span className="text-slate-700">Chapter {id}</span>
        </nav>
        <h1 className="text-2xl font-bold text-slate-800">Chapter {id}</h1>
        <p className="mt-1 text-slate-600">Introduction and quiz.</p>
        <div className="mt-8 space-y-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-card">
            <VideoPlayer title={`Chapter ${id} – Introduction`} topicId={id} />
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-card">
            <Quiz questions={SAMPLE_QUIZ} topicId={id} />
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5">
            <p className="mb-2 text-sm font-semibold text-slate-700">Have a doubt?</p>
            <DoubtBox />
          </div>
        </div>
        <p className="mt-8">
          <Link
            href="/chapter"
            className="text-sm font-medium text-brand-600 hover:text-brand-700 hover:underline"
          >
            ← Back to chapters
          </Link>
        </p>
      </main>
    </>
  );
}
