# Portfolio

Static portfolio site for **Sujan Parajuli**.

## Live site

After you enable GitHub Pages (see below), the site will be available at:

**https://sujanparajuli2704.github.io/Portfolio/**

## Publish from this folder

1. Create a repository on GitHub named `Portfolio` under user `sujanparajuli2704` (if it does not exist yet).
2. In the repo on GitHub: **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
3. From your computer, in this project folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/sujanparajuli2704/Portfolio.git
git push -u origin main
```

4. Wait for the **Deploy GitHub Pages** workflow to finish (**Actions** tab). Then open the URL above.

To update the site later: commit your changes and `git push` to `main`.
