# Concept Clarity POC

Next.js 14 app with App Router, TypeScript, Tailwind CSS, and Firebase.

## Setup

**New to this project?** See **[RUN_LOCALLY.md](./RUN_LOCALLY.md)** for step-by-step instructions to run the site on your computer (including Node.js install and env vars).

Quick start (after Node.js is installed):

```bash
npm install
npm run dev
```

Then open **http://localhost:3000**.

2. **Firebase:** Copy `.env.example` or `.env.local.example` to `.env.local` and add your Firebase project config (from Firebase Console → Project settings):

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

Enable **Email/Password** sign-in and create a **Firestore** database in the Firebase Console.

Open [http://localhost:3000](http://localhost:3000).

## Firebase

- **Auth:** Email + Password; auth state persists (browser persistence).
- **Firestore:** `users` collection with `uid`, `name`, `email`, `role` (`student` | `parent`), optional `linkedStudentId` for parents.
- **Storage:** Initialized in `lib/firebase.ts` for file uploads.

## Structure

- **App routes:** `/`, `/login`, `/register`, `/student-dashboard`, `/chapter`, `/topic`, `/parent-dashboard`
- **lib:** `lib/firebase.ts` (Firebase init), `lib/types.ts` (UserProfile, UserRole)
- **context:** `context/AuthContext.tsx` (auth state + Firestore profile)
- **Reusable components:** `components/Navbar.tsx`, `VideoPlayer.tsx`, `Quiz.tsx`, `ProgressBar.tsx`, `DoubtBox.tsx`

## Scripts

- `npm run dev` – development server
- `npm run build` – production build
- `npm run start` – start production server
- `npm run lint` – run ESLint

## Production & deployment

- **Run locally:** See [RUN_LOCALLY.md](./RUN_LOCALLY.md) for running on your machine (Node.js, `npm install`, `npm run dev`, `.env.local`).
- **Deploy on Vercel (beginner-friendly):** See [DEPLOY_VERCEL_SIMPLE.md](./DEPLOY_VERCEL_SIMPLE.md) for a simple guide (GitHub → Vercel → env vars → Firebase authorized domains).
- **Environment variables:** See `.env.example` for required vars. Never commit secrets. `OPENAI_API_KEY` is server-only; Firebase uses `NEXT_PUBLIC_*`.
- **Technical details:** [DEPLOYMENT.md](./DEPLOYMENT.md) and [VERCEL_DEPLOY_CHECKLIST.md](./VERCEL_DEPLOY_CHECKLIST.md).
"# student-learning-platform" 
