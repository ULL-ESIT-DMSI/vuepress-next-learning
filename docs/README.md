# Hello VuePress next!

## Introduction

For the course 22/23 I want to try Vuepress next with most of the subjects I teach.
Hello Vuepress next!

## Goals

This is an attempt to lean vuepress next to use for the DMSI and SYTWS subjects during the course 2021/2022

## Deployment of this site on GitHub Pages

1. I have to go to `settings`in this repo and then to `pages` and configure the pages to set as `source` the value `deploy from a branch` and as branch `gh-pages` and folder to `/(root)`
2. Have to create in the settings of this repo a secret with a token named `ACCESS_TOKEN` with the appropriate permits
3. The I am using [jenkey2011/vuepress-deploy@master](https://github.com/marketplace/actions/vuepress-deploy) in my action file:

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