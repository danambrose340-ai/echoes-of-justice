#!/bin/bash
# Echoes of Justice - Deployment Script
# Usage: ./deploy.sh [production|staging]
#
# Runs the checks, then lets the Netlify CLI build the Next.js app from
# netlify.toml and upload it. Requires NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID.

set -euo pipefail

ENVIRONMENT="${1:-staging}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

case "$ENVIRONMENT" in
    production|staging) ;;
    *)
        echo "[ERROR] Unknown environment '${ENVIRONMENT}'. Use 'production' or 'staging'." >&2
        exit 1
        ;;
esac

if [ -z "${NETLIFY_AUTH_TOKEN:-}" ] || [ -z "${NETLIFY_SITE_ID:-}" ]; then
    echo "[ERROR] NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID must be set." >&2
    exit 1
fi

cd "$SCRIPT_DIR"

echo "[INFO] Deploying Echoes of Justice to ${ENVIRONMENT}"

echo "[INFO] Installing dependencies..."
npm ci --no-audit

echo "[INFO] Running lint, typecheck and tests..."
npm run lint
npm run typecheck
npm test

echo "[INFO] Building and deploying with the Netlify CLI..."
if [ "$ENVIRONMENT" = "production" ]; then
    npx --yes netlify-cli@27 deploy --build --prod --message "Production deploy"
else
    npx --yes netlify-cli@27 deploy --build --alias staging --message "Staging deploy"
fi

echo "[INFO] Deployment to ${ENVIRONMENT} completed"
