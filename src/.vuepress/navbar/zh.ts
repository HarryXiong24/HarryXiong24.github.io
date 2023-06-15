import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "About Me",
    children: [
      { text: "About Me", icon: "info", link: "/zh/about-me/info" },
      { text: "Contact Me", icon: "community", link: "/zh/about-me/contact" },
    ],
  },
  {
    text: "随笔",
    icon: "article",
    children: [
      {
        text: "写在前面",
        link: "/zh/poem",
        // activeMatch: "^/poem/$",
      },
      {
        text: "诗集",
        icon: "flower",
        children: [{ text: "生命之歌", link: "/zh/poem/life" }],
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
      { text: "Git", link: "/zh/git", icon: "git" },
      { text: "VSCode", link: "/zh/vscode", icon: "vscode" },
    ],
  },
]);
