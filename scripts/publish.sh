#!/bin/bash
# Publish using surge

# Build project.
npm run build

# Publish
surge www/ -d dw-fighter.surge.sh
