"use client";

import { useState, useCallback } from "react";
import { useAuth } from "@/context/AuthContext";
import { updateProgress, getConfidenceLevel } from "@/lib/progress";
import type { QuizQuestion } from "@/lib/types";

const CONFIDENCE_STYLES: Record<string, { bg: string; text: string }> = {
  Beginner: { bg: "bg-amber-100", text: "text-amber-800" },
  Improving: { bg: "bg-sky-100", text: "text-sky-800" },
  Strong: { bg: "bg-emerald-100", text: "text-emerald-800" },
  Mastered: { bg: "bg-violet-100", text: "text-violet-800" },
};

interface QuizProps {
  questions: QuizQuestion[];
  topicId?: string;
  onComplete?: (score: number, confidence: string) => void;
  showImmediateFeedback?: boolean;
  className?: string;
}

export default function Quiz({
  questions,
  topicId,
  onComplete,
  showImmediateFeedback = false,
  className = "",
}: QuizProps) {
  const { user } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [feedbackShown, setFeedbackShown] = useState(false);

  const currentQuestion = questions[currentIndex];
  const total = questions.length;
  const isLast = currentIndex === total - 1;
  const allAnswered = total > 0 && Object.keys(answers).length === total;
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;

  const setAnswer = useCallback((questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    if (showImmediateFeedback) setFeedbackShown(true);
  }, [showImmediateFeedback]);

  const getCorrectOptionId = (q: QuizQuestion) =>
    q.options.find((o) => o.correct)?.id ?? "";

  const submitQuiz = useCallback(async () => {
    if (!allAnswered) return;
    setSubmitted(true);
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === getCorrectOptionId(q)) correct++;
    });
    const scorePercent = total > 0 ? Math.round((correct / total) * 100) : 0;
    const confidence = getConfidenceLevel(scorePercent);

    if (user && topicId) {
      setSaving(true);
      try {
        await updateProgress(user.uid, topicId, {
          quizScore: scorePercent,
          confidenceLevel: confidence,
        });
      } finally {
        setSaving(false);
      }
    }
    onComplete?.(scorePercent, confidence);
  }, [allAnswered, answers, questions, total, user, topicId, onComplete]);

  if (questions.length === 0) {
    return (
      <div className={`rounded-xl border border-slate-200/80 p-4 ${className}`}>
        <p className="text-sm text-slate-500">No questions in this quiz.</p>
      </div>
    );
  }

  if (submitted) {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === getCorrectOptionId(q)) correct++;
    });
    const scorePercent = total > 0 ? Math.round((correct / total) * 100) : 0;
    const confidence = getConfidenceLevel(scorePercent);
    const style = CONFIDENCE_STYLES[confidence] ?? CONFIDENCE_STYLES.Beginner;

    return (
      <div className={`space-y-4 ${className}`}>
        <h3 className="text-lg font-semibold text-slate-800">Quiz result</h3>
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-2xl font-bold text-slate-900">
            Score: {correct}/{total} ({scorePercent}%)
          </p>
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${style.bg} ${style.text}`}
          >
            {confidence}
          </span>
          {saving && (
            <span className="text-sm text-slate-500">Saving…</span>
          )}
        </div>

        <div className="border-t border-slate-200 pt-4 space-y-4">
          <h4 className="text-sm font-semibold text-slate-700">Correct answers & explanations</h4>
          {questions.map((q) => {
            const correctId = getCorrectOptionId(q);
            const chosenId = answers[q.id];
            const isCorrect = chosenId === correctId;
            const correctLabel = q.options.find((o) => o.id === correctId)?.label ?? "—";
            return (
              <div
                key={q.id}
                className={`rounded-xl border p-3 text-sm ${
                  isCorrect ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50"
                }`}
              >
                <p className="font-medium text-slate-800">{q.question}</p>
                <p className="mt-1 text-slate-600">
                  Correct: {correctLabel}
                </p>
                {q.explanation && (
                  <p className="mt-2 text-slate-700">{q.explanation}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const correctId = getCorrectOptionId(currentQuestion);
  const isCorrect = currentAnswer ? currentAnswer === correctId : false;
  const correctLabel = currentQuestion.options.find((o) => o.id === correctId)?.label ?? "";

  const goNext = () => {
    setFeedbackShown(false);
    if (isLast) submitQuiz();
    else setCurrentIndex((i) => i + 1);
  };

  return (
    <div className={className}>
      <p className="mb-2 text-xs font-medium text-slate-500">
        Question {currentIndex + 1} of {total}
      </p>
      <p className="mb-4 text-slate-800 font-medium">
        {currentQuestion.question}
      </p>
      <ul className="space-y-2">
        {currentQuestion.options.map((opt) => {
          const selected = currentAnswer === opt.id;
          const isCorrectOpt = opt.id === correctId;
          const showCorrect = showImmediateFeedback && feedbackShown && isCorrectOpt;
          const showWrong = showImmediateFeedback && feedbackShown && selected && !isCorrectOpt;
          return (
            <li key={opt.id}>
              <button
                type="button"
                onClick={() => !feedbackShown && setAnswer(currentQuestion.id, opt.id)}
                disabled={feedbackShown}
                className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                  showCorrect
                    ? "border-emerald-500 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500/30"
                    : showWrong
                      ? "border-rose-400 bg-rose-50 text-rose-800"
                      : selected
                        ? "border-brand-500 bg-brand-50 text-brand-800 ring-2 ring-brand-500/30"
                        : "border-slate-200 bg-white text-slate-700 hover:border-brand-200 hover:bg-brand-50/50"
                } ${feedbackShown ? "cursor-default" : ""}`}
              >
                <span className="flex items-center justify-between gap-2">
                  {opt.label}
                  {showCorrect && <span className="text-lg">✓</span>}
                  {showWrong && <span className="text-lg">✗</span>}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {showImmediateFeedback && feedbackShown && (
        <div
          className={`mt-4 animate-scale-in rounded-xl border px-4 py-3 ${
            isCorrect ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50"
          }`}
        >
          {isCorrect ? (
            <p className="flex items-center gap-2 font-semibold text-emerald-700">
              <span className="text-xl">👍</span> Correct!
            </p>
          ) : (
            <div>
              <p className="font-semibold text-rose-700">Incorrect</p>
              <p className="mt-1 text-sm text-slate-600">Correct: {correctLabel}</p>
              {currentQuestion.explanation && (
                <p className="mt-2 text-sm text-slate-700">{currentQuestion.explanation}</p>
              )}
            </div>
          )}
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={() => { setFeedbackShown(false); setCurrentIndex((i) => Math.max(0, i - 1)); }}
          disabled={currentIndex === 0}
          className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 disabled:opacity-50 disabled:pointer-events-none transition-colors"
        >
          Previous
        </button>
        {showImmediateFeedback && feedbackShown ? (
          <button
            type="button"
            onClick={goNext}
            className="rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-blue-600 transition-colors"
          >
            {isLast ? "See result" : "Next"}
          </button>
        ) : isLast ? (
          <button
            type="button"
            onClick={submitQuiz}
            disabled={!allAnswered}
            className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-brand-600 disabled:opacity-50 disabled:pointer-events-none transition-colors"
          >
            Submit
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setCurrentIndex((i) => i + 1)}
            className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-brand-600 transition-colors"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
