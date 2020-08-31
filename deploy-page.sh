npm run build
cd dist
git init
git add -A
git commit -m "$*"
git push -f https://github.com/mitsuoysharag/mvuecss.git  master:gh-pages

# sh deploy-page.sh deploy page