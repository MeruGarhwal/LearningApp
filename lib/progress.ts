import { doc, getDoc, setDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import type { ProgressRecord, ConfidenceLevel } from "./types";

function progressDocId(studentId: string, topicId: string): string {
  return `${studentId}_${topicId}`;
}

export async function getProgress(
  studentId: string,
  topicId: string
): Promise<ProgressRecord | null> {
  if (!db) return null;
  const ref = doc(db, "progress", progressDocId(studentId, topicId));
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data() as ProgressRecord) : null;
}

export async function getProgressByStudentId(
  studentId: string
): Promise<ProgressRecord[]> {
  if (!db) return [];
  const ref = collection(db, "progress");
  const q = query(ref, where("studentId", "==", studentId));
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data() as ProgressRecord);
}

export async function updateProgress(
  studentId: string,
  topicId: string,
  updates: Partial<Pick<ProgressRecord, "completed" | "timeSpent" | "quizScore" | "confidenceLevel">>
): Promise<void> {
  if (!db) return;
  const id = progressDocId(studentId, topicId);
  const ref = doc(db, "progress", id);
  const existing = await getDoc(ref);
  const existingData = existing.exists() ? (existing.data() as ProgressRecord) : null;

  const data: ProgressRecord = {
    studentId,
    topicId,
    completed: updates.completed ?? existingData?.completed ?? false,
    timeSpent: updates.timeSpent ?? existingData?.timeSpent ?? 0,
  };
  const quizScore = updates.quizScore ?? existingData?.quizScore;
  if (quizScore !== undefined) data.quizScore = quizScore;
  const confidenceLevel = updates.confidenceLevel ?? existingData?.confidenceLevel;
  if (confidenceLevel !== undefined) data.confidenceLevel = confidenceLevel;
  await setDoc(ref, data, { merge: true });
}

export function getConfidenceLevel(scorePercent: number): ConfidenceLevel {
  if (scorePercent <= 40) return "Beginner";
  if (scorePercent <= 70) return "Improving";
  if (scorePercent <= 90) return "Strong";
  return "Mastered";
}

export async function markTopicCompleted(
  studentId: string,
  topicId: string,
  timeSpentSeconds: number
): Promise<void> {
  if (!db) return;
  const existing = await getProgress(studentId, topicId);
  const totalTimeSpent = (existing?.timeSpent ?? 0) + timeSpentSeconds;
  await updateProgress(studentId, topicId, {
    completed: true,
    timeSpent: totalTimeSpent,
  });
}
