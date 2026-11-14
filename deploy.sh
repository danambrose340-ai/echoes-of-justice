#!/bin/bash
# Echoes of Justice - Deployment Script
# Usage: ./deploy.sh [production|staging]

set -e

ENVIRONMENT="${1:-staging}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DIST_DIR="${SCRIPT_DIR}/dist"

echo "========================================"
echo "Echoes of Justice Deployment Script"
echo "Environment: ${ENVIRONMENT}"
echo "========================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check prerequisites
check_prerequisites() {
    log_info "Checking prerequisites..."

    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed"
        exit 1
    fi

    if ! command -v npm &> /dev/null; then
        log_error "npm is not installed"
        exit 1
    fi

    if [ "$ENVIRONMENT" = "production" ] && [ -z "$NETLIFY_AUTH_TOKEN" ]; then
        log_warn "NETLIFY_AUTH_TOKEN not set. Production deploy may fail."
    fi

    if [ "$ENVIRONMENT" != "production" ] && [ -z "$CLOUDFLARE_API_TOKEN" ]; then
        log_warn "CLOUDFLARE_API_TOKEN not set. Staging deploy may fail."
    fi

    log_info "Prerequisites check passed"
}

# Install dependencies
install_dependencies() {
    log_info "Installing dependencies..."
    cd "$SCRIPT_DIR"
    npm ci --prefer-offline --no-audit
    log_info "Dependencies installed"
}

# Run lint and tests
run_checks() {
    log_info "Running lint checks..."

    cd "$SCRIPT_DIR"

    # HTML validation (if html-validate is available)
    if command -v html-validate &> /dev/null; then
        html-validate index.html || log_warn "HTML validation found issues"
    fi

    log_info "Checks completed"
}

# Build the site
build_site() {
    log_info "Building site for ${ENVIRONMENT}..."

    cd "$SCRIPT_DIR"

    # Clean dist directory
    rm -rf "$DIST_DIR"
    mkdir -p "$DIST_DIR"

    # Copy source files
    cp index.html "$DIST_DIR/"
    cp -r assets "$DIST_DIR/"

    # Minify HTML (if html-minifier is available)
    if command -v html-minifier-terser &> /dev/null; then
        html-minifier-terser \
            --collapse-whitespace \
            --remove-comments \
            --remove-redundant-attributes \
            --minify-css true \
            -o "$DIST_DIR/index.html" "$DIST_DIR/index.html"
        log_info "HTML minified"
    fi

    # Copy pages directory if it exists
    if [ -d "$SCRIPT_DIR/pages" ]; then
        cp -r "$SCRIPT_DIR/pages" "$DIST_DIR/pages"
    fi

    # Copy robots.txt if exists
    if [ -f "$SCRIPT_DIR/robots.txt" ]; then
        cp "$SCRIPT_DIR/robots.txt" "$DIST_DIR/"
    fi

    log_info "Build completed"
}

# Deploy to Netlify
deploy_netlify() {
    log_info "Deploying to Netlify (${ENVIRONMENT})..."

    if ! command -v netlify &> /dev/null; then
        npm install -g netlify-cli
    fi

    if [ "$ENVIRONMENT" = "production" ]; then
        netlify deploy --prod --dir="$DIST_DIR" --auth="$NETLIFY_AUTH_TOKEN" --site-id="$NETLIFY_SITE_ID"
    else
        netlify deploy --dir="$DIST_DIR" --auth="$NETLIFY_AUTH_TOKEN" --site-id="$NETLIFY_SITE_ID" --branch="${ENVIRONMENT}"
    fi

    log_info "Netlify deployment completed"
}

# Deploy to Cloudflare Pages
deploy_cloudflare() {
    log_info "Deploying to Cloudflare Pages (${ENVIRONMENT})..."

    if ! command -v wrangler &> /dev/null; then
        npm install -g wrangler
    fi

    wrangler pages deploy "$DIST_DIR" --account-id="$CLOUDFLARE_ACCOUNT_ID" --project-name="echoes-of-justice-${ENVIRONMENT}"

    log_info "Cloudflare Pages deployment completed"
}

# Main deployment logic
main() {
    check_prerequisites
    install_dependencies
    run_checks
    build_site

    # Try Netlify first, then Cloudflare
    if [ -n "$NETLIFY_AUTH_TOKEN" ] && [ -n "$NETLIFY_SITE_ID" ]; then
        deploy_netlify
    elif [ -n "$CLOUDFLARE_ACCOUNT_ID" ] && [ -n "$CLOUDFLARE_API_TOKEN" ]; then
        deploy_cloudflare
    else
        log_warn "No deployment credentials found. Site built at ${DIST_DIR}"
        log_info "To deploy, set NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID, or CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN"
    fi

    echo ""
    echo "========================================"
    log_info "Deployment completed successfully!"
    echo "========================================"
}

main