---
description: Enforces pull requests and forbids direct commits to the main branch.
---

# Version Control & Contribution Policy

The repository has been stabilized and productionized. Moving forward, AI agents and automated workflows MUST NOT commit directly to the `main` branch. 

1. **Branching Strategy:**
   For any new feature, bug fix, or refactor, you must create a new branch off `main` using the format `feature/<name>`, `bugfix/<name>`, or `chore/<name>`.

2. **No Direct Pushes to Main:**
   Never execute `git push origin main` or `git commit` directly on the `main` branch. 

3. **Pull Requests:**
   Once your work is complete on the feature branch, push the branch to the remote and instruct the user to review it. If the user requests you to create the PR, use the `gh` CLI (e.g., `gh pr create`) if available, or print the git push output URL for the user to open the PR.
