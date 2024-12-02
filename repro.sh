#!/bin/sh

./node_modules/.bin/esbuild src/server.jsx --platform=node --bundle --outfile=dist/server.js
./node_modules/.bin/esbuild src/client.jsx --bundle --outfile=dist/client.js
node dist/server.js
