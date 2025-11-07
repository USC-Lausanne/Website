
# 0009 - Git Command Workflow

## Status
**ACCEPTED** - This document outlines the standardized Git workflow for all team members.

## Context
This workflow ensures consistent collaboration, clear history, and maintainable codebase through standardized branching, naming conventions, and merge strategies.

## 1. Setup and Branch Creation

### Start from the main branch
```bash
git checkout main
git pull origin main
```

### Create a new feature branch
```bash
git checkout -b feature/add-user-profile
```

## 2. Branch Naming Convention

### 📌 Format
```
<type>/<area>-<short-description>
```

### Components
- **`<type>`**: Nature of the work
  - `feature` - New functionality
  - `bugfix` - Bug fixes
  - `hotfix` - Critical production fixes
  - `experiment` - Experimental changes
  - `refactor` - Code restructuring
  - `docs` - Documentation updates
  - `test` - Test additions/modifications

- **`<area>`**: Part of codebase (optional but recommended)
  - `frontend` - React/UI components
  - `backend` - FastAPI/Python backend
  - `ai` - AI/ML model components
  - `database` - Database schema/migrations
  - `api` - API endpoints
  - `auth` - Authentication/authorization

- **`<short-description>`**: Concise, kebab-case summary

### ✅ Good Examples
```
feature/frontend-login-form
bugfix/backend-auth-error
experiment/ai-batch-normalization
hotfix/database-connection-timeout
refactor/api-user-endpoints
docs/readme-setup-instructions
```

### ❌ Avoid
```
new-stuff
fix
john-working-branch
temp
```

## 3. Development Workflow

### Making changes
```bash
# Stage specific files
git add src/components/LoginForm.tsx
git add tests/test_login.py

# Or stage all changes
git add .

# Commit with descriptive message
git commit -m "feat: add user login form with validation

- Add LoginForm component with email/password fields
- Implement form validation with error messages
- Add unit tests for form submission
- Update API endpoint to handle login requests"
```

### Commit Message Convention
```
<type>: <description>

<optional body>

<optional footer>
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting, missing semicolons, etc.
- `refactor` - Code change that neither fixes a bug nor adds a feature
- `test` - Adding missing tests
- `chore` - Updating build tasks, package manager configs, etc.

## 4. Keeping Branch Updated

### Fetch latest changes
```bash
git fetch origin
```

### Rebase onto main (recommended)
```bash
git rebase origin/main
```

### If conflicts occur:
```bash
# Resolve conflicts in your editor
git add <resolved-files>
git rebase --continue
```

### Alternative: Merge (if rebasing is problematic)
```bash
git merge origin/main
```

## 5. Pushing Changes

### First push
```bash
git push -u origin feature/add-user-profile
```

### Subsequent pushes
```bash
git push
```

### Force push after rebase (use carefully)
```bash
git push --force-with-lease
```

## 6. Pull Request Process

### Opening a PR
1. Navigate to GitHub repository
2. Click "New Pull Request"
3. Select your branch as source, `main` as target
4. Fill out PR template:
   ```markdown
   ## Description
   Brief description of changes
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update
   
   ## Testing
   - [ ] Unit tests pass
   - [ ] Integration tests pass
   - [ ] Manual testing completed
   
   ## Screenshots (if applicable)
   ```

### Review Process
- Request reviews from relevant team members
- Address feedback promptly
- Update branch if needed:
  ```bash
  git add .
  git commit -m "fix: address review feedback"
  git push
  ```

### Merging
- **Squash and merge** (preferred for feature branches)
- Delete branch after merge
- Pull latest main:
  ```bash
  git checkout main
  git pull origin main
  git branch -d feature/add-user-profile
  ```

## 7. Common Scenarios

### Working on multiple features
```bash
# Switch between branches
git checkout feature/user-profile
git checkout feature/dashboard-ui

# List all branches
git branch -a
```

### Stashing work in progress
```bash
# Stash changes
git stash push -m "WIP: user profile form"

# Switch branches and come back
git checkout main
git checkout feature/user-profile

# Apply stash
git stash pop
```

### Fixing mistakes
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Amend last commit message
git commit --amend -m "New commit message"
```

## 8. Best Practices

### ✅ Do
- Keep commits small and focused
- Write descriptive commit messages
- Test before pushing
- Rebase regularly to stay current
- Use meaningful branch names
- Delete merged branches

### ❌ Don't
- Commit directly to main
- Force push to shared branches (unless using --force-with-lease)
- Include sensitive data in commits
- Create unnecessarily large commits
- Use generic commit messages like "fix" or "update"

## Emergency Procedures

### Hotfix for production issue
```bash
# Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-security-fix

# Make minimal fix
git add .
git commit -m "hotfix: patch security vulnerability in auth"

# Push and create urgent PR
git push -u origin hotfix/critical-security-fix
```

### Rollback deployed feature
```bash
# Find commit to revert
git log --oneline

# Create revert commit
git revert <commit-hash>
git push origin main
```

## Troubleshooting

### Branch diverged error
```bash
# If you get "diverged" error
git fetch origin
git rebase origin/main
# Resolve conflicts if any
git push --force-with-lease
```

### Accidentally committed to wrong branch
```bash
# Move commit to correct branch
git log --oneline  # find commit hash
git checkout correct-branch
git cherry-pick <commit-hash>
git checkout wrong-branch
git reset --hard HEAD~1
```