const STORAGE_KEY = "concept-clarity-xp";
const BADGES_KEY = "concept-clarity-badges";

export const XP_PER_QUIZ = 50;
export const XP_PER_TOPIC_VIEW = 10;
export const XP_PER_PLAYGROUND = 20;
export const XP_LEVEL_STEP = 200;

export type BadgeId =
  | "first_quiz"
  | "five_topics"
  | "newton_ninja"
  | "science_warrior"
  | "explorer"
  | "quick_thinker";

export const BADGES: Record<
  BadgeId,
  { name: string; emoji: string; description: string }
> = {
  first_quiz: { name: "First Quiz", emoji: "🎯", description: "Completed your first quiz!" },
  five_topics: { name: "Explorer", emoji: "📚", description: "Completed 5 topics" },
  newton_ninja: { name: "Newton Ninja", emoji: "🥷", description: "Mastered a Physics chapter" },
  science_warrior: { name: "Science Warrior", emoji: "⚔️", description: "Scored 80%+ on a quiz" },
  explorer: { name: "Playground Explorer", emoji: "🧪", description: "Tried the concept playground" },
  quick_thinker: { name: "Quick Thinker", emoji: "💡", description: "Answered a quick-check question" },
};

export type LevelTitle = "Starter" | "Learner" | "Newton Ninja" | "Science Warrior" | "Champion";

const LEVEL_TITLES: LevelTitle[] = ["Starter", "Learner", "Newton Ninja", "Science Warrior", "Champion"];

export function getStoredXP(): number {
  if (typeof window === "undefined") return 0;
  const raw = localStorage.getItem(STORAGE_KEY);
  const n = parseInt(raw ?? "0", 10);
  return isNaN(n) ? 0 : Math.max(0, n);
}

export function setStoredXP(xp: number): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, String(Math.max(0, xp)));
}

export function getStoredBadges(): BadgeId[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(BADGES_KEY);
  if (!raw) return [];
  try {
    const arr = JSON.parse(raw) as unknown[];
    return Array.isArray(arr) ? (arr.filter((id) => typeof id === "string") as BadgeId[]) : [];
  } catch {
    return [];
  }
}

export function addBadge(id: BadgeId): boolean {
  const badges = getStoredBadges();
  if (badges.includes(id)) return false;
  badges.push(id);
  if (typeof window !== "undefined") {
    localStorage.setItem(BADGES_KEY, JSON.stringify(badges));
  }
  return true;
}

export function getLevelFromXP(xp: number): { level: number; title: LevelTitle; xpInLevel: number } {
  const level = Math.floor(xp / XP_LEVEL_STEP) + 1;
  const xpInLevel = xp % XP_LEVEL_STEP;
  const titleIndex = Math.min(level - 1, LEVEL_TITLES.length - 1);
  return { level, title: LEVEL_TITLES[titleIndex], xpInLevel };
}
