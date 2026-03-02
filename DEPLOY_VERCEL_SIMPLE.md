# How to put this website on the internet (Vercel) – simple guide

This guide assumes you have never used Vercel or GitHub before. Do the steps in order.

---

## What you’ll do in short

1. Put your code on **GitHub** (so Vercel can use it).
2. Sign up on **Vercel** and connect your GitHub.
3. Tell Vercel which **environment variables** to use (Firebase + OpenAI keys).
4. Let Vercel **deploy** your site and give you a public URL.
5. Add that URL in **Firebase** so login works.

---

## Part 1: Put your code on GitHub

### 1.1 Install Git (if you don’t have it)

- Download from **https://git-scm.com/download/win**
- Run the installer (defaults are fine). Restart the terminal after installing.

Check:

```bash
git --version
```

You should see a version number.

### 1.2 Create a GitHub account and a new repository

1. Go to **https://github.com** and sign up (or log in).
2. Click the **+** (top right) → **New repository**.
3. **Repository name:** e.g. `concept-clarity-poc`.
4. Leave **Public** selected. Do **not** tick “Add a README” or “Add .gitignore”.
5. Click **Create repository**.

### 1.3 Push your project to GitHub

Open **Command Prompt** or **PowerShell** and run these one by one (replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name):

```bash
cd "e:\Vivek\My Learnings\Project\Learning APP\concept-clarity-poc"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Example: if your username is `johndoe` and repo is `concept-clarity-poc`, the URL is:

`https://github.com/johndoe/concept-clarity-poc.git`

Git may ask for your GitHub username and password. For password, use a **Personal Access Token** (GitHub → Settings → Developer settings → Personal access tokens → Generate new token). Use that token as the password.

After `git push` succeeds, refresh your repo page on GitHub; you should see all your project files.

---

## Part 2: Deploy on Vercel

### 2.1 Sign up and import the project

1. Go to **https://vercel.com**.
2. Click **Sign Up** and choose **Continue with GitHub** (so Vercel can read your repos).
3. After login, click **Add New** → **Project**.
4. Under **Import Git Repository**, find your repo (e.g. `concept-clarity-poc`) and click **Import**.

### 2.2 Configure (leave defaults)

- **Framework Preset:** Next.js (auto).
- **Root Directory:** leave as is (usually empty or `.`).
- Do **not** change Build Command or Output Directory.

### 2.3 Add environment variables (important)

Before deploying, add your keys so the live site can use Firebase and OpenAI.

1. On the same “Configure Project” page, open the **Environment Variables** section.
2. For each row, set **Name** and **Value** (use the same values you have in your local `.env.local`):

| Name | Value (paste your real value) |
|------|-------------------------------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Your Firebase API key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | e.g. `your-project.firebaseapp.com` |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Your Firebase project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | e.g. `your-project.appspot.com` |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | From Firebase project settings |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | From Firebase project settings |
| `OPENAI_API_KEY` | Your OpenAI API key (for “Ask a doubt”) |

3. For each variable, select **Production** (and **Preview** if you want preview deployments to work too).
4. Click **Deploy**.

### 2.4 Wait for the build

Vercel will build and deploy. When it’s done, you’ll see a URL like:

**https://concept-clarity-poc-xxxx.vercel.app**

Click it to open your live site. Bookmark this URL.

---

## Part 3: Allow your Vercel URL in Firebase (for login)

If you don’t do this, login will fail on the live site with “unauthorized domain”.

1. Open **https://console.firebase.google.com** → select your project.
2. Go to **Authentication** → **Settings** (or the **Sign-in method** tab).
3. Find **Authorized domains**.
4. Click **Add domain**.
5. Enter your Vercel domain, e.g. `concept-clarity-poc-xxxx.vercel.app` (no `https://`).
6. Save.

Now try logging in on your Vercel URL; it should work.

---

## After the first deploy

- **Code changes:** Edit code on your PC, then run:
  ```bash
  git add .
  git commit -m "Describe your change"
  git push
  ```
  Vercel will automatically build and deploy again.

- **Change env vars:** In Vercel → your project → **Settings** → **Environment Variables**. Edit or add variables, then **Redeploy** from the **Deployments** tab.

- **Your live URL:** It’s the one Vercel showed after deploy (e.g. `https://your-project.vercel.app`). You can also add a custom domain in Vercel → **Settings** → **Domains**.

---

## Quick checklist

- [ ] Node.js installed, `npm install` and `npm run dev` work locally (see **RUN_LOCALLY.md**).
- [ ] `.env.local` filled with Firebase (and OpenAI) keys.
- [ ] Git installed, code pushed to a GitHub repository.
- [ ] Vercel account created, project imported from GitHub.
- [ ] All 7 environment variables added in Vercel.
- [ ] Deploy finished and live URL works.
- [ ] Vercel domain added in Firebase **Authorized domains**.

If you get stuck, note the exact error message or screen you’re on and use that to search or ask for help.
