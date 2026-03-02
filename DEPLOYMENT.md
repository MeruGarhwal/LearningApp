# Production Deployment Guide

## Environment variables

Use these in **Vercel** (or your host) and **never** commit real values to git.

| Variable | Where used | Exposed to browser? | Required |
|----------|------------|----------------------|---------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase client init | Yes (by design; protect with Firebase rules) | Yes |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase client | Yes | Yes |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase client | Yes | Yes |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase client | Yes | Yes |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase client | Yes | Yes |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase client | Yes | Yes |
| `OPENAI_API_KEY` | `/api/ask-doubt` only | **No** (server-only) | For doubt feature |

- **Firebase** keys with `NEXT_PUBLIC_` are meant for client-side SDK. Security is enforced by **Firestore Rules**, **Auth**, and **Storage Rules** in Firebase Console.
- **OpenAI** key must **not** have a `NEXT_PUBLIC_` prefix so it stays server-only and is never sent to the browser.

Template: copy `.env.example` to `.env.local` locally; in production set variables in the host’s dashboard.

---

## Security checklist

- [ ] `.env` and `.env*.local` are in `.gitignore` (never commit secrets).
- [ ] `OPENAI_API_KEY` is set only in server environment (e.g. Vercel env vars), not in any client bundle.
- [ ] Firebase: **Authentication** (Email/Password) and **Firestore** are enabled; **Firestore Rules** and **Storage Rules** restrict read/write by `uid` / `studentId` as needed.
- [ ] No API keys or secrets in client components or in `NEXT_PUBLIC_` variables except the Firebase client config above.

---

## Build

```bash
npm ci
npm run build
```

- Fix any TypeScript or ESLint errors before deploying.
- Run `npm run start` locally to test the production build.

---

## Deploy on Vercel

### 1. Push code

- Push the project to **GitHub**, **GitLab**, or **Bitbucket**.

### 2. Import project in Vercel

1. Go to [vercel.com](https://vercel.com) and sign in.
2. **Add New** → **Project**.
3. Import the repo containing this Next.js app.
4. **Framework Preset**: Next.js (auto-detected).
5. **Root Directory**: leave default (or set if the app is in a subfolder).
6. Do **not** override **Build Command** or **Output Directory** unless you use a custom setup.

### 3. Set environment variables

1. In the project, open **Settings** → **Environment Variables**.
2. Add each variable from the table above:
   - **Name**: e.g. `NEXT_PUBLIC_FIREBASE_API_KEY`
   - **Value**: your value (no quotes)
   - **Environment**: Production (and optionally Preview/Development if you use them).
3. Add **OpenAI**:
   - **Name**: `OPENAI_API_KEY`
   - **Value**: your OpenAI API key
   - **Environment**: Production (and Preview if you want doubt-solving on preview URLs).
4. Save. Redeploy so the new variables are applied.

### 4. Deploy

1. Click **Deploy** (or push a new commit to trigger a deploy).
2. After the build, use the generated URL (e.g. `https://your-app.vercel.app`).

### 5. Optional: custom domain

- **Settings** → **Domains** → add your domain and follow DNS instructions.

### 6. Firebase (Auth) authorized domains

1. In **Firebase Console** → **Authentication** → **Settings** → **Authorized domains**.
2. Add your Vercel domain (e.g. `your-app.vercel.app`) and any custom domain.

---

## Post-deploy checks

- [ ] Homepage and auth (login/register) work.
- [ ] Firestore read/write works for logged-in users (student/parent).
- [ ] **Ask a doubt** uses the API and returns an explanation (confirms `OPENAI_API_KEY` is set and server-only).
- [ ] Parent dashboard loads and shows linked student progress (if `linkedStudentId` is set).

---

## Troubleshooting

| Issue | What to do |
|-------|------------|
| “OpenAI API key is not configured” | Set `OPENAI_API_KEY` in Vercel → Settings → Environment Variables and redeploy. |
| Firebase auth/redirect errors | Add the Vercel (and custom) domain to Firebase **Authorized domains**. |
| Firestore permission denied | Update **Firestore Rules** (and Storage Rules if used) for your `uid` / `studentId` model. |
| Build fails | Run `npm run build` locally and fix TypeScript/ESLint errors; ensure Node version matches Vercel (e.g. 18.x). |
