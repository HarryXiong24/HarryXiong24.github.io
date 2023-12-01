import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/zh/",
  {
    text: "文章",
    icon: "article",
    children: [
      {
        text: "React 函数式组件 vs 类组件",
        link: "/zh/article/react-function-component",
      },
      {
        text: "上手 Mobx",
        link: "/zh/article/mobx",
      },
      {
        text: "一文搞懂 Webpack 热更新原理",
        link: "/zh/article/webpack-hot-fresh",
      },
      {
        text: "一文总结 Javascript 中的遍历方式",
        link: "/zh/article/js-traversal",
      },
      {
        text: "给你的库或框架设计一个通用错误处理模型",
        link: "/zh/article/error-modal",
      },
    ],
  },
  {
    text: "随笔",
    icon: "exercise",
    children: [
      {
        text: "写在前面",
        link: "/zh/poem",
        // activeMatch: "^/poem/$",
      },
      {
        text: "诗集",
        link: "/zh/poem/my-poem",
      },
      {
        text: "随写",
        link: "/zh/poem/essay",
      },
    ],
  },
  {
    text: "学习笔记",
    icon: "note",
    children: [
      { text: "Web 前端", link: "/zh/front-end", icon: "code" },
      { text: "Web 后台", link: "/zh/back-end", icon: "software" },
      { text: "计算机基础系列", link: "/zh/computer-basic", icon: "computer" },
      { text: "Python", icon: "python", link: "/zh/python" },
      {
        text: "Markdown",
        link: "/zh/markdown/markdown",
        icon: "markdown",
      },
      {
        text: "JSON",
        link: "/zh/json/json",
        icon: "json",
      },
      {
        text: "YAML",
        link: "/zh/yaml/yaml",
        icon: "yaml",
      },
      { text: "Git", link: "/zh/git", icon: "git" },
      { text: "VSCode", link: "/zh/vscode", icon: "vscode" },
    ],
  },
  {
    text: "关于我",
    icon: "profile",
    children: [
      { text: "About Me", icon: "info", link: "/zh/about-me/intro" },
      { text: "联系我", icon: "community", link: "/zh/about-me/contact" },
    ],
  },
]);
