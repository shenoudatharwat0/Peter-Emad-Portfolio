# Peter Emad — Mobile Developer Portfolio

A premium, responsive, and animated developer portfolio for Peter Emad, built with React, Vite, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Live Demo

Once deployed, the live website will be available at:
[https://shenoudatharwat0.github.io/Peter-Emad-Portfolio/](https://shenoudatharwat0.github.io/Peter-Emad-Portfolio/)

---

## 🛠️ Tech Stack

- **Framework**: React + Vite (TypeScript)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

---

## 💻 Local Development

To run the project locally, follow these steps:

1. Navigate to the `app` directory:
   ```bash
   cd app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## 📦 Deployment to GitHub Pages

This project is fully configured for automated deployment to GitHub Pages via **GitHub Actions**.

### 1. Enable GitHub Actions in Repository Settings
To allow the deployment workflow to publish your site, ensure GitHub Actions has permission to deploy:
1. Go to your repository on GitHub: `https://github.com/shenoudatharwat0/Peter-Emad-Portfolio`
2. Click on **Settings** (tab at the top).
3. In the left sidebar, click on **Pages**.
4. Under **Build and deployment** -> **Source**, select **GitHub Actions** from the dropdown menu (instead of "Deploy from a branch").

### 2. Push to GitHub
Commit and push your local commits to your remote repository:
```bash
git push -u origin main
```

Upon pushing to the `main` (or `master`) branch, the deployment workflow will trigger automatically:
1. It builds the Vite project.
2. It bundles the production-ready static assets.
3. It deploys the static files directly to GitHub Pages.

You can monitor the deployment progress in the **Actions** tab of your repository on GitHub.
