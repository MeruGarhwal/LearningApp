# Push to Vercel – Quick steps

Get your site live at a public URL (e.g. `https://concept-clarity-poc-xxx.vercel.app`).

---

## 1. Push code to GitHub

In **PowerShell** or **Command Prompt**, run (replace `YOUR_GITHUB_USERNAME` and `YOUR_REPO_NAME`):

```powershell
cd "e:\Vivek\My Learnings\Project\Learning APP\concept-clarity-poc"
git init
git add .
git commit -m "Initial commit - Concept Clarity POC"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

- **First time?** Create a repo at https://github.com/new (name e.g. `concept-clarity-poc`, leave "Add README" **unchecked**).
- If Git asks for password, use a **Personal Access Token**: GitHub → Settings → Developer settings → Personal access tokens → Generate (repo scope).

---

## 2. Deploy on Vercel

1. Go to **https://vercel.com** → **Sign up** or **Log in** → choose **Continue with GitHub**.
2. **Add New** → **Project**.
3. **Import** your repository (e.g. `concept-clarity-poc`).
4. Before clicking Deploy, open **Environment Variables** and add (same as in your `.env.local`):

   | Name | Value |
   |------|--------|
   | `NEXT_PUBLIC_FIREBASE_API_KEY` | (your value) |
   | `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | (your value) |
   | `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | (your value) |
   | `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | (your value) |
   | `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | (your value) |
   | `NEXT_PUBLIC_FIREBASE_APP_ID` | (your value) |
   | `OPENAI_API_KEY` | (your value) |

   Scope: **Production** (and **Preview** if you want).

5. Click **Deploy**. Wait for the build to finish.
6. Click the generated URL (e.g. `https://concept-clarity-poc-xxxx.vercel.app`) to open your site.

---

## 3. (Optional) Firebase authorized domain

If you use Firebase Auth, add the Vercel domain so login works on the live site:

1. **Firebase Console** → your project → **Authentication** → **Settings** → **Authorized domains**.
2. **Add domain** → paste your Vercel hostname (e.g. `concept-clarity-poc-xxxx.vercel.app`, no `https://`).

---

## Updating the live site

After changing code:

```powershell
git add .
git commit -m "Your message"
git push
```

Vercel will automatically build and deploy; your live URL will update in a couple of minutes.
