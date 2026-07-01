#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env.deploy"

if [ ! -f "$ENV_FILE" ]; then
  echo "Error: $ENV_FILE not found. Copy .env.deploy.example and fill in your credentials."
  exit 1
fi

source "$ENV_FILE"

echo "→ Building..."
bun run build

echo "→ Uploading to $FTP_HOST$FTP_REMOTE_DIR ..."
lftp -c "
  open -u $FTP_USER,$FTP_PASS ftp://$FTP_HOST
  mirror --reverse --delete --verbose dist/ $FTP_REMOTE_DIR
  bye
"

echo "✓ Deploy complete."
