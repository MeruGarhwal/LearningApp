# Vercel deployment checklist

Do these steps in order. Git must be installed on your machine.

---

## Step 1: Push the repo to GitHub (or GitLab/Bitbucket)

### 1.1 Initialize Git (if not already)

In a terminal, from the project root (`concept-clarity-poc`):

```bash
cd "e:\Vivek\My Learnings\Project\Learning APP\concept-clarity-poc"
git init
```

### 1.2 Create a GitHub repo

1. Go to [github.com](https://github.com) → **New repository**.
2. Name it (e.g. `concept-clarity-poc`).
3. Do **not** add a README, .gitignore, or license (you already have them).
4. Click **Create repository**.

### 1.3 Add, commit, and push

In the same terminal:

```bash
git add .
git commit -m "Initial commit: Concept Clarity POC"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name.  
If you use GitLab or Bitbucket, create the repo there and use its clone URL instead of `origin`.

---

## Step 2: In Vercel – Add New → Project and import the repo

1. Go to [vercel.com](https://vercel.com) and sign in (use “Continue with GitHub” if your code is on GitHub).
2. Click **Add New** → **Project**.
3. **Import Git Repository**: select your repo (e.g. `concept-clarity-poc`).
4. **Configure Project**:
   - **Framework Preset**: Next.js (should be auto-detected).
   - **Root Directory**: leave as `.` (or set if the app lives in a subfolder).
   - Do **not** change Build Command or Output Directory unless you have a custom setup.
5. Do **not** click Deploy yet – add environment variables first (Step 3).

---

## Step 3: Settings → Environment Variables

1. Before or after the first deploy, open your project in Vercel.
2. Go to **Settings** → **Environment Variables**.
3. Add each variable below. Use the **Name** as the key and your real value as the value. Choose **Production** (and **Preview** if you want the same config for preview URLs).

| Name | Value (your real value) | Environments |
|------|-------------------------|--------------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | From Firebase Console → Project settings | Production, Preview |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | e.g. `your-project.firebaseapp.com` | Production, Preview |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Your Firebase project ID | Production, Preview |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | e.g. `your-project.appspot.com` | Production, Preview |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | From Firebase project settings | Production, Preview |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | From Firebase project settings | Production, Preview |
| `OPENAI_API_KEY` | Your OpenAI API key (server-only) | Production, Preview |

4. Click **Save** for each variable.
5. If the project was already deployed, go to **Deployments** → open the three dots on the latest deployment → **Redeploy** so the new env vars are used.

---

## Step 4: Deploy

1. If you didn’t deploy in Step 2: go to **Deployments** and click **Deploy** (or push a new commit to trigger a deploy).
2. Wait for the build to finish. Your app URL will be like `https://your-project.vercel.app`.
3. Open the URL and test login, Firestore, and “Ask a doubt” (to confirm `OPENAI_API_KEY` works).

---

## Step 5: Add Vercel (and custom) domain in Firebase

1. Open [Firebase Console](https://console.firebase.google.com) → your project.
2. Go to **Authentication** → **Settings** (or **Sign-in method** tab) → **Authorized domains**.
3. Click **Add domain** and add:
   - Your Vercel domain, e.g. `your-project.vercel.app`.
   - Any custom domain you added in Vercel (e.g. `app.yourdomain.com`).
4. Save.

Without this, Firebase Auth will block sign-in on your Vercel URL.

---

## Quick reference – env var names to copy

```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
OPENAI_API_KEY
```

---

## Troubleshooting

- **Build fails**: Run `npm run build` locally and fix any TypeScript or ESLint errors.
- **“OpenAI API key is not configured”**: Add `OPENAI_API_KEY` in Vercel → Settings → Environment Variables and redeploy.
- **Auth redirect / “unauthorized domain”**: Add your Vercel (and custom) domain in Firebase → Authentication → Authorized domains.
