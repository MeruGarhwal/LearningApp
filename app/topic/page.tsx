import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function TopicPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">Topics</h1>
        <ul className="space-y-2">
          {["Introduction", "Basics", "Advanced"].map((topic, i) => (
            <li key={i}>
              <Link
                href={`/topic/${i + 1}`}
                className="block p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                {topic}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-gray-600">
          <Link href="/student-dashboard" className="text-blue-600 hover:underline">
            Back to dashboard
          </Link>
        </p>
      </main>
    </>
  );
}
