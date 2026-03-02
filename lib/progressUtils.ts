import type { ProgressRecord } from "./types";

/** Default score threshold below which a topic is considered weak (%). */
const DEFAULT_WEAK_THRESHOLD = 50;

/**
 * Computes completion percentage from progress records.
 * Completion = (records with completed === true) / total records, as 0–100.
 * Returns 0 when there are no records.
 */
export function getCompletionPercentage(records: ProgressRecord[]): number {
  if (records.length === 0) return 0;
  let completed = 0;
  for (let i = 0; i < records.length; i++) {
    if (records[i].completed) completed++;
  }
  return Math.round((completed / records.length) * 100);
}

/**
 * Computes average quiz score from progress records (only records with a defined quizScore).
 * Returns 0 when no records have a quiz score.
 */
export function getAverageScore(records: ProgressRecord[]): number {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < records.length; i++) {
    const score = records[i].quizScore;
    if (score != null && !Number.isNaN(score)) {
      sum += score;
      count++;
    }
  }
  return count === 0 ? 0 : Math.round(sum / count);
}

/**
 * Returns progress records where quiz score is below the threshold (weak areas).
 * @param threshold - Score below which a topic is weak (default 50).
 */
export function getWeakAreas(
  records: ProgressRecord[],
  threshold: number = DEFAULT_WEAK_THRESHOLD
): ProgressRecord[] {
  const out: ProgressRecord[] = [];
  for (let i = 0; i < records.length; i++) {
    const score = records[i].quizScore;
    if (score != null && score < threshold) out.push(records[i]);
  }
  return out;
}

/**
 * Sums timeSpent (seconds) across all progress records.
 */
export function getTotalTimeSpent(records: ProgressRecord[]): number {
  let total = 0;
  for (let i = 0; i < records.length; i++) {
    total += records[i].timeSpent ?? 0;
  }
  return total;
}

export interface ProgressStats {
  totalTopics: number;
  completedTopics: number;
  completionPercentage: number;
  averageScore: number;
  weakAreas: ProgressRecord[];
  totalTimeSpent: number;
}

/**
 * Computes all progress metrics in a single pass over the records.
 * Use this when you need multiple stats to avoid iterating repeatedly.
 */
export function getProgressStats(
  records: ProgressRecord[],
  weakThreshold: number = DEFAULT_WEAK_THRESHOLD
): ProgressStats {
  let completedTopics = 0;
  let scoreSum = 0;
  let scoreCount = 0;
  let totalTimeSpent = 0;
  const weakAreas: ProgressRecord[] = [];

  for (let i = 0; i < records.length; i++) {
    const r = records[i];
    if (r.completed) completedTopics++;
    const score = r.quizScore;
    if (score != null && !Number.isNaN(score)) {
      scoreSum += score;
      scoreCount++;
      if (score < weakThreshold) weakAreas.push(r);
    }
    totalTimeSpent += r.timeSpent ?? 0;
  }

  const totalTopics = records.length;
  const completionPercentage =
    totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100);
  const averageScore = scoreCount === 0 ? 0 : Math.round(scoreSum / scoreCount);

  return {
    totalTopics,
    completedTopics,
    completionPercentage,
    averageScore,
    weakAreas,
    totalTimeSpent,
  };
}

/**
 * Formats total seconds into a human-readable string (e.g. "5m 30s", "1h 2m").
 */
export function formatStudyTime(seconds: number): string {
  const s = Math.floor(seconds);
  if (s < 60) return `${s}s`;
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  if (mins < 60) return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
  const hrs = Math.floor(mins / 60);
  const m = mins % 60;
  return m > 0 ? `${hrs}h ${m}m` : `${hrs}h`;
}
