#!/bin/sh
set -e

npm install
docker compose up -d
npm run run-f