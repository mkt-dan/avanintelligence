# GitHub Repository Configuration

This document describes the GitHub setup and integration for Avan Intelligence.

## Repository Information

- **Repository**: `mkt-dan/avanintelligence`
- **URL**: https://github.com/mkt-dan/avanintelligence
- **Main Branch**: `main`
- **Production Domain**: https://avanintelligence.com

## File Structure

```
.github/
├── workflows/
│   └── deploy.yml          # CI/CD pipeline for automatic deployment
└── CODEOWNERS             # Code ownership rules (optional)

DEPLOYMENT.md              # Comprehensive deployment guide
GITHUB-CONFIG.md           # This file
README.md                  # Project documentation
```

## Key Configuration Files

### 1. **package.json**
- Includes repository URL: `https://github.com/mkt-dan/avanintelligence.git`
- Homepage: `https://avanintelligence.com`
- All metadata for the project

### 2. **.env.local**
- Base URL configured to `https://avanintelligence.com`
- Site name: `Avan Intelligence`
- Not committed to Git (in `.gitignore`)

### 3. **.env.example**
- Template for environment variables
- Copy to `.env.local` for local development

### 4. **vercel.json**
- Vercel deployment configuration
- Specifies build command, env variables, and domains
- Auto-deploys to avanintelligence.com

### 5. **src/config/site.ts**
- Central site configuration
- Exports `siteConfig` with URL, name, and social links
- Used throughout the app for consistent settings

## Branching Strategy

### Main Branch (`main`)
- Production-ready code
- All commits are automatically deployed to avanintelligence.com
- Requires build success and linting
- Protected branch (recommended settings below)

### Feature Branches
- Create from `main`: `git checkout -b feature/your-feature-name`
- Push to create pull requests
- PRs trigger automatic preview deployments
- Merge only after review and tests pass

### Branch Protection Rules (Recommended)

In GitHub → Settings → Branches → Add rule for `main`:

- ✅ Require a pull request before merging
- ✅ Dismiss stale pull request approvals
- ✅ Require code review before merging (at least 1)
- ✅ Require branches to be up to date before merging
- ✅ Require status checks to pass before merging
  - `build` (Astro build)
  - `lint` (TypeScript/ESLint)

## Continuous Integration/Deployment

### GitHub Actions Workflow

File: `.github/workflows/deploy.yml`

**Triggers:**
- **On push to `main`**: Deploy to production
- **On pull request**: Create preview deployment

**Steps:**
1. Checkout code
2. Setup Node.js 18
3. Install dependencies
4. Run linter
5. Build application
6. Deploy to Vercel (production only)

**Secrets Required:**
```
VERCEL_TOKEN      # Vercel authentication token
VERCEL_ORG_ID     # Vercel organization ID
VERCEL_PROJECT_ID # Vercel project ID
```

### Setup GitHub Actions

1. **Get Vercel Credentials**
   ```bash
   vercel whoami
   vercel projects list
   ```

2. **Add Secrets to GitHub**
   - Go to repo → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add three secrets above

3. **Verify Workflow**
   - Go to repo → Actions
   - You should see workflow runs for each push

## Issue & PR Templates

### Create Issue Template

File: `.github/ISSUE_TEMPLATE/bug_report.md`

```markdown
---
name: Bug Report
about: Report a bug to help us improve
---

## Describe the bug
A clear description of what the bug is.

## Steps to reproduce
1. Go to '...'
2. Click on '....'
3. See error

## Expected behavior
What should happen?

## Screenshots
If applicable, add screenshots

## Environment
- OS: [e.g., macOS]
- Browser: [e.g., Chrome]
- Node version: [e.g., 18.0.0]
```

### Create PR Template

File: `.github/pull_request_template.md`

```markdown
## Description
Brief description of changes

## Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Enhancement
- [ ] Documentation

## Related Issues
Closes #(issue number)

## Testing
How was this tested?

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added where needed
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests pass locally
```

## Local Development Workflow

### Setup

```bash
# Clone repository
git clone https://github.com/mkt-dan/avanintelligence.git
cd avanintelligence

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Start development server
npm run dev
```

### Make Changes

```bash
# Create feature branch
git checkout -b feature/amazing-feature

# Make your changes
# Edit files as needed

# Check for errors
npm run check

# Test build
npm run build

# Commit changes
git add .
git commit -m "feat: add amazing feature"

# Push to GitHub
git push origin feature/amazing-feature
```

### Create Pull Request

1. Go to https://github.com/mkt-dan/avanintelligence
2. Click "Compare & pull request"
3. Fill in PR description
4. Request reviewer if needed
5. Wait for checks to pass
6. Merge when approved

## Deployment Pipeline

```
┌─────────────────────────────────────┐
│  Push to main branch                │
└────────────────┬────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│  GitHub Actions Workflow Triggers   │
│  - Install dependencies             │
│  - Run linter                       │
│  - Build Astro app                  │
└────────────────┬────────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
        ▼                 ▼
    ❌ FAIL          ✅ SUCCESS
        │                 │
        ▼                 ▼
   Stop/Alert    Deploy to Vercel
   Notify team          │
                        ▼
                  Live on avanintelligence.com
                  SSL cert auto-provisioned
```

## Monitoring & Alerts

### Check Deployment Status

```bash
# Via GitHub
1. Go to repo → Actions
2. Click latest workflow run
3. Expand "Deploy to Vercel" step

# Via Vercel
1. Go to vercel.com/dashboard
2. Click avanintelligence project
3. View deployment status
```

### Common Issues

| Issue | Solution |
|-------|----------|
| Build fails | Check logs, fix TypeScript/ESLint errors, push fix |
| Deployment hangs | Check Vercel logs, restart manually |
| Environment vars missing | Add secrets in GitHub, re-run workflow |
| DNS not updating | Can take 24-48 hours, verify registrar settings |

## Access Control

### Who Can Deploy?

- **Main branch**: Only merged PRs deploy
- **Anyone with push access** to main branch triggers deployment
- **Recommended**: Require at least 1 approval before merge

### Team Permissions

In GitHub → Settings → Collaborators:

- **Admin**: Full access (can merge, delete)
- **Maintain**: Deploy permissions (can merge)
- **Write**: Can push to branches (need PR review)
- **Read**: Can view only (no commit access)

## Secrets Management

### What's Secret?

- `.env.local` - Not committed (ignored)
- `VERCEL_TOKEN` - GitHub secret (hidden)
- `VERCEL_ORG_ID` - GitHub secret (hidden)
- `VERCEL_PROJECT_ID` - GitHub secret (hidden)

### Never Commit:
- API keys
- Passwords
- Tokens
- Private credentials

## Documentation

All documentation is in Markdown:

- `README.md` - Main project documentation
- `DEPLOYMENT.md` - Deployment instructions
- `GITHUB-CONFIG.md` - This file
- `src/config/site.ts` - Code comments

## Contributing Guidelines

1. **Fork** the repository (optional)
2. **Create** a feature branch
3. **Make** your changes
4. **Test** locally (`npm run build`)
5. **Push** your branch
6. **Create** a pull request
7. **Discuss** and iterate
8. **Merge** when approved

## Future Enhancements

- [ ] Add automated testing (Jest, Playwright)
- [ ] Add code coverage tracking
- [ ] Add performance budgets
- [ ] Add security scanning
- [ ] Add dependency updates via Dependabot
- [ ] Add pre-commit hooks (husky)

---

**Last Updated**: June 1, 2026
**Repository**: https://github.com/mkt-dan/avanintelligence
