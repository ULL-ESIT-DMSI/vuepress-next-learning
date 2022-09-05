# Hello VuePress

Hello Vuepress next!

## Goals

This is an attempt to lean vuepress next to use for the DMSI and SYTWS subjects during the course 2021/2022

## Deployment on GitHub Pages

1. I have to go to settings --> pages and configure the pages to set as `source` the value `deploy from a branch` and as branch `gh-pages` and folder to `/(root)`
2. Have to create a secret with a token named `ACCESS_TOKEN` with the appropriate permits:
3. The I am using [jenkey2011/vuepress-deploy@master]() in my action file:

    ```yml
    name: Build and Deploy
    on: [push]
    jobs:
      build-and-deploy:
        runs-on: ubuntu-latest
        steps:
        - name: Checkout
          uses: actions/checkout@master

        - name: vuepress-deploy
          uses: jenkey2011/vuepress-deploy@master
          env:
            ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }} # token created
            TARGET_REPO: ULL-ESIT-DMSI/vuepress-next-learning
            TARGET_BRANCH: main
            BUILD_SCRIPT: npm install && npm run docs:build
            BUILD_DIR: docs/.vuepress/dist/
    ```