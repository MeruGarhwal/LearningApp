import Link from "next/link";
import Navbar from "@/components/Navbar";
import VideoPlayer from "@/components/VideoPlayer";
import Quiz from "@/components/Quiz";
import DoubtBox from "@/components/DoubtBox";
import type { QuizQuestion } from "@/lib/types";

function buildWhatIsFoodQuiz(): QuizQuestion[] {
  return [
    {
      id: "q1",
      question: "Why do we need food?",
      options: [
        { id: "a", label: "Only for taste", correct: false },
        { id: "b", label: "To get energy, grow, and stay healthy", correct: true },
        { id: "c", label: "To pass time", correct: false },
      ],
      explanation: "Food gives us energy to work and play, helps us grow, and keeps us healthy.",
    },
    {
      id: "q2",
      question: "Where do we get food from?",
      options: [
        { id: "a", label: "Only from plants", correct: false },
        { id: "b", label: "Only from animals", correct: false },
        { id: "c", label: "From both plants and animals", correct: true },
      ],
      explanation: "We get food from plants (fruits, vegetables, grains) and animals (milk, eggs, meat).",
    },
    {
      id: "q3",
      question: "What does food help our body to do?",
      options: [
        { id: "a", label: "Only digest", correct: false },
        { id: "b", label: "Grow, work, and fight diseases", correct: true },
        { id: "c", label: "Only sleep", correct: false },
      ],
      explanation: "Food helps us grow, gives energy to work, and nutrients to fight diseases.",
    },
    {
      id: "q4",
      question: "Which is a function of food?",
      options: [
        { id: "a", label: "Making us tired", correct: false },
        { id: "b", label: "Giving us energy", correct: true },
        { id: "c", label: "Reducing growth", correct: false },
      ],
      explanation: "Food provides energy (through carbohydrates and fats) for all activities.",
    },
    {
      id: "q5",
      question: "Food is any substance we eat or drink to:",
      options: [
        { id: "a", label: "Stay hungry", correct: false },
        { id: "b", label: "Get energy and stay healthy", correct: true },
        { id: "c", label: "Avoid water", correct: false },
      ],
      explanation: "Food is any substance we consume to get energy and maintain health.",
    },
  ];
}

function buildNutrientsQuiz(): QuizQuestion[] {
  return [
    {
      id: "q1",
      question: "Which of these is a nutrient?",
      options: [
        { id: "a", label: "Water only", correct: false },
        { id: "b", label: "Carbohydrates, proteins, fats, vitamins, minerals", correct: true },
        { id: "c", label: "Only vitamins", correct: false },
      ],
      explanation: "The main nutrients are carbohydrates, proteins, fats, vitamins, and minerals.",
    },
    {
      id: "q2",
      question: "Nutrients are the useful parts in food that:",
      options: [
        { id: "a", label: "Make food look good", correct: false },
        { id: "b", label: "Our body needs to function", correct: true },
        { id: "c", label: "We throw away", correct: false },
      ],
      explanation: "Nutrients are the components in food that our body uses for growth and health.",
    },
    {
      id: "q3",
      question: "How many main types of nutrients are there?",
      options: [
        { id: "a", label: "Two", correct: false },
        { id: "b", label: "Five (carbohydrates, proteins, fats, vitamins, minerals)", correct: true },
        { id: "c", label: "Ten", correct: false },
      ],
      explanation: "The five main nutrients are carbohydrates, proteins, fats, vitamins, and minerals.",
    },
    {
      id: "q4",
      question: "Each nutrient has:",
      options: [
        { id: "a", label: "The same role", correct: false },
        { id: "b", label: "A different role in keeping us healthy", correct: true },
        { id: "c", label: "No role", correct: false },
      ],
      explanation: "Each nutrient does a specific job—e.g. carbs give energy, proteins build body.",
    },
    {
      id: "q5",
      question: "We get nutrients from:",
      options: [
        { id: "a", label: "Only pills", correct: false },
        { id: "b", label: "The food we eat", correct: true },
        { id: "c", label: "Only water", correct: false },
      ],
      explanation: "Nutrients come from the food and drinks we consume every day.",
    },
  ];
}

function buildCarbohydratesQuiz(): QuizQuestion[] {
  return [
    {
      id: "q1",
      question: "What is the main role of carbohydrates?",
      options: [
        { id: "a", label: "To build muscles", correct: false },
        { id: "b", label: "To give us energy", correct: true },
        { id: "c", label: "To protect organs", correct: false },
      ],
      explanation: "Carbohydrates are the body's main source of energy.",
    },
    {
      id: "q2",
      question: "Which food is rich in carbohydrates?",
      options: [
        { id: "a", label: "Rice", correct: true },
        { id: "b", label: "Butter only", correct: false },
        { id: "c", label: "Eggs only", correct: false },
      ],
      explanation: "Rice, bread, potato, and cereals are rich in carbohydrates.",
    },
    {
      id: "q3",
      question: "Carbohydrates are the main source of:",
      options: [
        { id: "a", label: "Protein", correct: false },
        { id: "b", label: "Energy for our body", correct: true },
        { id: "c", label: "Fat", correct: false },
      ],
      explanation: "Our body uses carbohydrates first for energy to work and play.",
    },
    {
      id: "q4",
      question: "Sugar and potatoes give us mainly:",
      options: [
        { id: "a", label: "Proteins", correct: false },
        { id: "b", label: "Carbohydrates", correct: true },
        { id: "c", label: "Fats", correct: false },
      ],
      explanation: "Sugar, potato, bread, and cereals are carbohydrate-rich foods.",
    },
    {
      id: "q5",
      question: "We need carbohydrates to:",
      options: [
        { id: "a", label: "Store fat only", correct: false },
        { id: "b", label: "Work and play", correct: true },
        { id: "c", label: "Digest food only", correct: false },
      ],
      explanation: "Carbohydrates provide the energy we need for daily activities.",
    },
  ];
}

function buildProteinsQuiz(): QuizQuestion[] {
  return [
    {
      id: "q1",
      question: "Proteins help mainly in:",
      options: [
        { id: "a", label: "Giving instant energy", correct: false },
        { id: "b", label: "Growth and repair of the body", correct: true },
        { id: "c", label: "Storing fat", correct: false },
      ],
      explanation: "Proteins build and repair muscles, skin, hair, and other tissues.",
    },
    {
      id: "q2",
      question: "Which is a good source of protein?",
      options: [
        { id: "a", label: "Sugar", correct: false },
        { id: "b", label: "Eggs and pulses", correct: true },
        { id: "c", label: "Oil only", correct: false },
      ],
      explanation: "Pulses, dal, eggs, fish, meat, milk, and nuts are protein sources.",
    },
    {
      id: "q3",
      question: "Proteins build:",
      options: [
        { id: "a", label: "Only bones", correct: false },
        { id: "b", label: "Muscles, skin, and hair", correct: true },
        { id: "c", label: "Only fat", correct: false },
      ],
      explanation: "Proteins are needed for growth and repair of body tissues.",
    },
    {
      id: "q4",
      question: "We need proteins for:",
      options: [
        { id: "a", label: "Only energy", correct: false },
        { id: "b", label: "Growth and repair", correct: true },
        { id: "c", label: "Only warmth", correct: false },
      ],
      explanation: "Proteins are body-building nutrients.",
    },
    {
      id: "q5",
      question: "Dal and fish are rich in:",
      options: [
        { id: "a", label: "Carbohydrates only", correct: false },
        { id: "b", label: "Proteins", correct: true },
        { id: "c", label: "Fats only", correct: false },
      ],
      explanation: "Pulses (dal), eggs, fish, and meat are good protein sources.",
    },
  ];
}

function buildFatsQuiz(): QuizQuestion[] {
  return [
    {
      id: "q1",
      question: "Fats help in:",
      options: [
        { id: "a", label: "Only making food tasty", correct: false },
        { id: "b", label: "Giving energy and protecting organs", correct: true },
        { id: "c", label: "Digestion only", correct: false },
      ],
      explanation: "Fats provide energy and cushion our organs.",
    },
    {
      id: "q2",
      question: "We get fats from:",
      options: [
        { id: "a", label: "Only fruits", correct: false },
        { id: "b", label: "Butter, oil, nuts", correct: true },
        { id: "c", label: "Only vegetables", correct: false },
      ],
      explanation: "Butter, ghee, oil, nuts, and seeds contain fats.",
    },
    {
      id: "q3",
      question: "Fats keep our body:",
      options: [
        { id: "a", label: "Cold", correct: false },
        { id: "b", label: "Warm", correct: true },
        { id: "c", label: "Neither", correct: false },
      ],
      explanation: "A layer of fat under the skin helps keep the body warm.",
    },
    {
      id: "q4",
      question: "We need fats in:",
      options: [
        { id: "a", label: "Large amounts only", correct: false },
        { id: "b", label: "Small amounts", correct: true },
        { id: "c", label: "No amount", correct: false },
      ],
      explanation: "Fats are needed in small amounts for energy and protection.",
    },
    {
      id: "q5",
      question: "Fats protect:",
      options: [
        { id: "a", label: "Only skin", correct: false },
        { id: "b", label: "Our organs", correct: true },
        { id: "c", label: "Only bones", correct: false },
      ],
      explanation: "Fats cushion and protect vital organs in the body.",
    },
  ];
}

function buildBalancedDietQuiz(): QuizQuestion[] {
  return [
    {
      id: "q1",
      question: "A balanced diet means:",
      options: [
        { id: "a", label: "Eating only one type of food", correct: false },
        { id: "b", label: "Eating all nutrients in the right amounts", correct: true },
        { id: "c", label: "Eating as much as possible", correct: false },
      ],
      explanation: "A balanced diet includes all nutrients in proper proportions.",
    },
    {
      id: "q2",
      question: "A balanced diet includes:",
      options: [
        { id: "a", label: "Only cereals", correct: false },
        { id: "b", label: "Cereals, pulses, vegetables, fruits, milk, some fat", correct: true },
        { id: "c", label: "Only sweets", correct: false },
      ],
      explanation: "We need a variety of food groups for a balanced diet.",
    },
    {
      id: "q3",
      question: "Eating a balanced diet keeps us:",
      options: [
        { id: "a", label: "Weak", correct: false },
        { id: "b", label: "Healthy and strong", correct: true },
        { id: "c", label: "Tired", correct: false },
      ],
      explanation: "A balanced diet provides all nutrients needed for health.",
    },
    {
      id: "q4",
      question: "The right amounts of nutrients means:",
      options: [
        { id: "a", label: "Too much of one", correct: false },
        { id: "b", label: "Enough of each, not too much or too little", correct: true },
        { id: "c", label: "Skipping meals", correct: false },
      ],
      explanation: "Balance means getting enough of each nutrient without excess.",
    },
    {
      id: "q5",
      question: "A balanced diet has:",
      options: [
        { id: "a", label: "Only two nutrients", correct: false },
        { id: "b", label: "All main nutrients", correct: true },
        { id: "c", label: "No nutrients", correct: false },
      ],
      explanation: "All five main nutrients should be part of a balanced diet.",
    },
  ];
}

function buildDeficiencyDiseasesQuiz(): QuizQuestion[] {
  return [
    {
      id: "q1",
      question: "Deficiency diseases are caused by:",
      options: [
        { id: "a", label: "Eating too much food", correct: false },
        { id: "b", label: "Lack of a nutrient in diet for a long time", correct: true },
        { id: "c", label: "Drinking less water", correct: false },
      ],
      explanation: "When we don't get enough of a nutrient for long, we can get a deficiency disease.",
    },
    {
      id: "q2",
      question: "Lack of vitamin C causes:",
      options: [
        { id: "a", label: "Rickets", correct: false },
        { id: "b", label: "Scurvy", correct: true },
        { id: "c", label: "Goitre", correct: false },
      ],
      explanation: "Scurvy is caused by lack of vitamin C (found in citrus fruits).",
    },
    {
      id: "q3",
      question: "Lack of vitamin D causes:",
      options: [
        { id: "a", label: "Scurvy", correct: false },
        { id: "b", label: "Rickets", correct: true },
        { id: "c", label: "Goitre", correct: false },
      ],
      explanation: "Rickets (weak bones) is caused by lack of vitamin D and sunlight.",
    },
    {
      id: "q4",
      question: "Lack of iodine can cause:",
      options: [
        { id: "a", label: "Scurvy", correct: false },
        { id: "b", label: "Goitre", correct: true },
        { id: "c", label: "Rickets", correct: false },
      ],
      explanation: "Goitre (swelling in neck) is caused by lack of iodine. Use iodised salt.",
    },
    {
      id: "q5",
      question: "Deficiency means:",
      options: [
        { id: "a", label: "Having too much", correct: false },
        { id: "b", label: "Not having enough of something", correct: true },
        { id: "c", label: "Being healthy", correct: false },
      ],
      explanation: "Deficiency means a lack or shortage of a nutrient in the diet.",
    },
  ];
}

const TOPIC_QUIZ_BUILDERS: Record<number, () => QuizQuestion[]> = {
  1: buildWhatIsFoodQuiz,
  2: buildNutrientsQuiz,
  3: buildCarbohydratesQuiz,
  4: buildProteinsQuiz,
  5: buildFatsQuiz,
  6: buildBalancedDietQuiz,
  7: buildDeficiencyDiseasesQuiz,
};

const TOPICS = [
  { id: 1, title: "What is Food?", explanation: "Food is any substance we eat or drink to get energy and stay healthy. It helps us grow, work, and fight diseases. We get food from plants and animals." },
  { id: 2, title: "Nutrients", explanation: "Nutrients are the useful parts in food that our body needs. The main nutrients are carbohydrates, proteins, fats, vitamins, and minerals. Each nutrient has a different role in keeping us healthy." },
  { id: 3, title: "Carbohydrates", explanation: "Carbohydrates give us energy to work and play. They are the main source of energy for our body. We get carbohydrates from rice, bread, potato, sugar, and cereals." },
  { id: 4, title: "Proteins", explanation: "Proteins help in growth and repair of our body. They build muscles, skin, and hair. We get proteins from pulses, dal, eggs, fish, meat, milk, and nuts." },
  { id: 5, title: "Fats", explanation: "Fats give us energy and help protect our organs. They also keep our body warm. We get fats from butter, oil, ghee, nuts, and some seeds. We need fats in small amounts." },
  { id: 6, title: "Balanced Diet", explanation: "A balanced diet has all nutrients in the right amounts. It includes cereals, pulses, vegetables, fruits, milk, and a little fat. Eating a balanced diet keeps us healthy and strong." },
  { id: 7, title: "Deficiency Diseases", explanation: "When we do not get enough of a nutrient for a long time, we can get deficiency diseases. For example: lack of vitamin C causes scurvy, lack of vitamin D causes rickets, and lack of iodine can cause goitre." },
];

export default function ComponentsOfFoodPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-2xl px-4 py-8 sm:py-10">
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/chapter" className="hover:text-brand-600">
            Chapters
          </Link>
          <span>→</span>
          <span className="text-slate-700">Class 6 · Science · Components of Food</span>
        </nav>

        <header className="mb-10">
          <span className="inline-flex rounded-lg bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
            Class 6 · Science
          </span>
          <h1 className="mt-3 text-3xl font-bold text-slate-800">
            Components of Food
          </h1>
          <p className="mt-2 text-slate-600">
            7 topics to build a clear understanding of nutrients and diet.
          </p>
        </header>

        <div className="space-y-10">
          {TOPICS.map((topic) => (
            <section
              key={topic.id}
              id={`topic-${topic.id}`}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card"
            >
              <Link
                href={`/topic/${topic.id}`}
                className="group mb-4 inline-flex items-center gap-2"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-sm font-bold text-brand-600 group-hover:bg-brand-200">
                  {topic.id}
                </span>
                <h2 className="section-title text-brand-600 group-hover:text-brand-700 group-hover:underline">
                  {topic.title}
                </h2>
                <span className="text-brand-500 opacity-0 transition group-hover:opacity-100">→</span>
              </Link>

              <div className="space-y-5">
                <VideoPlayer
                  title={`${topic.title} – Video`}
                  topicId={String(topic.id)}
                  className="max-w-xl overflow-hidden rounded-xl"
                />
                <div className="rounded-xl bg-slate-50/80 p-4">
                  <p className="text-slate-700 leading-relaxed">
                    {topic.explanation}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/80 p-4">
                  <Quiz
                    questions={TOPIC_QUIZ_BUILDERS[topic.id]()}
                    topicId={String(topic.id)}
                  />
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4">
                  <p className="mb-2 text-sm font-semibold text-slate-700">
                    Have a doubt?
                  </p>
                  <DoubtBox placeholder={`Ask about ${topic.title}...`} />
                </div>
              </div>
            </section>
          ))}
        </div>

        <p className="mt-10">
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
