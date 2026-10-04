# Git Repository Rules

1. **Semantic Commits**: All commit messages must follow the Conventional Commits specification (e.g., `feat:`, `fix:`, `docs:`, `style:`, `refactor:`).
2. **No Checking in Secrets/PII**: Never commit API keys, database credentials, or Personally Identifiable Information (PII) to the repository. The `.git/hooks/pre-commit` script will enforce this.
3. **Clean History**: Do not commit scratch files, large datasets (like `node_modules` or `.venv`), or unapproved testing specs.
4. **Descriptive PRs**: When merging to main, provide a clear summary of what was fixed or implemented.
5. **Guardrail for Destructive Actions (CRITICAL)**: Do NOT perform large-scale architectural deletions, rip out core features (like databases), or permanently delete important files solely based on automated workflow approvals (like a `Proceed` button click). Automated workflows can be triggered by system policies without the user actually reading the proposal. Before executing any destructive command (`rm`, `git rm`, or mass code deletion), you MUST explicitly wait for the user to type a chat message approving the specific deletion.
