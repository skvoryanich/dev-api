#!/bin/sh
set -e

npm install
docker compose up -docker
npm run run-f