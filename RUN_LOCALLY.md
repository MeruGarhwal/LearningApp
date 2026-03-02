# How to run this website on your computer

Follow these steps on your **local machine** (your laptop or PC).

---

## 1. Install Node.js (one-time)

You need Node.js to run the project. If you’re not sure you have it:

1. Go to **https://nodejs.org**
2. Download the **LTS** version (recommended).
3. Run the installer and follow the steps (default options are fine).
4. **Close and reopen** any terminal/command prompt after installing.

To check it’s installed, open a **new** terminal and run:

```bash
node -v
npm -v
```

You should see version numbers (e.g. `v20.x.x` and `10.x.x`). If you see “not recognized”, Node.js is not in your PATH; try restarting the computer and try again.

---

## 2. Open the project folder in terminal

- **Option A – From File Explorer**  
  Go to: `e:\Vivek\My Learnings\Project\Learning APP\concept-clarity-poc`  
  In the address bar, type `cmd` and press Enter. A terminal will open in that folder.

- **Option B – From terminal**  
  Open **Command Prompt** or **PowerShell**, then run:

```bash
cd "e:\Vivek\My Learnings\Project\Learning APP\concept-clarity-poc"
```

---

## 3. Install dependencies (first time only)

In the same terminal, run:

```bash
npm install
```

Wait until it finishes (it may take 1–2 minutes). Do this once per project (or after pulling new code).

---

## 4. Add environment variables (first time only)

The app needs Firebase and (optionally) OpenAI keys to work fully.

1. In the project folder, find the file **`.env.example`** (or **`.env.local.example`**).
2. Copy it and rename the copy to **`.env.local`** (in the same folder).
3. Open **`.env.local`** in Notepad or any editor.
4. Fill in the values (get them from Firebase Console and, if you use doubt-solving, from OpenAI):
   - Firebase: https://console.firebase.google.com → your project → **Project settings** (gear icon) → **Your apps** → copy the config values.
   - OpenAI: https://platform.openai.com/api-keys → create/copy an API key and put it in `OPENAI_API_KEY` in `.env.local`.
5. Save the file.  
   **Do not** share or commit `.env.local`; it contains secrets.

If you leave `.env.local` empty, the app may still start but login and some features will not work until you add the values.

---

## 5. Start the website

In the same terminal, run:

```bash
npm run dev
```

You should see something like:

```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
```

---

## 6. Open the website in your browser

1. Open a browser (Chrome, Edge, etc.).
2. Go to: **http://localhost:3000**
3. You should see the Concept Clarity app.

To stop the server, go back to the terminal and press **Ctrl + C**.

---

## Summary – commands to run (in order)

```bash
cd "e:\Vivek\My Learnings\Project\Learning APP\concept-clarity-poc"
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser.

---

## If something goes wrong

| Problem | What to do |
|--------|------------|
| `npm` or `node` not recognized | Install Node.js from nodejs.org and restart the terminal (or PC). |
| `npm install` fails | Make sure you’re in the project folder and have internet. Try again. |
| `npm run dev` fails | Run `npm install` first. If it still fails, copy the error message and search for it online or ask for help. |
| Page is blank or errors | Add the Firebase keys in `.env.local` as in step 4 and restart with `npm run dev`. |
| Port 3000 already in use | Either close the other app using port 3000, or run: `npm run dev -- -p 3001` and open http://localhost:3001 instead. |
