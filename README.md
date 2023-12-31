<div align="center">
<img src="https://img.alicdn.com/imgextra/i3/O1CN01x1h8rS1kYoq175pqs_!!6000000004696-2-tps-128-128.png" alt="logo"/>
<h1>数据服务API (DataService API) Chrome Extension</h1>

![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![](https://badges.aleen42.com/src/vitejs.svg)

</div>

## Usage Documents

[知乎](https://zhuanlan.zhihu.com/p/674153689)
[掘金](https://juejin.cn/post/7316539465023045632)
[medium](https://medium.com/@caramels/%E5%9F%BA%E4%BA%8E-chrome-%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8%E6%95%B0%E6%8D%AE%E6%9C%8D%E5%8A%A1-api-347779692485)

## Demo

应用安装 Extension Installation [Link](https://chromewebstore.google.com/detail/%E6%95%B0%E6%8D%AE%E6%9C%8D%E5%8A%A1api/ohdabcajdgjfjpfhoghpkiifbchoonja)

操作影片
- [YouTube](https://www.youtube.com/watch?v=OzVneLAhxZM)
- [b站](https://www.bilibili.com/video/BV1ne411S7bc/)

![image](https://img.alicdn.com/imgextra/i2/O1CN01dfsLY626A0vusJcw5_!!6000000007620-49-tps-2716-1534.webp)

![image](https://img.alicdn.com/imgextra/i4/O1CN015IkPOv21v7anw9Xtl_!!6000000007046-0-tps-2878-1504.jpg)

![image](https://img.alicdn.com/imgextra/i1/O1CN01ZbBncz26PaOo35YPY_!!6000000007654-49-tps-2878-1664.webp)

![image](https://img.alicdn.com/imgextra/i2/O1CN01f83rzJ1unbmfy62Yh_!!6000000006082-49-tps-2878-1662.webp)

## Table of Contents

- [Intro](#intro)
- [Features](#features)
- [Installation](#installation)
    - [Procedures](#procedures)
        - [Chrome](#chrome)
        - [Firefox](#firefox)
- [Documents](#documents)

## Intro <a name="intro"></a>

This is a Chrome extension using data service APIs.

## Features <a name="features"></a>

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vite](https://vitejs.dev/)
- [SASS](https://sass-lang.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/getting-started.html#automatic-recommended)
- [Commitlint](https://commitlint.js.org/#/guides-local-setup?id=install-commitlint)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
- [Chrome Extension Manifest Version 3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- HRR(Hot Rebuild & Refresh/Reload)

## Installation <a name="installation"></a>

## Procedures: <a name="procedures"></a>

1. Clone this repository.
2. Change `name` and `description` in package.json => **Auto synchronize with manifest**
3. Install pnpm globally: `npm install -g pnpm` (check your node version >= 16.6, recommended >= 18)
4. Run `pnpm install`

## And next, depending on the needs:

### For Chrome: <a name="chrome"></a>

1. Run:
    - Dev: `pnpm dev` or `npm run dev`
    - Prod: `pnpm build` or `npm run build`
2. Open in browser - `chrome://extensions`
3. Check - `Developer mode`
4. Find and Click - `Load unpacked extension`
5. Select - `dist` folder

### For Firefox: <a name="firefox"></a>

1. Run:
    - Dev: `pnpm dev:firefox` or `npm run dev:firefox`
    - Prod: `pnpm build:firefox` or `npm run build:firefox`
2. Open in browser - `about:debugging#/runtime/this-firefox`
3. Find and Click - `Load Temporary Add-on...`
4. Select - `manifest.json` from `dist` folder

### <i>Remember in firefox you add plugin in temporary mode, that's mean it's disappear after close browser, you must do it again, on next launch.</i>

## Documents <a name="documents"></a>

- [Vite Plugin](https://vitejs.dev/guide/api-plugin.html)
- [ChromeExtension](https://developer.chrome.com/docs/extensions/mv3/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Rollup-plugin-chrome-extension](https://www.extend-chrome.dev/rollup-plugin)

