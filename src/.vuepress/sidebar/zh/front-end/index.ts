import { arraySidebar } from "vuepress-theme-hope";
import { html_css } from "./html-css.js";
import { pre_css } from "./pre-css.js";
import { js } from "./js.js";
import { es6 } from "./es6.js";
import { dom_bom } from "./dom-bom.js";
import { advanced_js } from "./advanced-js.js";
import { typescript } from "./typescript.js";
import { vue } from "./vue.js";
import { jquery } from "./jquery.js";
import { in_depth } from "./in-depth.js";
import { virtual_dom } from "./virtual-dom.js";

export const frontend = {
  "/zh/front-end": [
    { text: "前端总述", icon: "sort", link: "/zh/front-end/preface" },
    {
      text: "Basic",
      children: [
        {
          text: "HTML & CSS",
          link: "/zh/front-end/html-css/html",
          icon: "html",
        },
        {
          text: "Less & Scss",
          link: "/zh/front-end/pre-css/sass",
          icon: "css",
        },
        {
          text: "JavaScript",
          link: "/zh/front-end/js-es/js/",
          icon: "javascript",
        },
        { text: "ES6", link: "/zh/front-end/js-es/es6/", icon: "es6" },
        { text: "DOM & BOM", link: "/zh/front-end/dom-bom/", icon: "tree" },
        {
          text: "Data Storage",
          link: "/zh/front-end/data-storage/data-storage",
          icon: "storage",
        },
        { text: "Ajax", link: "/zh/front-end/ajax/ajax", icon: "ajax" },
      ],
    },
    {
      text: "Advanced",
      children: [
        {
          text: "JS & E6 进阶",
          link: "/zh/front-end/advanced-js/",
          icon: "javascript",
        },
        {
          text: "TypeScript",
          link: "/zh/front-end/typescript/",
          icon: "typescript",
        },
        {
          text: "Webpack",
          link: "/zh/front-end/webpack/webpack",
          icon: "file",
        },
        { text: "Vue2", link: "/zh/front-end/vue/", icon: "vue" },
      ],
    },
    {
      text: "In Depth",
      children: [
        {
          text: "浏览器渲染原理与性能优化",
          link: "/zh/front-end/in-depth/browser",
          icon: "chrome",
        },
        {
          text: "虚拟 DOM 与 Diff 算法",
          link: "/zh/front-end/virtual-dom/",
          icon: "app",
        },
        {
          text: "Http 与 Https",
          link: "/zh/front-end/in-depth/https",
          icon: "link",
        },
        {
          text: "Interview",
          link: "/zh/front-end/in-depth/interview",
          icon: "link",
        },
      ],
    },
    {
      text: "Outdated",
      children: [
        { text: "jQuery", link: "/zh/front-end/jquery/", icon: "jQuery" },
      ],
    },
  ],
  "/zh/front-end/html-css/": html_css,
  "/zh/front-end/pre-css/": pre_css,
  "/zh/front-end/js-es/js/": js,
  "/zh/front-end/js-es/es6/": es6,
  "/zh/front-end/dom-bom/": dom_bom,
  "/zh/front-end/data-storage/": ["data-storage"],
  "/zh/front-end/ajax/": ["ajax"],
  "/zh/front-end/advanced-js/": advanced_js,
  "/zh/front-end/typescript/": typescript,
  "/zh/front-end/webpack/": ["webpack"],
  "/zh/front-end/vue/": vue,
  "/zh/front-end/jquery/": jquery,
  "/zh/front-end/in-depth/": in_depth,
  "/zh/front-end/virtual-dom/": virtual_dom,
};
