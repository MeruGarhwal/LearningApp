export type UserRole = "student" | "parent";

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  role: UserRole;
  linkedStudentId?: string; // for parent role
}

export type ConfidenceLevel = "Beginner" | "Improving" | "Strong" | "Mastered";

export interface ProgressRecord {
  studentId: string;
  topicId: string;
  completed: boolean;
  timeSpent: number; // seconds
  quizScore?: number; // 0–100
  confidenceLevel?: ConfidenceLevel;
}

export interface QuizOption {
  id: string;
  label: string;
  correct: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  explanation?: string;
}
