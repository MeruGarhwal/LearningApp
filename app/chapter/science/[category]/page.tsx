import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const PHYSICS_CHAPTERS = [
  { slug: "exploring-magnets", name: "Exploring Magnets", pageRange: "03–34" },
  { slug: "measurement-of-length-and-motion", name: "Measurement of Length and Motion", pageRange: "35–67" },
  { slug: "temperature-and-its-measurement", name: "Temperature and Its Measurement", pageRange: "68–101" },
  { slug: "beyond-earth", name: "Beyond Earth", pageRange: "102–134" },
];

const CATEGORY_CONFIG: Record<
  string,
  {
    name: string;
    welcomeTitle: string;
    welcomeMessage: string;
    content: string[];
    image: string;
    imageAlt: string;
    bgOverlay: string;
    chapters: { slug: string; name: string; pageRange: string }[];
    emptyMessage?: string;
  }
> = {
  physics: {
    name: "Physics",
    welcomeTitle: "Hi! Welcome to Physics",
    welcomeMessage: "Explore how things move, attract, and change. You’ll learn about magnets, motion, temperature, and what lies beyond Earth.",
    content: [
      "Physics helps us understand the world around us — from the pull of a magnet to the motion of the Moon. In this section you’ll do short lessons, quick quizzes, and clear experiments.",
      "Each chapter has topics with videos, simple explanations, and a chance to ask doubts. Take your time and enjoy learning.",
    ],
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=1200&q=80",
    imageAlt: "Physics experiment and lab",
    bgOverlay: "bg-gradient-to-b from-slate-900/75 via-slate-900/60 to-slate-900/90",
    chapters: PHYSICS_CHAPTERS,
  },
  biology: {
    name: "Biology",
    welcomeTitle: "Hi! Welcome to Biology",
    welcomeMessage: "Discover the living world — what we eat, how our body uses food, and how to stay healthy.",
    content: [
      "Biology is the study of living things. Here you’ll learn about nutrients, balanced diet, and how our body works.",
      "Start with the chapter below. Each topic has explanations, quizzes, and you can ask doubts anytime.",
    ],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80",
    imageAlt: "Biology and nature",
    bgOverlay: "bg-gradient-to-b from-emerald-900/75 via-emerald-900/60 to-emerald-900/90",
    chapters: [
      { slug: "components-of-food", name: "Components of Food", pageRange: "Class 6" },
    ],
  },
  chemistry: {
    name: "Chemistry",
    welcomeTitle: "Hi! Welcome to Chemistry",
    welcomeMessage: "Chemistry is the science of matter and how it changes. New chapters are coming soon.",
    content: [
      "Here you’ll soon explore atoms, reactions, and everyday chemistry. We’re preparing lessons on topics like matter, acids and bases, and more.",
      "Check back later or explore Physics and Biology while you wait.",
    ],
    image: "https://images.unsplash.com/photo-1603126857599-6bfe72923633?w=1200&q=80",
    imageAlt: "Chemistry lab and beakers",
    bgOverlay: "bg-gradient-to-b from-amber-900/75 via-amber-900/60 to-amber-900/90",
    chapters: [],
    emptyMessage: "Chapters coming soon.",
  },
};

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function ScienceCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const config = CATEGORY_CONFIG[category];

  if (!config) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-2xl px-4 py-10">
          <p className="text-slate-600">Category not found.</p>
          <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
            ← Back to home
          </Link>
        </main>
      </>
    );
  }

  const isBiology = category === "biology";

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-57px)]">
        {/* Themed background with image */}
        <section className="relative min-h-[320px] overflow-hidden sm:min-h-[380px]">
          <Image
            src={config.image}
            alt={config.imageAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className={`absolute inset-0 ${config.bgOverlay}`} />
          <div className="relative flex min-h-[320px] flex-col justify-end px-4 pb-8 pt-16 sm:min-h-[380px] sm:px-6 sm:pb-10">
            <p className="text-sm font-medium uppercase tracking-wide text-white/90">
              Science · {config.name}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-white drop-shadow-md sm:text-4xl">
              {config.welcomeTitle}
            </h1>
            <p className="mt-3 max-w-xl text-lg text-white/95">
              {config.welcomeMessage}
            </p>
          </div>
        </section>

        {/* Intro content */}
        <section className="mx-auto max-w-2xl px-4 py-8 sm:py-10">
          <div className="space-y-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card">
            {config.content.map((paragraph, i) => (
              <p key={i} className="text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Chapters list */}
        <section className="mx-auto max-w-2xl px-4 pb-16">
          <h2 className="mb-4 text-xl font-semibold text-slate-800">
            Chapters
          </h2>
          {config.chapters.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 p-8 text-center">
              <p className="text-slate-500">{config.emptyMessage}</p>
              <Link
                href="/"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                ← Back to home
              </Link>
            </div>
          ) : (
            <ul className="space-y-3">
              {config.chapters.map((ch, i) => (
                <li key={ch.slug}>
                  <Link
                    href={
                      isBiology && ch.slug === "components-of-food"
                        ? "/chapter/class-6/science/components-of-food"
                        : `/chapter/science/physics/${ch.slug}`
                    }
                    className="card-interactive block"
                  >
                    <span className="mb-1 inline-flex rounded-lg bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                      Ch. {i + 1} · {ch.pageRange}
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
          )}

          <p className="mt-10">
            <Link
              href="/"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
            >
              ← Back to home
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
