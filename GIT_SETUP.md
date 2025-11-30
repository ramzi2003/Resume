# Git Setup and Push Instructions

## Initial Setup (if not already done)

If you haven't initialized git in this project yet:

```bash
# Initialize git repository (if not already initialized)
git init

# Add your existing remote repository
git remote add origin <your-repository-url>

# Or if you already have a remote, check it:
git remote -v

# If you need to change the remote URL:
git remote set-url origin <your-repository-url>
```

## First Time Push to Existing Repository

If this is the first time pushing to an existing repository:

```bash
# Stage all files
git add .

# Commit your changes
git commit -m "Initial commit: Portfolio website with Docker setup"

# Push to the repository
# If the remote has content, you might need to pull first:
git pull origin main --allow-unrelated-histories
# (or use 'master' instead of 'main' if that's your default branch)

# Then push
git push -u origin main
# (or 'master' if that's your default branch)
```

## Regular Workflow (After Initial Setup)

```bash
# Check status
git status

# Stage changes
git add .

# Or stage specific files
git add src/components/Header.astro

# Commit changes
git commit -m "Your commit message describing the changes"

# Push to repository
git push
```

## Common Git Commands

```bash
# Check current branch
git branch

# Create and switch to a new branch
git checkout -b feature-name

# Switch branches
git checkout main

# View commit history
git log --oneline

# View changes
git diff

# Discard local changes (be careful!)
git checkout -- <file>

# Pull latest changes from remote
git pull
```

## If You Get Conflicts

If you get merge conflicts when pulling:

```bash
# Pull and merge
git pull origin main

# If conflicts occur, resolve them in the files, then:
git add .
git commit -m "Resolve merge conflicts"
git push
```

## Repository URL Formats

Your repository URL will look like one of these:

- **HTTPS**: `https://github.com/username/repo-name.git`
- **SSH**: `git@github.com:username/repo-name.git`
- **GitLab**: `https://gitlab.com/username/repo-name.git`
- **Bitbucket**: `https://bitbucket.org/username/repo-name.git`

## Authentication

### For HTTPS:
- GitHub: Use Personal Access Token (not password)
- GitLab: Use Personal Access Token
- Bitbucket: Use App Password

### For SSH:
- Make sure you have SSH keys set up with your Git provider
- Test connection: `ssh -T git@github.com` (or gitlab.com, etc.)

## Example: Complete First Push

```bash
# 1. Check if git is initialized
git status

# 2. If not initialized, initialize it
git init

# 3. Add remote (replace with your actual URL)
git remote add origin https://github.com/yourusername/your-repo.git

# 4. Add all files
git add .

# 5. Commit
git commit -m "Add portfolio website with Docker deployment setup"

# 6. Check remote branch name (usually 'main' or 'master')
# If you're not sure, check on GitHub/GitLab

# 7. Push (replace 'main' with your branch name if different)
git push -u origin main
```

## Important Notes

- **Never commit sensitive data**: The `.gitignore` file excludes `.env` files, but double-check before committing
- **Don't commit `node_modules`**: Already in `.gitignore`
- **Don't commit build files**: `dist/` and `.astro/` are already ignored
- **Review before committing**: Use `git status` to see what will be committed

