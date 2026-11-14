# Echoes of Justice - Deployment Configuration

## Table of Contents

1. [Deployment Overview](#deployment-overview)
2. [Environment Variables](#environment-variables)
3. [Build Commands](#build-commands)
4. [Deployment Scripts](#deployment-scripts)
5. [CI/CD Configuration](#cicd-configuration)
6. [Environment-Specific Settings](#environment-specific-settings)
7. [Rollback Procedures](#rollback-procedures)

---

## Deployment Overview

Echoes of Justice uses a modern deployment approach:

### Supported Platforms

| Platform | Status | Notes |
|----------|--------|-------|
| Netlify | Primary | Frontend hosting |
| Render/DigitalOcean | Alternative | Full-stack hosting |
| Docker | Container | Production deployments |

### Deployment Types

| Type | Trigger | Destination |
|------|---------|-------------|
| Production | `main` push | Live production |
| Staging | `develop` push | Staging environment |
| Preview | PR opened | Deploy preview |

---

## Environment Variables

### Required Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `SECRET_KEY` | JWT signing secret | Yes |
| `NEXT_PUBLIC_API_URL` | API endpoint URL | Yes |
| `NEXT_PUBLIC_SITE_URL` | Frontend URL | Yes |
| `STRIPE_SECRET_KEY` | Stripe secret key (payments) | Payments |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret | Payments |

### Optional Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Email sending |
| `SUPABASE_URL` | Auth provider |
| `STRIPE_SECRET_KEY` | Payment processing |

### Setting Variables

#### GitHub Repository Secrets

1. Go to Repository → Settings → Secrets and variables → Actions
2. Add secrets:
   - `DATABASE_URL`
   - `SECRET_KEY`
   - `NEXT_PUBLIC_API_URL`

#### Netlify Environment

1. Site Settings → Build & Deploy → Environment
2. Add variables

---

## Build Commands

### Frontend Build

```bash
# Development
npm run dev

# Production build
npm run build

# Type checking
npx tsc --noEmit
```

### Backend Build

```bash
# Start API server
uvicorn main:app --reload

# Production server
uvicorn main:app --host 0.0.0.0 --port 8000

# Run migrations
backend/venv/bin/python -m alembic -c backend/alembic.ini upgrade head

# Seed database
backend/venv/bin/python -m backend.scripts.seed
```

### Full Stack Build

```bash
# Frontend
npm run build

# Backend (Docker)
docker build -t echoes-backend -f backend/Dockerfile .
docker build -t echoes-frontend -f Dockerfile.web .
```

### Seed the Database

After migrations are applied, seed the database with starter content (cases, resources, admin user):

```bash
backend/venv/bin/python -m alembic -c backend/alembic.ini upgrade head
backend/venv/bin/python -m backend.scripts.seed
```

### Stripe Webhook

`STRIPE_WEBHOOK_SECRET` **must be set** for the backend to accept Stripe payment events at `POST /webhooks/stripe`. In production, set it via the GitHub repository secrets or platform environment variables, with the value from the Stripe Dashboard (Developers → Webhooks).

For local development, forward Stripe events to the backend:

```bash
stripe listen --forward-to localhost:8000/webhooks/stripe
```

---

## Deployment Scripts

### Deploy to Production

```bash
./deploy.sh production
```

### Deploy to Staging

```bash
./deploy.sh staging
```

### Deploy.sh Script Options

```bash
# Available commands
./deploy.sh production    # Full production deploy
./deploy.sh staging       # Staging deploy
./deploy.sh rollback      # Rollback last deploy
./deploy.sh health       # Health check
./deploy.sh logs         # View logs
```

### Script Features

- Automatic linting and testing
- Build verification
- Deployment to configured platform
- Health checks
- Rollback capability

---

## CI/CD Configuration

### GitHub Actions Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `ci.yml` | Push/PR | Main CI pipeline |
| `deploy-staging.yml` | `develop` push | Staging deployment |
| `branch-checks.yml` | PR | Branch validation |

### CI Pipeline Steps

```yaml
1. Checkout code
2. Setup Node.js/Python
3. Install dependencies
4. Run linters
5. Run tests
6. Security audit
7. Build application
8. Deploy to target
```

### Environment Variables in CI

Add to GitHub repository secrets:

- `NETLIFY_AUTH_TOKEN` (Netlify)
- `NETLIFY_SITE_ID` (Netlify)
- `CLOUDFLARE_API_TOKEN` (Cloudflare)
- `DATABASE_PASSWORD` (Database)

---

## Environment-Specific Settings

### Development

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Staging

```bash
# .env.staging
NEXT_PUBLIC_API_URL=https://staging.api.echoesofjustice.org
NEXT_PUBLIC_SITE_URL=https://staging.echoesofjustice.org
```

### Production

```bash
# .env.production
NEXT_PUBLIC_API_URL=https://api.echoesofjustice.org
NEXT_PUBLIC_SITE_URL=https://echoesofjustice.org
```

### Configuration Files

- `netlify.toml` - Netlify build settings
- `_redirects` - URL redirects
- `nginx.conf` - Nginx configuration (if self-hosted)

---

## Rollback Procedures

### Netlify Rollback

1. Go to Netlify Dashboard
2. Select site
3. Deploys → Deploy history
4. Click "Redeploy" on desired version

### Docker Rollback

```bash
# List deployments
docker ps

# Stop current
docker stop echoes-justice

# Start previous
docker run -d -p 3000:3000 echoes-justice:v1.0.0
```

### Kubernetes Rollback

```bash
# Rollback deployment
kubectl rollout undo deployment/echoes-justice

# Check rollout status
kubectl rollout status deployment/echoes-justice
```

### Git Rollback

```bash
# Revert to previous commit
git revert HEAD~1

# Force push (use with caution)
git push --force-with-lease origin main
```

---

## Monitoring & Health Checks

### Health Endpoints

- Frontend: `https://your-site.com/api/health`
- Backend: `https://api.your-site.com/health`

### Monitoring Services

- **Uptime**: UptimeRobot (5 min checks)
- **Logs**: Cloudflare Logs / Docker logs
- **Errors**: Sentry
- **Performance**: Lighthouse CI

---

## Support

For deployment issues:
- GitHub Issues: https://github.com/echoes-of-justice/echoes-of-justice/issues
- Technical Contact: admin@echoesofjustice.org