import Link from "next/link";
import Navbar from "@/components/Navbar";
import VideoPlayer from "@/components/VideoPlayer";
import Quiz from "@/components/Quiz";
import DoubtBox from "@/components/DoubtBox";
import ChapterHook from "@/components/ChapterHook";
import ConceptMap from "@/components/ConceptMap";
import type { QuizQuestion } from "@/lib/types";

const PHYSICS_CHAPTERS: Record<
  string,
  {
    name: string;
    pageRange: string;
    thinkQuestions: string[];
    topics: { id: number; title: string; explanation: string; quiz: QuizQuestion[] }[];
  }
> = {
  "exploring-magnets": {
    name: "Exploring Magnets",
    pageRange: "03–34",
    thinkQuestions: [
      "What things in your home stick to a magnet?",
      "Can a magnet work through paper or water?",
      "Why do magnets have North and South poles?",
    ],
    topics: [
      { id: 1, title: "What is a magnet?", explanation: "A magnet is a material that attracts certain metals like iron and can push or pull other magnets. Magnets have two ends called poles: North and South.", quiz: [
      { id: "q1", question: "Which of these is attracted to a magnet?", options: [{ id: "a", label: "Wood", correct: false }, { id: "b", label: "Iron", correct: true }, { id: "c", label: "Plastic", correct: false }], explanation: "Iron is a magnetic material." },
      { id: "q2", question: "What happens when two North poles are brought close?", options: [{ id: "a", label: "They attract", correct: false }, { id: "b", label: "They repel", correct: true }, { id: "c", label: "Nothing", correct: false }], explanation: "Like poles repel each other." },
      { id: "q3", question: "A magnet has how many poles?", options: [{ id: "a", label: "One", correct: false }, { id: "b", label: "Two (North and South)", correct: true }, { id: "c", label: "Three", correct: false }], explanation: "Every magnet has a North and a South pole." },
      { id: "q4", question: "Which is a non-magnetic material?", options: [{ id: "a", label: "Iron", correct: false }, { id: "b", label: "Nickel", correct: false }, { id: "c", label: "Paper", correct: true }], explanation: "Paper is not attracted to magnets." },
      { id: "q5", question: "North and South poles of two magnets:", options: [{ id: "a", label: "Repel each other", correct: false }, { id: "b", label: "Attract each other", correct: true }, { id: "c", label: "Do nothing", correct: false }], explanation: "Unlike poles attract." },
    ] },
      { id: 2, title: "Magnetic and non-magnetic materials", explanation: "Materials that are attracted to a magnet (e.g. iron, nickel) are magnetic. Materials like wood, plastic, and paper are non-magnetic.", quiz: [
      { id: "q1", question: "Which material is magnetic?", options: [{ id: "a", label: "Plastic", correct: false }, { id: "b", label: "Iron", correct: true }, { id: "c", label: "Wood", correct: false }], explanation: "Iron is attracted to magnets." },
      { id: "q2", question: "Which is non-magnetic?", options: [{ id: "a", label: "Nickel", correct: false }, { id: "b", label: "Paper", correct: true }, { id: "c", label: "Cobalt", correct: false }], explanation: "Paper is not attracted to magnets." },
      { id: "q3", question: "Magnets attract:", options: [{ id: "a", label: "All metals", correct: false }, { id: "b", label: "Some metals like iron", correct: true }, { id: "c", label: "Only wood", correct: false }], explanation: "Only certain metals are magnetic." },
      { id: "q4", question: "Which will stick to a magnet?", options: [{ id: "a", label: "Aluminium foil", correct: false }, { id: "b", label: "Iron nail", correct: true }, { id: "c", label: "Copper wire", correct: false }], explanation: "Iron is magnetic." },
      { id: "q5", question: "Rubber is:", options: [{ id: "a", label: "Magnetic", correct: false }, { id: "b", label: "Non-magnetic", correct: true }, { id: "c", label: "A metal", correct: false }], explanation: "Rubber is not attracted to magnets." },
    ] },
      { id: 3, title: "Poles of a magnet", explanation: "Every magnet has a North pole and a South pole. Like poles repel; unlike poles attract.", quiz: [
      { id: "q1", question: "How many poles does a magnet have?", options: [{ id: "a", label: "One", correct: false }, { id: "b", label: "Two", correct: true }, { id: "c", label: "Three", correct: false }], explanation: "North and South." },
      { id: "q2", question: "Like poles (e.g. North and North):", options: [{ id: "a", label: "Attract", correct: false }, { id: "b", label: "Repel", correct: true }, { id: "c", label: "Merge", correct: false }], explanation: "Like poles repel." },
      { id: "q3", question: "North and South poles:", options: [{ id: "a", label: "Repel", correct: false }, { id: "b", label: "Attract", correct: true }, { id: "c", label: "Ignore", correct: false }], explanation: "Unlike poles attract." },
      { id: "q4", question: "The two ends of a magnet are called:", options: [{ id: "a", label: "Tips", correct: false }, { id: "b", label: "Poles", correct: true }, { id: "c", label: "Sides", correct: false }], explanation: "North pole and South pole." },
      { id: "q5", question: "If you break a magnet, each piece has:", options: [{ id: "a", label: "No poles", correct: false }, { id: "b", label: "North and South poles", correct: true }, { id: "c", label: "Only North", correct: false }], explanation: "Each piece is still a magnet with two poles." },
    ] },
    ],
  },
  "measurement-of-length-and-motion": {
    name: "Measurement of Length and Motion",
    pageRange: "35–67",
    thinkQuestions: [
      "How do we measure the length of a curved line?",
      "What is the difference between distance and displacement?",
      "How can we tell who runs faster in a race?",
    ],
    topics: [
      { id: 1, title: "Measuring length", explanation: "Length is how long or short something is. We measure it using rulers, metre scales, or tape. The SI unit of length is the metre (m).", quiz: [
      { id: "q1", question: "The SI unit of length is:", options: [{ id: "a", label: "Kilogram", correct: false }, { id: "b", label: "Metre", correct: true }, { id: "c", label: "Second", correct: false }], explanation: "Metre (m) is the unit of length." },
      { id: "q2", question: "An object is in motion when:", options: [{ id: "a", label: "It does not move", correct: false }, { id: "b", label: "Its position changes with time", correct: true }, { id: "c", label: "It is heavy", correct: false }], explanation: "Motion means change of position with time." },
      { id: "q3", question: "Speed is calculated as:", options: [{ id: "a", label: "Time ÷ Distance", correct: false }, { id: "b", label: "Distance ÷ Time", correct: true }, { id: "c", label: "Distance × Time", correct: false }], explanation: "Speed = Distance / Time." },
      { id: "q4", question: "Which tool is used to measure length?", options: [{ id: "a", label: "Clock", correct: false }, { id: "b", label: "Ruler", correct: true }, { id: "c", label: "Thermometer", correct: false }], explanation: "Rulers and tape measures are used for length." },
      { id: "q5", question: "Motion in a straight line is called:", options: [{ id: "a", label: "Circular motion", correct: false }, { id: "b", label: "Rectilinear motion", correct: true }, { id: "c", label: "No motion", correct: false }], explanation: "Rectilinear motion is along a straight line." },
    ] },
      { id: 2, title: "Motion", explanation: "When an object changes its position with time, it is in motion. Motion can be in a straight line (rectilinear) or along a curve.", quiz: [
      { id: "q1", question: "An object in motion:", options: [{ id: "a", label: "Stays at the same place", correct: false }, { id: "b", label: "Changes position with time", correct: true }, { id: "c", label: "Has no speed", correct: false }], explanation: "Motion means change of position." },
      { id: "q2", question: "Rectilinear motion is along a:", options: [{ id: "a", label: "Circle", correct: false }, { id: "b", label: "Straight line", correct: true }, { id: "c", label: "Curve only", correct: false }], explanation: "Rectilinear = straight line." },
      { id: "q3", question: "To describe motion we need:", options: [{ id: "a", label: "Only distance", correct: false }, { id: "b", label: "Distance and time", correct: true }, { id: "c", label: "Only colour", correct: false }], explanation: "Distance and time help describe motion." },
      { id: "q4", question: "A car moving on a straight road has:", options: [{ id: "a", label: "Circular motion", correct: false }, { id: "b", label: "Rectilinear motion", correct: true }, { id: "c", label: "No motion", correct: false }], explanation: "Straight road = rectilinear motion." },
      { id: "q5", question: "Motion is the change of:", options: [{ id: "a", label: "Colour", correct: false }, { id: "b", label: "Position with time", correct: true }, { id: "c", label: "Shape only", correct: false }], explanation: "Motion is change of position over time." },
    ] },
      { id: 3, title: "Speed", explanation: "Speed tells us how fast something moves. It is the distance covered in a given time. Speed = Distance ÷ Time.", quiz: [
      { id: "q1", question: "Speed = ", options: [{ id: "a", label: "Time ÷ Distance", correct: false }, { id: "b", label: "Distance ÷ Time", correct: true }, { id: "c", label: "Distance × Time", correct: false }], explanation: "Speed = Distance / Time." },
      { id: "q2", question: "Faster motion means:", options: [{ id: "a", label: "Less distance in same time", correct: false }, { id: "b", label: "More distance in same time", correct: true }, { id: "c", label: "No distance", correct: false }], explanation: "Faster = more distance in same time." },
      { id: "q3", question: "Unit of speed can be:", options: [{ id: "a", label: "metre/second", correct: true }, { id: "b", label: "metre only", correct: false }, { id: "c", label: "second only", correct: false }], explanation: "Speed is distance per unit time, e.g. m/s." },
      { id: "q4", question: "If a car covers 100 m in 10 s, its speed is:", options: [{ id: "a", label: "10 m/s", correct: true }, { id: "b", label: "100 m/s", correct: false }, { id: "c", label: "1 m/s", correct: false }], explanation: "100 ÷ 10 = 10 m/s." },
      { id: "q5", question: "Speed tells us:", options: [{ id: "a", label: "How hot something is", correct: false }, { id: "b", label: "How fast something moves", correct: true }, { id: "c", label: "How heavy something is", correct: false }], explanation: "Speed = how fast." },
    ] },
    ],
  },
  "temperature-and-its-measurement": {
    name: "Temperature and Its Measurement",
    pageRange: "68–101",
    thinkQuestions: [
      "Why does a thermometer have a narrow tube?",
      "What happens to the liquid inside when we heat it?",
      "Is temperature the same as heat?",
    ],
    topics: [
      { id: 1, title: "What is temperature?", explanation: "Temperature tells us how hot or cold something is. It is measured with a thermometer. The SI unit is degree Celsius (°C) or Kelvin (K).", quiz: [
      { id: "q1", question: "Temperature is measured with a:", options: [{ id: "a", label: "Ruler", correct: false }, { id: "b", label: "Thermometer", correct: true }, { id: "c", label: "Balance", correct: false }], explanation: "Thermometers measure temperature." },
      { id: "q2", question: "Normal human body temperature is about:", options: [{ id: "a", label: "0°C", correct: false }, { id: "b", label: "37°C", correct: true }, { id: "c", label: "100°C", correct: false }], explanation: "Normal body temperature is around 37°C." },
      { id: "q3", question: "Which unit is used for temperature?", options: [{ id: "a", label: "Metre", correct: false }, { id: "b", label: "Degree Celsius", correct: true }, { id: "c", label: "Kilogram", correct: false }], explanation: "Temperature is in °C or Kelvin." },
      { id: "q4", question: "In a thermometer, the liquid rises when:", options: [{ id: "a", label: "Temperature decreases", correct: false }, { id: "b", label: "Temperature increases", correct: true }, { id: "c", label: "It is shaken", correct: false }], explanation: "Liquids expand when heated." },
      { id: "q5", question: "Water boils at:", options: [{ id: "a", label: "0°C", correct: false }, { id: "b", label: "37°C", correct: false }, { id: "c", label: "100°C", correct: true }], explanation: "Water boils at 100°C at normal pressure." },
    ] },
      { id: 2, title: "Thermometer", explanation: "A thermometer has a narrow tube with a liquid (e.g. mercury or alcohol) that expands when heated and rises, showing the temperature on a scale.", quiz: [
      { id: "q1", question: "A thermometer contains:", options: [{ id: "a", label: "Solid metal", correct: false }, { id: "b", label: "A liquid that expands", correct: true }, { id: "c", label: "Air only", correct: false }], explanation: "Liquid expands and rises when heated." },
      { id: "q2", question: "When temperature increases, the liquid in a thermometer:", options: [{ id: "a", label: "Falls", correct: false }, { id: "b", label: "Rises", correct: true }, { id: "c", label: "Stays same", correct: false }], explanation: "Liquids expand when heated." },
      { id: "q3", question: "Common liquids in thermometers are:", options: [{ id: "a", label: "Mercury or alcohol", correct: true }, { id: "b", label: "Water only", correct: false }, { id: "c", label: "Oil", correct: false }], explanation: "Mercury and alcohol expand uniformly." },
      { id: "q4", question: "The scale on a thermometer shows:", options: [{ id: "a", label: "Weight", correct: false }, { id: "b", label: "Temperature", correct: true }, { id: "c", label: "Length", correct: false }], explanation: "Temperature in °C or °F." },
      { id: "q5", question: "Celsius is a unit of:", options: [{ id: "a", label: "Length", correct: false }, { id: "b", label: "Temperature", correct: true }, { id: "c", label: "Mass", correct: false }], explanation: "Degree Celsius (°C) is for temperature." },
    ] },
      { id: 3, title: "Measuring body temperature", explanation: "A clinical thermometer is used to measure human body temperature. Normal body temperature is about 37°C (98.6°F).", quiz: [
      { id: "q1", question: "Normal body temperature is about:", options: [{ id: "a", label: "0°C", correct: false }, { id: "b", label: "37°C", correct: true }, { id: "c", label: "100°C", correct: false }], explanation: "Around 37°C or 98.6°F." },
      { id: "q2", question: "A clinical thermometer is used to measure:", options: [{ id: "a", label: "Room temperature", correct: false }, { id: "b", label: "Body temperature", correct: true }, { id: "c", label: "Boiling water", correct: false }], explanation: "Clinical = for body temperature." },
      { id: "q3", question: "Fever means body temperature is:", options: [{ id: "a", label: "Below normal", correct: false }, { id: "b", label: "Above normal", correct: true }, { id: "c", label: "Zero", correct: false }], explanation: "Fever = higher than 37°C." },
      { id: "q4", question: "We should wash a thermometer:", options: [{ id: "a", label: "Never", correct: false }, { id: "b", label: "Before and after use", correct: true }, { id: "c", label: "Only before", correct: false }], explanation: "Hygiene is important." },
      { id: "q5", question: "Body temperature is measured in:", options: [{ id: "a", label: "Metres", correct: false }, { id: "b", label: "Degrees Celsius", correct: true }, { id: "c", label: "Kilograms", correct: false }], explanation: "Temperature is in °C." },
    ] },
    ],
  },
  "beyond-earth": {
    name: "Beyond Earth",
    pageRange: "102–134",
    thinkQuestions: [
      "Why do we see the Moon at night?",
      "How many planets are in our Solar System?",
      "What is the difference between a star and a planet?",
    ],
    topics: [
      { id: 1, title: "The Solar System", explanation: "The Solar System includes the Sun and all objects that orbit it: eight planets, moons, asteroids, and comets. Earth is the third planet from the Sun.", quiz: [
      { id: "q1", question: "How many planets orbit the Sun?", options: [{ id: "a", label: "Six", correct: false }, { id: "b", label: "Eight", correct: true }, { id: "c", label: "Ten", correct: false }], explanation: "There are eight planets in our Solar System." },
      { id: "q2", question: "Earth is the _____ planet from the Sun.", options: [{ id: "a", label: "First", correct: false }, { id: "b", label: "Third", correct: true }, { id: "c", label: "Fifth", correct: false }], explanation: "Earth is the third planet from the Sun." },
      { id: "q3", question: "The Moon is Earth's:", options: [{ id: "a", label: "Star", correct: false }, { id: "b", label: "Natural satellite", correct: true }, { id: "c", label: "Sun", correct: false }], explanation: "The Moon orbits Earth, so it is a satellite." },
      { id: "q4", question: "The closest star to Earth is:", options: [{ id: "a", label: "Moon", correct: false }, { id: "b", label: "The Sun", correct: true }, { id: "c", label: "Mars", correct: false }], explanation: "The Sun is our nearest star." },
      { id: "q5", question: "Which is an inner (rocky) planet?", options: [{ id: "a", label: "Jupiter", correct: false }, { id: "b", label: "Mars", correct: true }, { id: "c", label: "Saturn", correct: false }], explanation: "Mars is one of the four rocky inner planets." },
    ] },
      { id: 2, title: "Planets", explanation: "Planets are large bodies that orbit the Sun. The four inner planets (Mercury, Venus, Earth, Mars) are rocky; the outer ones are mostly gas and ice.", quiz: [
      { id: "q1", question: "How many planets are in our Solar System?", options: [{ id: "a", label: "Six", correct: false }, { id: "b", label: "Eight", correct: true }, { id: "c", label: "Nine", correct: false }], explanation: "Eight planets orbit the Sun." },
      { id: "q2", question: "Inner planets are mostly:", options: [{ id: "a", label: "Gas", correct: false }, { id: "b", label: "Rocky", correct: true }, { id: "c", label: "Liquid", correct: false }], explanation: "Mercury, Venus, Earth, Mars are rocky." },
      { id: "q3", question: "Which is not a planet?", options: [{ id: "a", label: "Earth", correct: false }, { id: "b", label: "Moon", correct: true }, { id: "c", label: "Mars", correct: false }], explanation: "Moon is a satellite of Earth." },
      { id: "q4", question: "The largest planet is:", options: [{ id: "a", label: "Earth", correct: false }, { id: "b", label: "Jupiter", correct: true }, { id: "c", label: "Mercury", correct: false }], explanation: "Jupiter is the biggest planet." },
      { id: "q5", question: "Planets orbit the:", options: [{ id: "a", label: "Moon", correct: false }, { id: "b", label: "Sun", correct: true }, { id: "c", label: "Earth", correct: false }], explanation: "Planets orbit the Sun." },
    ] },
      { id: 3, title: "Moon and stars", explanation: "The Moon is Earth's natural satellite. Stars are huge balls of hot gas that give out light. The Sun is the closest star to Earth.", quiz: [
      { id: "q1", question: "The Moon orbits:", options: [{ id: "a", label: "The Sun only", correct: false }, { id: "b", label: "Earth", correct: true }, { id: "c", label: "Mars", correct: false }], explanation: "Moon is Earth's satellite." },
      { id: "q2", question: "The Sun is a:", options: [{ id: "a", label: "Planet", correct: false }, { id: "b", label: "Star", correct: true }, { id: "c", label: "Moon", correct: false }], explanation: "Sun is the closest star." },
      { id: "q3", question: "Stars are made of:", options: [{ id: "a", label: "Cold ice", correct: false }, { id: "b", label: "Hot glowing gas", correct: true }, { id: "c", label: "Rock", correct: false }], explanation: "Stars are balls of hot gas." },
      { id: "q4", question: "We see the Moon because:", options: [{ id: "a", label: "It gives its own light", correct: false }, { id: "b", label: "It reflects sunlight", correct: true }, { id: "c", label: "It is on fire", correct: false }], explanation: "Moon reflects light from the Sun." },
      { id: "q5", question: "The closest star to Earth is:", options: [{ id: "a", label: "Mars", correct: false }, { id: "b", label: "The Sun", correct: true }, { id: "c", label: "Moon", correct: false }], explanation: "Sun is our nearest star." },
    ] },
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PhysicsChapterPage({ params }: PageProps) {
  const { slug } = await params;
  const chapter = PHYSICS_CHAPTERS[slug];

  if (!chapter) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-2xl px-4 py-8">
          <p className="text-slate-600">Chapter not found.</p>
          <Link href="/chapter" className="mt-4 inline-block text-blue-600 hover:underline">
            ← Back to Lesson Map
          </Link>
        </main>
      </>
    );
  }

  const conceptNodes = chapter.topics.map((t) => t.title);

  return (
    <>
      <Navbar subtitle="Class 6 · Science · Physics" progress={0} />
      <main className="mx-auto max-w-2xl px-4 py-8 sm:py-10">
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/chapter" className="hover:text-blue-600">Lesson Map</Link>
          <span>→</span>
          <Link href="/chapter" className="hover:text-blue-600">Physics</Link>
          <span>→</span>
          <span className="text-slate-700">{chapter.name}</span>
        </nav>

        <header className="mb-8">
          <span className="inline-flex rounded-xl bg-blue-100 px-3 py-1.5 text-sm font-semibold text-blue-700">
            Physics · Pages {chapter.pageRange}
          </span>
          <h1 className="mt-3 text-3xl font-bold text-slate-800">
            {chapter.name}
          </h1>
          <p className="mt-2 text-slate-600">
            {chapter.topics.length} topics to explore.
          </p>
        </header>

        <div className="space-y-8">
          <ChapterHook
            title={`The world of ${chapter.name.toLowerCase()}`}
            thinkQuestions={chapter.thinkQuestions}
            videoTitle={`${chapter.name} – Intro`}
          />

          {chapter.topics.map((topic, idx) => (
            <section
              key={topic.id}
              id={topic.id === 1 ? "quiz" : undefined}
              className="animate-slide-up rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
            >
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-800">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-sm font-bold text-white shadow-md">
                  {topic.id}
                </span>
                {topic.title}
              </h2>
              <div className="space-y-5">
                <VideoPlayer
                  title={`${topic.title} – Video`}
                  topicId={`physics-${slug}-${topic.id}`}
                  className="max-w-xl overflow-hidden rounded-xl"
                />
                <div className="rounded-xl bg-slate-50/80 p-4">
                  <p className="text-slate-700 leading-relaxed">{topic.explanation}</p>
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-white p-4">
                  <p className="mb-3 text-sm font-bold uppercase tracking-wide text-amber-600">
                    Quiz time
                  </p>
                  <Quiz
                    questions={topic.quiz}
                    topicId={`physics-${slug}-${topic.id}`}
                    showImmediateFeedback
                  />
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4">
                  <p className="mb-2 text-sm font-semibold text-slate-700">Have a doubt?</p>
                  <DoubtBox placeholder={`Ask about ${topic.title}...`} />
                </div>
              </div>
            </section>
          ))}

          <ConceptMap
            title={chapter.name}
            nodes={conceptNodes}
            className="animate-fade-in opacity-0 [animation-fill-mode:forwards]"
          />
        </div>

        <p className="mt-10">
          <Link
            href="/chapter"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
          >
            ← Back to Lesson Map
          </Link>
        </p>
      </main>
    </>
  );
}
