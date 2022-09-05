# Hello VuePress

Hello Vuepress next!

## Goals

This is an attempt to lean vuepress next to use for the DMSI and SYTWS subjects during the course 2021/2022

## Deployment

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