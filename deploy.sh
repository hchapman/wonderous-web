#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into build output
pushd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:hchapman/wonderous-web master:gh-pages

popd
